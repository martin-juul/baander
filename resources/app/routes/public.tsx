import { lazyImport } from '@/hooks/lazy-import.ts';
import { BareLayout } from '@/layouts/bare-layout.tsx';
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
      { path: 'login/*', element: <AuthRoutes /> },
    ]
  },
];
