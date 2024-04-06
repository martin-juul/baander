import { Route, Routes } from 'react-router-dom';

import Login from './login.tsx';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
    </Routes>
  )
}
