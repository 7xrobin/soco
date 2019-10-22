import React from 'react';
import { Layout, Menu, Icon  } from  'antd';
const { Sider } = Layout;

export default function SideMenu() {
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
    >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Cooperativa</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span className="nav-text">Material Recebido</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="nav-text">Material Vendido</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span className="nav-text">Material Despensado</span>
        </Menu.Item>
        <Menu.Item key="5">
          <span className="nav-text">Despesas</span>
        </Menu.Item>
        <Menu.Item key="5">
          <span className="nav-text">Doações</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
