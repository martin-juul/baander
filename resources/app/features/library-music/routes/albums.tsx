import { useState } from 'react';
import { albumMocks, Album as AlbumModel } from '@/features/library-music/mock.ts';
import { Album } from '@/features/library-music/components/album/album.tsx';

import styles from './albums.module.scss';
import { Layout } from '@douyinfe/semi-ui';
import { AlbumDetail } from '@/features/library-music/components/album-detail/album-detail.tsx';
import { CoverGrid } from '@/features/library-music/components/cover-grid';

export default function Albums() {
  const [showAlbumDetail,setShowAlbumDetail] = useState<AlbumModel | null>(null);

  const list = albumMocks;

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

        {showAlbumDetail && (
          <div className={styles.albumDetailContainer}>
            <AlbumDetail album={showAlbumDetail}/>
          </div>
        )}
      </Layout>
    </>
  );
}
