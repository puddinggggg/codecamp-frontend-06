import _ from "lodash";
import { ChangeEvent } from "react";
import { ISearchBarProps } from "./search.types";
import SearchBarUI from "./search.presenter";

export default function SearchBar(props: ISearchBarProps) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <SearchBarUI onChangeSearch={onChangeSearch} />;
}
