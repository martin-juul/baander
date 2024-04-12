import { Route, Routes } from 'react-router-dom';
import { TokensList } from '@/features/settings/routes/auth/tokens-list.tsx';
import { Dashboard } from '@/features/settings/routes/dashboard.tsx';
import { CreateNewLibrary, ManageLibraries } from '@/features/settings/routes/media-libraries';


export const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="auth/tokens" element={<TokensList />} />

      <Route path="media-libraries/new" element={<CreateNewLibrary />} />
      <Route path="media-libraries/manage" element={<ManageLibraries />} />
    </Routes>
  )
}
