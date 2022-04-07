import styled from '@emotion/styled'

export const SubmitBtn = styled.button`
background-color: ${(props)=>props.isActive ? "yellow" : "gray"};`;

export const WriterInput = styled.input`
border-color: green;
`;
