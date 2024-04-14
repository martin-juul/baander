import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentSongId } from '@/store/music-player/music-player-slice.ts';
import { ApolloQueryResult, useApolloClient } from '@apollo/client';
import { SONG_QUERY, SongResponse, SongVariables } from '@/graphql/queries';

interface MusicPlayerContextType {
  song: ApolloQueryResult<SongResponse> | null,
}

export const MusicPlayerContext = React.createContext<MusicPlayerContextType>({
  song: null,
});

export const useMusicPlayerContext = () =>  useContext(MusicPlayerContext);

export function MusicPlayerProvider({children}: { children: React.ReactNode }) {
  const currentSongId = useSelector(selectCurrentSongId);
  const [song, setSong] = useState<ApolloQueryResult<SongResponse> | null>(null);
  const client = useApolloClient();

  useEffect(() => {
    if (currentSongId !== null) {
      client.query<SongResponse, SongVariables>({
        query: SONG_QUERY,
        variables: {
          song_id: currentSongId,
        },
      }).then(res => {
        setSong(res);
      });
    }
  }, [currentSongId]);

  return (
    <MusicPlayerContext.Provider value={{
      song,
    }}>{children}</MusicPlayerContext.Provider>
  );
}
