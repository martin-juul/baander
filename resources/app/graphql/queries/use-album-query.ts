import { gql } from "@apollo/client";
import { Album, OrderByClause } from "@/graphql/__generated__/graphql.ts";

export const ALBUM_QUERY = gql`
  query Album($album_id: ID!) {
    album(id: $album_id) {
      id
      title
      slug
      year
      coverUrl
      created_at
      updated_at
      albumArtist {
        id
        name
      }
      songs {
        id
        title
        track
        disc
        duration
        modified_time
        lyrics
        path
        created_at
        updated_at
      }
    }
  }
`;

export interface AlbumResponse {
  album: Album;
}

export interface AlbumVariables {
  album_id: string;
  order_by: OrderByClause
}
