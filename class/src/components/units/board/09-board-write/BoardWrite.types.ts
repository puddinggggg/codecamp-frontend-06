import {ChangeEvent} from "react"


export interface IBoardWriteUIProps {
    onChangeWriter : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents : (event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlApi : ()=> void
    onClickUpdate : ()=> void
    isActive : boolean
    isEdit : boolean
    data? : any
}

export interface ISubmitBtnProps{
    isActive : boolean;
}

export interface IBoardWriteProps {
    isEdit : boolean;
    data? : any;
    isActive : boolean;
  }

export interface IMyVariables {
    number : number;
    writer? : string;
    title? : string;
    content? : string;
  }