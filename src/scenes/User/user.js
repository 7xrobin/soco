import React from 'react';
import {Layout, Form, Input} from 'antd';
import UserHeader from './components/userHeader';
import UserInformation from './components/userInformation';

export default function User() {
 const formItemLayout = {
    display: 'flex',
 }
  return (
        <Layout>
            <UserHeader/>
            <UserInformation/>
        </Layout>
  );
}
