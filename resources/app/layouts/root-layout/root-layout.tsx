import { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui';
import { Link, useLocation } from 'react-router-dom';
import { IconBell } from '@douyinfe/semi-icons';
import { InlinePlayer } from '@/features/library-music-player/inline-player';

import styles from './root-layout.module.scss';
import { BaanderLogo } from '@/features/branding/baander-logo';
import { MusicPlayerProvider } from '@/features/library-music-player/providers';

type SideNavigationItem = {
  itemKey: string;
  text: string;
  icon: ReactNode;
}

const LibraryNavigation = () => {
  const navigation: SideNavigationItem[] = [
    {
      itemKey: 'Recently Added',
      text: 'Recently Added',
      icon: <Icon icon="f7:music-note"/>,
    },
    {itemKey: 'Artists', text: 'Artists', icon: <Icon icon="zondicons:music-artist"/>},
    {itemKey: 'Albums', text: 'Albums', icon: <Icon icon="f7:music-albums"/>},
    {itemKey: 'Songs', text: 'Songs', icon: <Icon icon="f7:music-note"/>},
    {itemKey: 'Genres', text: 'Genres', icon: <Icon icon="f7:music-note-list"/>},
  ];

  return (
    <Nav
      style={{height: 'inherit'}}
      bodyStyle={{height: 320}}
      items={navigation}
      header={{
        text: 'Library',
      }}
      footer={{
        collapseButton: true,
      }}
      renderWrapper={({itemElement, props}) => {
        const routerMap = {
          Artists: '/library/music/artists',
          Albums: '/library/music/albums',
          Songs: '/library/music/songs',
          Genres: '/library/music/genres',
        };

        return (
          // @ts-ignore
          <Link to={routerMap[props.itemKey]} style={{textDecoration: 'none'}}>
            {itemElement}
          </Link>
        );
      }}
    >
    </Nav>
  );
};

export function RootLayout(props: { children?: ReactNode }) {
  const {Header, Footer, Content, Sider} = Layout;
  const location = useLocation();

  return (
    <MusicPlayerProvider>
      <Layout style={{height: '100vh'}}>
        <Header style={{backgroundColor: 'var(--semi-color-bg-1)', backdropFilter: 'blur(6px)'}}>
          <Nav
            mode="horizontal"
            header={{
              logo: (
                <span className={styles.navigationHeaderLogo}>
                <BaanderLogo size={36}/>
              </span>
              ),
              text: 'Bånder',
              link: '/',
            }}
            footer={
              <>
                <Link to="/settings" style={{textDecoration: 'none'}}>
                  <Button theme="borderless" style={{color: 'var(--semi-color-text-2)', marginRight: '12px'}}
                          icon={<Icon icon="fa-solid:cog"/>}/>
                </Link>

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
        <Layout>
          {!location.pathname.startsWith('/settings') && (
            <Sider>
              <LibraryNavigation/>
            </Sider>
          )}
          <Content>{props.children}</Content>
        </Layout>
        <Footer className={styles.footer}>
          <div className={styles.footerWell}>
            <InlinePlayer/>
          </div>
        </Footer>
      </Layout>
    </MusicPlayerProvider>
  );
}
