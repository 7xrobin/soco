import React from 'react';
import {Layout, Form, Input} from 'antd';
import './style.css';

const {Header, Content} = Layout;

export default function User() {
 const formItemLayout = {
    display: 'flex',
 }
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
                    <Form formLayout='horizontal'>
                        <Form.Item label="Cooperativa" style={formItemLayout}>
                            <Input placeholder="Nome da Cooperativa"/>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    </div>
  );
}
