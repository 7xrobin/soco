import React from 'react';
import {Layout} from 'antd';
import './style.css';

const {Header, Content} = Layout;

// import { Container } from './styles';

export default function User() {
  return (
    <div>
        <Layout>
            <Header>
                <div className="header-page">
                    Informações Gerais
                </div>
            </Header>
            <Content>
                <div className="form-card">
                    
                </div>
            </Content>
        </Layout>
    </div>
  );
}
