import React from 'react';
import Routes from 'routes/Routes';
import { Layout} from  './panelStyle';
import SideMenu from 'components/SideMenu';

export default function Panel() {
  return (
    <Layout>
      <SideMenu/>
      <Layout>
          <Routes/>
      </Layout>
    </Layout>
  );
}
