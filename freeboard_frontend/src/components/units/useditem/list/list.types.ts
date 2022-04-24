import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
// 컨테이너
export interface IMapUseditemPageProps {
  onLoadMore: () => void;

  data?: Pick<IQuery, "fetchUseditems">;
  onClickUseditemNew: () => void;
  onClickUseditemDetail: (event: MouseEvent<HTMLDivElement>) => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;

  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}

// 프레젠터
