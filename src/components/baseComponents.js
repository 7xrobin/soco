import styled from 'styled-components';
import {Form as FormBase } from 'antd';
import {Layout as LayoutBase } from 'antd';

export const HeaderPage = styled(LayoutBase.Header)`
    text-align: center;
    padding: 1em;
    font-size: 2em;
    color: #008787;
    background: white;
    margin: 0 1em
`;

export const ContentPage = styled(LayoutBase.Content)`
    padding: 1em;
    background: white;
    margin: 1em 2em;
`;

export const Form = styled(FormBase)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FormItem = styled(FormBase.Item)`
    margin: 1.5em;
    & input:not([type='checkbox']){
        border: solid 3px #00aeff;
        heigth: 40px;
        height: 1.5em;
        font-size: 1em;
        width: 70%;
        margin-top: 0.5em;
    }
    label{
        font-size: 1em;
    }
`;