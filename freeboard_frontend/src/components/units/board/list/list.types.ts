import { MouseEvent } from "react"
// 컨테이너
export interface IMapBoardPageProps {

    data: any
    onClickBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
    onClickBoardNew: () => void


}

// 프레젠터
