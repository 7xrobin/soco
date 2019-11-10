import React from 'react';
import {Form, FormItem} from 'styled_components/baseComponents';
import { Input } from 'antd';
import FormPage from 'templates/FormPage';


export default function MaterialSold() {
    const headName = "Material Vendido";
    const form = 
        <Form>
            <FormItem label="Tipo de Material">
                <Input placeholder="Que material foi vendido?" />
            </FormItem>
            <FormItem label="Categoria de material">
                <Input placeholder="Escolha" />
            </FormItem>
            <FormItem label="Quantidade de Material">
                <Input placeholder="Quanto material foi recebido?" />
            </FormItem>
            <FormItem label="Valor">
                <Input placeholder="Valor por tonelada" />
            </FormItem>
            <FormItem label="Destinatário">
                <Input placeholder="Quem foi o comprador" />
            </FormItem>
            <FormItem label="Categoria de Comprador">
                <Input placeholder="Escolha" />
            </FormItem>
        </Form>
    ;
    return (
        <FormPage headName={headName} Form={form}/>
    );
}