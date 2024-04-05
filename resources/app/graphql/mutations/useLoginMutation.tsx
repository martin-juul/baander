import { gql, MutationHookOptions, useMutation } from '@apollo/client';

export type LoginType = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'AccessToken';
    token: string;
  };
};

export type LoginInput = {
  username: string;
  password: string;
};

export const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(input: {username: $username, password: $password}) {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        name
        is_admin
        created_at
        updated_at
      }
    }
  }
`;

const useLoginMutation = (
  options?: MutationHookOptions<LoginType, LoginInput>,
) => {
  return useMutation<LoginType, LoginInput>(loginMutation, options);
};

export default useLoginMutation;
