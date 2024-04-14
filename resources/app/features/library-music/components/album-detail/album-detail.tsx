import { Cover } from '@/features/library-music/components/artwork/cover';
import { Banner, Spin, Table, Typography } from '@douyinfe/semi-ui';

import styles from './album-detail.module.scss';
import { useQuery } from '@apollo/client';
import { ALBUM_QUERY, AlbumResponse, AlbumVariables } from '@/graphql/queries/use-album-query.ts';
import { Song, SortOrder } from '@/graphql/__generated__/graphql.ts';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useAppDispatch } from '@/store/hooks.ts';
import { setCurrentSongId } from '@/store/music-player/music-player-slice.ts';

interface AlbumDetailProps {
  albumId: string;
}

export function AlbumDetail({albumId}: AlbumDetailProps) {
  const {data, loading, error} = useQuery<AlbumResponse, AlbumVariables>(ALBUM_QUERY, {
    variables: {
      album_id: albumId,
      order_by: {
        column: 'track',
        order: SortOrder.Asc,
      },
    },
  });

  const {Title, Text} = Typography;

  return (
    <>
      {loading && <Spin/>}
      {error && <Banner type="danger" description={error.message}/>}

      <div className={styles.albumDetail}>
        <div className={styles.albumInfo}>
          <div className={styles.albumCover}>
            <Cover imgSrc={data?.album.coverUrl ?? undefined} size={220}/>
          </div>

          <div className={styles.albumResume}>
            <Title heading={2}>{data?.album.title}</Title>
            {data?.album.albumArtist && (
              <Text type="secondary">{data?.album.albumArtist?.name}</Text>
            )}


            <Text type="secondary">album.genre - {data?.album.year}</Text>
          </div>
        </div>

        <div>

          <div className={styles.trackList}>
            {data?.album.songs && <AlbumSongs songs={data?.album.songs}/>}
          </div>
        </div>
      </div>
    </>
  );
}

interface AlbumSongProps {
  songs: Song[];
}

function AlbumSongs({songs}: AlbumSongProps) {
  const dispatch = useAppDispatch();

  const playSong = (songId: string) => {
    dispatch(setCurrentSongId(songId));
  };

  const columns: ColumnProps<Song>[] = [
    {
      name: 'Track',
      dataIndex: 'track',
    },
    {
      name: 'Title',
      dataIndex: 'title',
    },
    {
      name: 'Duration',
      dataIndex: 'duration',
    },
  ];


  return (
    <>
      <Table<Song>
        columns={columns}
        dataSource={songs}
        pagination={false}
        indentSize={8}
        size={'small'}
        showHeader={false}
        onRow={(record) => ({
          className: styles.trackRow,
          onClick: () => {
            if (record && record.id) {
              playSong(record.id);
            }
          },
        })}
      />
    </>
  );
}
