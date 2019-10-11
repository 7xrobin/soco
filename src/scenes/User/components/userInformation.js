import React from 'react';
import { Form, Input} from 'antd';
import {ContentPage, FormItem} from 'components/baseComponents';

export default function UserInformation() {
    return (
        <ContentPage>
            <Form formLayout='horizontal'>
                <FormItem label="Cooperativa">
                    <Input placeholder="Nome da Cooperativa" />
                </FormItem>
            </Form>
        </ContentPage>
    );
}
