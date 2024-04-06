import { albumMocks, Album as AlbumModel } from '@/features/library-music/mock.ts';
import { Album } from '@/features/library-music/components/album/album.tsx';

import styles from './albums.module.scss';
import { Layout } from '@douyinfe/semi-ui';
import { useRef, useState } from 'react';
import { AlbumDetail } from '@/features/library-music/components/album-detail/album-detail.tsx';
import { useClickOutside } from '@react-awesome/use-click-outside';
import { CoverGrid } from '@/features/library-music/components/cover-grid';

export default function Albums() {
  const [showAlbumDetail, setShowAlbumDetail] = useState<AlbumModel | null>(null);
  const list = albumMocks;

  const ref = useRef(null);
  useClickOutside(ref.current, () => {
    setShowAlbumDetail(null);
  });

  return (
    <>
      <Layout className={styles.albumsLayout}>
        <CoverGrid>
          {list.map((album, index) => (
            <div className={styles.album} key={index}>
              <Album
                title={album.title}
                primaryArtist={album.artist}
                onClick={() => setShowAlbumDetail(album)}
              />
            </div>
          ))}
        </CoverGrid>
      </Layout>

      {showAlbumDetail && (
        <div className={styles.albumDetailContainer} ref={ref}>
          <AlbumDetail album={showAlbumDetail}/>
        </div>
      )}
    </>
  );
}
