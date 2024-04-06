import { gql, MutationHookOptions, useMutation } from '@apollo/client';

export interface AuthPayload {
  login: Login
}

export interface Login {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
  user: User
  __typename: string
}

export interface User {
  name: string
  is_admin: boolean
  created_at: string
  updated_at: string
  __typename: string
}


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
  options?: MutationHookOptions<AuthPayload, LoginInput>,
) => {
  return useMutation<AuthPayload, LoginInput>(loginMutation, options);
};

export default useLoginMutation;
