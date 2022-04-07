import { ChangeEvent } from 'react'
import { IQuery } from "../../../../commons/types/generated/types";
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
    boardAddress?: {
        addressCode?: string;
        address?: string;
        addressDetail?: string;
    };
}
export interface IUpdateBoardInput {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    boardAddress?: {
        addressCode?: string;
        address?: string;
        addressDetail?: string;
    };
}
// 프리젠터
export interface IBoardWriteUIProps {
    isActive: boolean
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
    onClickAddressCode: () => void
    afterAddressSearch: (data: any) => void
    onClickSubmit: () => void
    onClickUpdate: () => void
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
    isVisible: boolean
    address: string
    addressDetail: string
    zipcode: string
}








// 스타일
export interface ISubmitBtnProps {
    isActive: boolean
}
