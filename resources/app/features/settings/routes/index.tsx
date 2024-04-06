import { Route, Routes } from 'react-router-dom';
import { TokensList } from '@/features/settings/routes/tokens-list.tsx';
import { Dashboard } from '@/features/settings/routes/dashboard.tsx';


export const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="tokens" element={<TokensList />} />
    </Routes>
  )
}
