
import { albumMocks, artistMocks, trackMocks } from '@/features/library-music/mock.ts';

import styles from './songs.module.scss';
import { Layout } from '@douyinfe/semi-ui';
import { ScrollList } from '@/features/library-music/components/scroll-list';

export default function Songs() {

  const genres = ['Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical', 'Electronic', 'R&B', 'Country', 'Metal', 'Blues'].sort();
  const artists = artistMocks.slice().sort((a, b) => a.name.localeCompare(b.name))
  const albums = albumMocks.slice().sort((a, b) => a.title.localeCompare(b.title));
  const tracks = trackMocks.slice().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Layout className={styles.songsLayout}>
      <div className={styles.categories}>
        <div className={styles.category}>
          <ScrollList
            header="Genres"
            listItems={genres}
            totalCount={genres.length}
            style={{ height: 150 }}
          />
        </div>

        <div className={styles.category}>
          <ScrollList
            header="Artists"
            listItems={artists.slice().map(x => x.name)}
            totalCount={artists.length}
            style={{ height: 150 }}
          />
        </div>

        <div className={styles.category}>
          <ScrollList
            header="Albums"
            listItems={albums.slice().map(x => x.title)}
            totalCount={albums.length}
            style={{ height: 150 }}
          />
        </div>
      </div>

    </Layout>
  )
}
