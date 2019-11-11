import React from 'react';
import {Form, FormItem, Dropdown, SaveButton} from 'styled_components/baseComponents';
import {MaterialList} from 'constants/constants';
import { Input, Menu, Icon } from 'antd';
import FormPage from 'templates/FormPage';

const materialCategories = (
  <Menu>
    {MaterialList.map(item => 
        <Menu.Item>
            {item}
        </Menu.Item>
    )}
  </Menu>
);
export default function MaterialSold() {
    const headName = "Material Vendido";
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
            <SaveButton type="primary">Salvar</SaveButton>
        </Form>
    ;
    return (
        <FormPage headName={headName} Form={form}/>
    );
}