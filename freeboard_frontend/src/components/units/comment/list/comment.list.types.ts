import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface ICommentListsUIProps {

    data?: Pick<IQuery, "fetchBoardComments">
    onClickCommentDelete: () => void;
    onClickCommentUpdate: () => void;
    deleteModalOn: boolean;
    updateModalOn: boolean;
    onClickDeleteModalOpen: (event: MouseEvent<HTMLImageElement>) => void;
    onClickUpdateModalOpen: (event: MouseEvent<HTMLImageElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    deleteModalToggle: () => void;
    updateModalToggle: () => void;
    onLoadMore: () => void;
    handleChange: (value: number) => void
}
