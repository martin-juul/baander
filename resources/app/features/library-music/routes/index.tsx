import { Route, Routes } from 'react-router-dom';

import Albums from '@/features/library-music/routes/albums.tsx';
import Songs from '@/features/library-music/routes/songs.tsx';


export const LibraryMusicRoutes = () => {
  return (
    <Routes>
      <Route path="/albums" element={<Albums />}></Route>
      <Route path="/songs" element={<Songs />}></Route>
    </Routes>
  )
}
