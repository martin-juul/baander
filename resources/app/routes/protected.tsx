import { RootLayout } from '@/layouts/root-layout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <RootLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </RootLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/*',
    element: <App />,

  }
];
