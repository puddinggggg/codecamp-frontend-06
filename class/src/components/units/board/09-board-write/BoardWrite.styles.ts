import styled from '@emotion/styled'
import {ISubmitBtnProps} from "./BoardWrite.types"


export const SubmitBtn = styled.button`
background-color: ${(props : ISubmitBtnProps)=>props.isActive ? "yellow" : "gray"};`;

export const WriterInput = styled.input`
border-color: green;
`;
