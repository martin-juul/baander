import useLoginMutation from '@/graphql/mutations/useLoginMutation.tsx';
import { Button, Form, Notification } from '@douyinfe/semi-ui';
import { localStorage } from '@/services/local-storage.ts';

type LoginInput = {
  email: string;
  password: string;
}

export default function Login() {
  const [login, { data, loading, error }] = useLoginMutation();

  const onSubmit = async (formData: LoginInput) => {
    try {
      await login({ variables: { username: formData.email, password: formData.password } });
    } catch {
    }

    if (data?.login?.token) {
      console.log(data.login.token)

      localStorage.setToken(data.login);
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
        <Form.Input field="email" label="E-Mail" style={{ width: '100%' }} placeholder="E-Mail" required/>
        <Form.Input field="password" label="Password" style={{ width: '100%' }} placeholder="Password" required/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>
            <span>Or</span><Button theme="borderless"
                                   style={{ color: 'var(--semi-color-primary)', marginLeft: 10, cursor: 'pointer' }}>Sign
            up</Button>
          </p>
          <Button htmlType="submit" type="tertiary" disabled={loading}>Log in</Button>
        </div>
      </Form>
    </>
  );
}
