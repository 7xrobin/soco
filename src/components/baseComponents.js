import styled from 'styled-components';
import {Layout, Form} from 'antd';
const {Header, Content } = Layout;

export const HeaderPage = styled(Header)`
    text-align: center;
    padding: 1em;
    font-size: 2em;
    color: #008787;
    background: white;
    margin: 0 1em
`;

export const ContentPage = styled(Content)`
    padding: 1em;
    background: white;
    margin: 1em 2em;
`;

export const FormItem = styled(Form.Item)`
    display: flex;
    & input{
        border: solid 3px #00aeff;
        margin-left: 3%;
        heigth: 40px;
        height: 1.5em;
        font-size: 1em;
        width: 50vh;
    }
`;