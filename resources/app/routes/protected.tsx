import { RootLayout } from '@/layouts/root-layout';
import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { lazyImport } from '@/hooks/lazy-import.ts';
import { SettingsLayout } from '@/features/settings/layout/settings-layout.tsx';

const { LibraryMusicRoutes } = lazyImport(() => import('@/features/library-music/routes'), 'LibraryMusicRoutes');
const { SettingsRoutes } = lazyImport(() => import('@/features/settings/routes'), 'SettingsRoutes');


const App = () => {
  return (
    <RootLayout>
        <Suspense>
          <Outlet/>
        </Suspense>
    </RootLayout>
  );
};

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/library/music/*',
        element: <LibraryMusicRoutes />,
      },
      {
        path: '/settings/*',
        element: <SettingsLayout><SettingsRoutes /></SettingsLayout>,
      }
    ],
  },
];
