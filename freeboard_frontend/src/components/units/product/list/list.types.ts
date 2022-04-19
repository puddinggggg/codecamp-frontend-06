import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";
// 컨테이너
export interface IMapBoardPageProps {
    data?: Pick<IQuery, "fetchBoards">;
    onClickBoardNew: () => void
    onClickBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
    refetch: (
        variables: Partial<IQueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    refetchBoardsCount: (
        variables: Partial<IQueryFetchBoardsCountArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
    count?: number;
    keyword: string;
    onChangeKeyword: (value: string) => void;
}

// 프레젠터
