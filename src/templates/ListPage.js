import React from 'react';
import {HeaderPage, ContentPage} from 'styled_components/baseComponents';
import {Layout,  Table, Divider} from 'antd';
const { Content } = Layout;

const columns = [
    { 
        title: 'Material',
        dataIndex: 'material',
        key: 'material',
    },
    { 
        title: 'Peso',
        dataIndex: 'peso',
        key: 'peso',
    },
    { 
        title: 'Valor',
        dataIndex: 'valor',
        key: 'valor',
    },
    { 
        title: 'Comprador',
        dataIndex: 'comprador',
        key: 'comprador',
    }
]
const data = [
    {
      key: '1',
      material: 'Plastico',
      peso: "1 ton",
      valor: '32',
      comprador: 'Industria',
    }
]
export default function ListPage (props){
    const {headName} = props;
    return (
        <Content>
            <HeaderPage>
                {headName}
            </HeaderPage>
            <ContentPage>
                <Table columns={columns} dataSource={data} />
            </ContentPage>
        </Content>
    );
}