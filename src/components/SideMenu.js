import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon  } from  'antd';
import {LogoName} from './baseComponents';

const { Sider } = Layout;

export default function SideMenu() {
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
    >
      <LogoName>Soco</LogoName>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to='/'>
            <Icon type="user" />
            <span className="nav-text">Cooperativa</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/material-in'>
            <span className="nav-text">Material Recebido</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="nav-text">Material Vendido</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span className="nav-text">Material Dispensado</span>
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
