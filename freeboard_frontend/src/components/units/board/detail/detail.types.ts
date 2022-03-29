import { ChangeEvent } from "react"
// 컨테이너
export interface IBoardDetailProps {
    data: any
}


// 프레젠터
export interface IBoardWriteUIProps {
    data: any
    onClickBoardList: () => void
    onClickBoardEdit: () => void
    onClickDelete: () => void
    onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentContents: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCommentSubmit: () => void
    handleChange: (value: number) => void
    value: number
    commentData: any

}

