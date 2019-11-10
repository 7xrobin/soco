import React from 'react';
import {HeaderPage, ContentPage} from 'styled_components/baseComponents';
import {Layout, Input, DatePicker} from 'antd';
const { Content } = Layout;


export default function FormPage (props){
    const {headName, Form} = props;
    return (
        <Content>
            <HeaderPage>
                {headName}
            </HeaderPage>
            <ContentPage>
                {Form}
            </ContentPage>
        </Content>
    );
}