
import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { AccessTokenPaginator } from '@/graphql/__generated__/graphql.ts';


// @ts-ignore
export const AccessTokensQuery = gql`
  query AccessTokens($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {
    accessTokens(order_by: $order_by, first: $first, page: $page) {
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
        name,
        scopes,
        revoked,
        #created_at,
        #updated_at
        #expires_at
      }
    }
  }
`

export interface AccessTokenResponse {
  accessTokens: AccessTokenPaginator
}

export const useAccessTokensQuery = (_options?: QueryHookOptions<AccessTokenPaginator>) => {
  return useQuery<AccessTokenResponse>(AccessTokensQuery)
}
