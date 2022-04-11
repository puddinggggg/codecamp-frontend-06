import { ChangeEvent, MouseEvent } from "react"
// 컨테이너
export interface IMapBoardPageProps {
    keyword: any;
    lastPage: any
    startPage: any
    isMatched: boolean;
    data: any
    onClickBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
    onClickPrevPage: (event: MouseEvent<HTMLSpanElement>) => void
    onClickNextPage: (event: MouseEvent<HTMLSpanElement>) => void
    onClickBoardNew: () => void
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
    current: any


}

// 프레젠터
