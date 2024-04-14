import { gql } from "@apollo/client";
import { Song } from "@/graphql/__generated__/graphql.ts";


export const SONG_QUERY = gql`
  query Song($song_id: ID!) {
    song(id: $song_id) {
      id
      title
      track
      disc
      duration
      length
      lyrics
      streamUrls {
        directStream
      }
      artists {
        name
      }
      album {
        title
      }
      genres {
        name
      }
    }
  }
`;

export interface SongResponse {
  song: Song;
}

export interface SongVariables {
  song_id: string;
}
