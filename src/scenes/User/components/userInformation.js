import React from 'react';
import { Form, Input, Checkbox} from 'antd';
import {ContentPage, FormItem} from 'components/baseComponents';

export default function UserInformation() {
    const materialOptions = [
        { label: 'Papel', value: 'Papel' },
        { label: 'Aluminio', value: 'Aluminio' },
        { label: 'Vidro', value: 'Vidro' },
    ];
    
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (
        <ContentPage>
            <Form formLayout='horizontal'>
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
                     <Checkbox.Group options={materialOptions} defaultValue={['Apple']} onChange={onChange} />
                </FormItem>
            </Form>
        </ContentPage>
    );
}
