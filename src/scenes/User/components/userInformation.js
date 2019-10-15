import React from 'react';
import { Input, Checkbox } from 'antd';
import {ContentPage,  Form, FormItem} from 'components/baseComponents';
import {MaterialList} from 'Constants';

export default function UserInformation() {
    const materialOptions = MaterialList.map(item => {
        return(
            { label: item, value: item }
        );
    })

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

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
                <FormItem label="Materiais que trabalha">
                     <Checkbox.Group options={materialOptions} onChange={onChange} />
                </FormItem>
            </Form>
        </ContentPage>
    );
}
