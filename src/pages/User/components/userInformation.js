import React from 'react';
import { Input } from 'antd';
import {
    ContentPage,  
    Form, 
    FormItem, 
    } 
from 'styled_components/baseComponents';

export default function UserInformation() {


    return (
        <ContentPage>
            <Form>
                <FormItem label="Nome da Cooperativa">
                    <Input placeholder="Nome da Cooperativa" />
                </FormItem>
                <FormItem label="Endereço">
                    <Input placeholder="Endereço da Cooperativa" />
                </FormItem>
                <FormItem label="Número de Cooperados">
                    <Input placeholder="Quantos Cooperados" />
                </FormItem>
            </Form>
        </ContentPage>
    );
}
