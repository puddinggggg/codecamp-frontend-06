import { IQuery } from "../../../../commons/types/generated/types";


// 프레젠터
export interface IBoardWriteUIProps {
    data?: Pick<IQuery, "fetchBoard">;
    onClickBoardList: () => void;
    onClickBoardEdit: () => void;
    onClickDelete: () => void;
    onClickLike: () => void;
    onClickDislike: () => void;


}

