import styles from './album-detail.module.scss';
import { Album, trackMocks } from '@/features/library-music/mock.ts';
import { Cover } from '@/features/library-music/components/artwork/cover';
import { Typography } from '@douyinfe/semi-ui';

interface AlbumDetailProps {
  album: Album;
}

export function AlbumDetail({album}: AlbumDetailProps) {
  const { Title, Text } = Typography;

  const tracks = trackMocks;

  return (
    <div className={styles.albumDetail}>
      <div className={styles.albumResume}>
        <div className={styles.albumCover}>
          <Cover imgSrc={album.cover} size={220}/>
        </div>

        <Title heading={2}>{album.title}</Title>
        <Text type="secondary">{album.artist}</Text>

        <Text type="secondary">{album.genre} - {album.releaseYear}</Text>
      </div>

      <div className={styles.trackList}>
        {tracks.map((track, index) => (
          <div className={styles.track} key={index}>
            <Text type="primary">{track.number}</Text>
            <Text>{track.title}</Text>
            <Text>{track.duration}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
