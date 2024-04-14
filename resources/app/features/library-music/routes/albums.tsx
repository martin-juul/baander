import { useState } from 'react';
import { Album } from '@/features/library-music/components/album/album.tsx';

import styles from './albums.module.scss';
import { Banner, Layout, Spin } from '@douyinfe/semi-ui';
import { AlbumDetail } from '@/features/library-music/components/album-detail/album-detail.tsx';
import { CoverGrid } from '@/features/library-music/components/cover-grid';
import { useAlbumsQuery } from "@/graphql/queries/use-albums-query.ts";

export default function Albums() {
  const [showAlbumDetail,setShowAlbumDetail] = useState<string | null>(null);
  const { data, loading, error } = useAlbumsQuery();

  return (
    <>
      {error && (
        <Banner type="danger" description={error.message} />
      )}

      {loading && (
        <Spin />
      )}

      <Layout className={styles.albumsLayout}>
        <div className={styles.grid}>
          <CoverGrid>
            {data?.albums.data.map((album) => (
              <div className={styles.album} key={album.id}>
                <Album
                  title={album.title}
                  primaryArtist={album.albumArtist?.name}
                  imgSrc={album.coverUrl ?? undefined}
                  onClick={() => setShowAlbumDetail(album.id)}

                />
              </div>
            ))}
          </CoverGrid>
        </div>

        {showAlbumDetail && (
          <div className={styles.albumDetailContainer}>
            <AlbumDetail albumId={showAlbumDetail}/>
          </div>
        )}
      </Layout>
    </>
  );
}
