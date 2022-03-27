import { ChangeEvent } from "react"
// 컨테이너
export interface IBoardDetailProps {
    data: any
}


// 프레젠터
export interface IBoardWriteUIProps {
    commentData: any
    data: any
    onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentContents: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentRating: (event: ChangeEvent<HTMLInputElement>) => void
    onClickBoardList: () => void
    onClickBoardEdit: () => void
    onClickDelete: () => void
    onClickCommentSubmit: () => void

}

