import { publicRoutes } from '@/routes/public';
import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from '@/routes/protected';
import { Auth } from '@/services/auth';

export function AppRoutes() {
  const isAuthenticated = Auth.isAuthenticated();

  // see https://github.com/alan2207/bulletproof-react/blob/master/src/routes/index.tsx
  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
