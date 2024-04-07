import React from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import Sider from '@douyinfe/semi-ui/lib/es/layout/Sider';
import { OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation';
import { useNavigate } from 'react-router-dom';

interface SettingsLayoutProps {
  children?: React.ReactNode;
}

export function SettingsLayout({children}: SettingsLayoutProps) {
  const navigate = useNavigate();


  return (
    <Layout>
      <Sider>
        <Nav
          defaultOpenKeys={['library-management']}
          onSelect={(item: OnSelectedData) => {
            // see features/settings/routes/index.tsx for route paths
            navigate(item.itemKey.toString());
          }}
          items={[
            {
              text: 'Media libraries', itemKey: 'library-management',
              items: [{ text: 'Create new library', itemKey: 'media-libraries/new' }, { text: 'Manage libraries', itemKey: 'media-libraries/manage' }],
            },
            {
              text: 'Authentication', itemKey: 'auth-management',
              items: [{text: 'API keys', itemKey: '/settings/auth/tokens'}, {text: 'OAuth clients', itemKey: 'oauth-clients'}],
            },
          ]}
        />
      </Sider>

      {children}
    </Layout>
  );
}
