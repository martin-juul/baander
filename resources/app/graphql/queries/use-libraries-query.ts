import { gql, useQuery } from '@apollo/client';
import { LibraryPaginator, OrderByClause } from '@/graphql/__generated__/graphql.ts';

export const LibrariesQuery = gql`
  query Libraries($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {
    libraries(order_by: $order_by, first: $first, page: $page) {
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
        id,
        name,
        path,
        type,
        order,
        last_scan,
        created_at,
        updated_at
      }
    }
  }
`;

export interface LibrariesResponse {
  libraries: LibraryPaginator;
}

export interface LibrariesVariables {
  order_by: OrderByClause[];
  first: number;
  page: number;
}

export const useLibrariesQuery = () => {
  return useQuery<LibrariesResponse, LibrariesVariables>(LibrariesQuery);
}
