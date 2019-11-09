import React from 'react';
import {HeaderPage, ContentPage,  Form, FormItem} from 'components/baseComponents';
import {Layout, Input, DatePicker} from 'antd';
import moment from 'moment';
const { Content } = Layout;

export default function MaterialReceived() {
  const dateFormat = 'DD/MM/YYYY';

  return (
    <Content>
      <HeaderPage>
        Material Recebido
      </HeaderPage>
      <ContentPage>
            <Form>
                <FormItem label="Quantidade de Material">
                    <Input placeholder="Quanto material foi recebido?" />
                </FormItem>
                <FormItem label="Entregador">
                  <Input placeholder="Quem entregou o material? " />
                </FormItem>
                <FormItem label="Origem do Material">
                  <Input placeholder="Domiciliar, Industrial ou comércio? " />
                </FormItem>
                <FormItem label="Data">
                <Input placeholder="Relativo a um dia, mês ou ano " />
                </FormItem>
            </Form>
        </ContentPage>
    </Content>
  );
}
