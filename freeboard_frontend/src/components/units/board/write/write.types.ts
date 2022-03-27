import { ChangeEvent } from 'react'

// 컨테이너
export interface IWriteBoardProps {
    isEdit: boolean;
    data?: any
}

export interface ISubmitVariables {
    writer: string;
    password: string;
    title: string;
    contents: string;
}


export interface IUpdateBoardInput {
    title?: string;
    contents?: string;


}



// 프리젠터
export interface IBoardWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    onClickUpdate: () => void
    isActive: boolean
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    isEdit: boolean
    data?: any
}








// 스타일
export interface ISubmitBtnProps {
    isActive: boolean
}
