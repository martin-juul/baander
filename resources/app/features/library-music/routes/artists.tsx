import { Layout } from '@douyinfe/semi-ui';

import styles from './artists.module.scss';
import { CoverGrid } from '@/features/library-music/components/cover-grid';
import { artistMocks } from '@/features/library-music/mock.ts';
import { ArtistBigCircle } from '@/features/library-music/components/artwork/artist-big-circle/artist-big-circle.tsx';

export default function Artists() {
  const list = artistMocks;

  return (
    <Layout className={styles.artistsLayout}>
      <CoverGrid style={{ gap: '32px' }}>
        {list.map((artist, index) => (
          <div className={styles.artist} key={index}>
            <ArtistBigCircle artist={artist} />
          </div>
        ))}
      </CoverGrid>
    </Layout>
  );
}
