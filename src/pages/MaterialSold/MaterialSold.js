import React, { useState } from 'react';
import {Form, FormItem, Dropdown, SaveButton} from 'styled_components/baseComponents';
import {MaterialList} from 'constants/constants';
import { Input, Menu, Icon, Modal } from 'antd';
import FormPage from 'templates/FormPage';
import ListPage from 'templates/ListPage';

const materialCategories = (
  <Menu>
    {MaterialList.map(item => 
        <Menu.Item>
            {item}
        </Menu.Item>
    )}
  </Menu>
);
const form = 
    <Form>
        <FormItem label="Tipo de Material">
            <Input placeholder="Que material foi vendido?" />
        </FormItem>
        <FormItem label="Categoria de material">
            <Dropdown overlay={materialCategories}>
                <a className="ant-dropdown-link" href="#">
                        Escolha uma Categoria<Icon type="down" />
                </a>
            </Dropdown>
        </FormItem>
        <FormItem label="Peso">
            <Input placeholder="Quantida de Material" />
        </FormItem>
        <FormItem label="Valor">
            <Input placeholder="Valor por tonelada" />
        </FormItem>
        <FormItem label="Comprador">
            <Input placeholder="Quem foi o comprador" />
        </FormItem>
    </Form>
;

export default function MaterialSold() {
    const headName = "Material Vendido";
    const [modalVisible, setModalVisible]  = useState(false);
    
    const showModal = () => {
       setModalVisible(true);
    };
    
    const handleOk = e => {
        setModalVisible(false);
    };
    const handleCancel = e => {
        setModalVisible(false);
    };


    return (
        <div>
          <ListPage headName={headName} openModal={showModal}/>
          <Modal
          title="Adicionar Venda de Material"
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {form};
        </Modal>
        </div>
    );
}