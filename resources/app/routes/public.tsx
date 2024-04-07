import { lazyImport } from '@/hooks/lazy-import';
import { BareLayout } from '@/layouts/bare-layout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

const App = () => {
  return (
    <BareLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </BareLayout>
  )
}

export const publicRoutes = [
  {
    path: '/*',
    element: <App />,
    children: [
      { path: '*', element: <AuthRoutes /> },
    ],
  },
];
