import { ChangeEvent } from 'react'

// 컨테이너

// 프리젠터
export interface ILoginUIProps {

    isActive: boolean


    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void

    onClickLogin: () => void

}








// 스타일
export interface ILoginBtnProps {
    isActive: boolean
}
