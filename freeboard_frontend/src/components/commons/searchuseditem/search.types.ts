import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

export interface ISearchBarProps {
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  onChangeKeyword: (value: String) => void;
}
export interface ISearchBarUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
