import { MouseEvent } from "react"
// 컨테이너
export interface IMapBoardPageProps {
    lastPage: any
    startPage: any

    data: any
    onClickBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
    onClickPrevPage: (event: MouseEvent<HTMLSpanElement>) => void
    onClickNextPage: (event: MouseEvent<HTMLSpanElement>) => void
    onClickBoardNew: () => void
    current: any


}

// 프레젠터
