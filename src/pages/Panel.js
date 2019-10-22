import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../Routes';
import { Layout,} from  'antd';
import SideMenu from '../components/SideMenu';
const { Header, Content, Sider } = Layout;


export default function Panel() {
  return (
    <Layout>
      <SideMenu/>
      <Layout>
        <Switch>
          <Routes/>
        </Switch>


          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          {/* <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
          </Content> */}
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}
