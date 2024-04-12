import { Paginator, PagintatorInput, User } from '@/graphql/types';
import { gql, QueryHookOptions, useLazyQuery, useQuery } from '@apollo/client';

export type UsersType = {
  users: {
    __typename?: 'UserPaginator';
    paginatorInfo: Paginator;
    data: [User]
  }
}

export const UsersQuery = gql`
  query users($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {
    users(order_by: $order_by, first: $first, page: $page) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        id
        name
        email
        is_admin
      }
    }
  }
`;

const useUsersQuery = (
  options?: QueryHookOptions<UsersType, PagintatorInput>
) => {
  return useQuery<UsersType, PagintatorInput>(UsersQuery, options);
};

export const useUsersLazyQuery = (
  options?: QueryHookOptions<UsersType, PagintatorInput>
) => {
  return useLazyQuery<UsersType, PagintatorInput>(UsersQuery, options);
};

export default useUsersQuery;
