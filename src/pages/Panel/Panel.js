import React from 'react';
import Routes from '../../Routes';
import { Layout} from  './panelStyle';
import SideMenu from '../../components/SideMenu';

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
