import { ChangeEvent } from "react"
export interface ICommentWriteUIProps {
    onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentContents: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCommentSubmit: () => void
    handleChange: (value: number) => void
    value: number
    commentContents: string

}

// export interface ICommentWrite {
//     commentData: any

// }