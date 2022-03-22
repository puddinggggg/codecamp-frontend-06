import styled from '@emotion/styled'

export const WriterInput = styled.input``;
export const TitleInput = styled.input``;
export const ContentsInput = styled.input``;


export const SubmitBtn = styled.button`
background-color: ${(props)=>props.isActive ? "yellow" : "gray"};`;