import { ChangeEvent } from 'react'

// 컨테이너
// 프리젠터
export interface ISignUpUIProps {

    isActive: boolean
    nameError: string
    passwordError: string
    passwordCheckError: string
    emailError: string


    onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void

    onClickSubmit: () => void



}








// 스타일
export interface ISubmitBtnProps {
    isActive: boolean
}
