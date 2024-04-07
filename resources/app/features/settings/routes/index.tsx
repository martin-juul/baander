import { Route, Routes } from 'react-router-dom';
import { TokensList } from '@/features/settings/routes/auth/tokens-list.tsx';
import { Dashboard } from '@/features/settings/routes/dashboard.tsx';
import { CreateNewLibrary } from '@/features/settings/routes/media-libraries/create-new-library.tsx';


export const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="auth/tokens" element={<TokensList />} />

      <Route path="media-libraries/new" element={<CreateNewLibrary />} />
    </Routes>
  )
}
