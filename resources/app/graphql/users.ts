import { gql } from '@apollo/client';

export const LIST_USERS = gql`query ListUsers {
    users {
        data {
            name,
            is_admin,
            email
        }
    }
}
`
