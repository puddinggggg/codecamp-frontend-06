import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../commons/types/generated/types";

export interface ISearchBarProps {
    refetch: (
        variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    refetchBoardsCount: (
        variables: Partial<IQueryFetchBoardsCountArgs>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
    onChangeKeyword: (value: String) => void;
}
export interface ISearchBarUIProps {
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void

}