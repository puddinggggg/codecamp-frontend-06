import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
// 컨테이너
export interface IMapUseditemPageProps {
    data?: Pick<IQuery, "fetchBoards">;
    // onClickBoardNew: () => void
    // onClickBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
    refetch: (
        variables: Partial<IQueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    
    
    keyword: string;
    onChangeKeyword: (value: string) => void;
}

// 프레젠터
