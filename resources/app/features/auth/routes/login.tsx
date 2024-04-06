import useLoginMutation from '@/graphql/mutations/useLoginMutation.tsx';
import { Button, Form, Notification } from '@douyinfe/semi-ui';
import { useAppDispatch } from '@/store/hooks.ts';
import { BearerToken, setIsAuthenticated, setToken, setUser, UserModel } from '@/store/users/auth-slice.ts';

type LoginInput = {
  email: string;
  password: string;
}

export default function Login() {
  const [login, {data, loading, error}] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: LoginInput) => {
    await login({variables: {username: formData.email, password: formData.password}});

    if (data?.login && data.login.token_type === 'Bearer') {
      const token: BearerToken = {
        token_type: data.login.token_type,
        access_token: data.login.access_token,
        refresh_token: data.login.refresh_token,
        expires_in: data.login.expires_in,
      };

      const user: UserModel = {
        name: data.login.user.name,
        is_admin: data.login.user.is_admin,
        created_at: new Date(data.login.user.created_at),
        updated_at: new Date(data.login.user.updated_at),
      };

      dispatch(setToken(token));
      dispatch(setUser(user));
      dispatch(setIsAuthenticated(true));
    }

    if (error?.message) {
      Notification.open({
        title: 'Unable to login',
        content: error.message,
      });
    }
  };

  return (
    <>
      <Form<LoginInput>
        onSubmit={onSubmit}
      >
        <Form.Input field="email" type="email" label="E-Mail" style={{width: '100%'}} placeholder="E-Mail" required/>
        <Form.Input type="password" field="password" label="Password" style={{width: '100%'}} placeholder="Password"
                    required/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p>
            <span>Or</span><Button theme="borderless"
                                   style={{color: 'var(--semi-color-primary)', marginLeft: 10, cursor: 'pointer'}}>Sign
            up</Button>
          </p>
          <Button htmlType="submit" type="tertiary" disabled={loading}>Log in</Button>
        </div>
      </Form>
    </>
  );
}
