import styled from 'styled-components';
import {Form as FormBase } from 'antd';
import {Layout as LayoutBase } from 'antd';
import {Checkbox as CheckboxBase } from 'antd';

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
    padding: 0 10%;
    @media screen(min-width: 800px){
        padding: 0 20%;
    }
`;

export const FormItem = styled(FormBase.Item)`
    margin: 1.5em;
    & input:not([type='checkbox']){
        border: solid 3px #00aeff;
        heigth: 40px;
        height: 1.5em;
        font-size: 1.2em;
        min-width: 80%;
        margin-top: 0.5em;
    }
    label{
        font-size: 1.2em;
    }
`;

export const CheckboxList = styled(CheckboxBase.Group)`
    display: flex;
    flex-direction: column;
    && label{
        margin: 0.5em;
    }
    input{
        height: 15px;
        width: 20px;
    }
`;