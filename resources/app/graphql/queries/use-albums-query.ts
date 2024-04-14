import { gql, useQuery } from "@apollo/client";
import { AlbumPaginator, OrderByClause } from "@/graphql/__generated__/graphql.ts";

export const ALBUMS_QUERY = gql`
  query AlbumsLibraries($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {
    albums(order_by: $order_by, first: $first, page: $page) {
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
        title,
        slug,
        year,
        coverUrl,
        created_at,
        updated_at,
        albumArtist {
          name
        }
      }
    }
  }
`;

export interface AlbumsResponse {
  albums: AlbumPaginator;
}

export interface AlbumsVariables {
  order_by: OrderByClause[];
  first: number;
  page: number;
}

export const useAlbumsQuery = () => {
  return useQuery<AlbumsResponse, AlbumsVariables>(ALBUMS_QUERY);
}
