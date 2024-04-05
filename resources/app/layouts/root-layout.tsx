import { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui';
import { Outlet } from 'react-router-dom';
import { IconBell } from '@douyinfe/semi-icons';

type SideNavigationItem = {
  itemKey: string;
  text: string;
  to: string;
  icon: ReactNode;
}

const SideNavigation = () => {
  const navigation: SideNavigationItem[] = [
    {
      itemKey: 'Recently Added',
      text: 'Recently Added',
      to: '/recently-added',
      icon: <Icon icon="f7:music-note"/>,
    },
    { itemKey: 'Artists', text: 'Artists', to: '/', icon: <Icon icon="zondicons:music-artist"/> },
    { itemKey: 'Albums', text: 'Albums', to: '/', icon: <Icon icon="f7:music-albums"/> },
    { itemKey: 'Songs', text: 'Songs', to: '/', icon: <Icon icon="f7:music-note"/> },
    { itemKey: 'Genres', text: 'Genres', to: '/', icon: <Icon icon="f7:music-note-list"/> },
  ];

  return (
    <Nav
      bodyStyle={{ height: 320 }}
      items={navigation}
      header={{
        text: 'Bånder',
      }}
      footer={{
        collapseButton: true,
      }}
    >
    </Nav>
  );
};

export function RootLayout(props: { children?: ReactNode }) {
  const { Header, Sider } = Layout;

  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <SideNavigation/>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={<IconBell size="large"/>}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Avatar color="orange" size="small">MC</Avatar>
              </>
            }
          >
          </Nav>
        </Header>
        <>
          {props.children}
          <Outlet/>
        </>
      </Layout>
    </Layout>
  );
}
