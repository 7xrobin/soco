import React from 'react';
import {HeaderPage, ContentPage, SaveButton} from 'styled_components/baseComponents';
import {Layout,  Table, Button} from 'antd';
import { visible } from 'ansi-colors';
const { Content } = Layout;

const columns = [
    { 
        title: 'Material',
        dataIndex: 'material',
        key: 'material',
    },
    { 
        title: 'Peso (Em Toneladas)',
        dataIndex: 'peso',
        key: 'peso',
    },
    { 
        title: 'Valor (Por Toneladas)',
        dataIndex: 'valor',
        key: 'valor',
    },
    { 
        title: 'Comprador',
        dataIndex: 'comprador',
        key: 'comprador',
    },
    { 
        title: 'Data',
        dataIndex: 'Data',
        key: 'Data',
    }
]
const data = [
    {
      key: '1',
      material: 'Plastico',
      peso: "1,2",
      valor: 'R$32,00',
      comprador: 'Industria',
      Data: '01/11/19'
    },
    {
        key: '2',
        material: 'Aluminio',
        peso: "1,2",
        valor: 'R$32,00',
        comprador: 'Industria',
        Data: '01/11/19'
      }
]
const sytleButon ={
    padding: '13px',
    margin: '20px',
    fontSize: "1.2em",
    width: '10em',
    height: '3em'
}
export default function ListPage (props){
    const {headName} = props;
    return (
        <Content >
            <HeaderPage>
                {headName}
            </HeaderPage>
            <ContentPage style={{overflowX: 'auto'}}>
                <Button type="primary" style={sytleButon} onClick={props.openModal}>Adicionar Venda</Button>
                <Table columns={columns} dataSource={data} />
            </ContentPage>
        </Content>
    );
}