import { MouseEvent, ChangeEvent } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface ICommentListsUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onClickCommentDelete: () => void;
  onClickCommentUpdate: () => void;
  
  onLoadMore: () => void;
 
}

export interface IUseditemQuestionListUIProps {
  el: IUseditemQuestion;
}
