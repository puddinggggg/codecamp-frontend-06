import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import MapBoardPage from "./list.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./list.queries";
import _ from "lodash";

import { MouseEvent, useState, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const [keyword, setKeyword] = useState("");

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  function onClickBoardNew() {
    router.push("/boards/new");
  }

  function onClickBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${event.target.id}`);
  }

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
    // console.log(current)
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    refetch({ page: startPage - 10 });
    setStartPage((prev) => prev - 10);
    setCurrent(startPage - 10);
    // console.log(activePage)
  };
  const onClickNextPage = () => {
    if (lastPage - startPage < 10) {
      return;
    }
    refetch({ page: startPage + 10 });
    setStartPage((prev) => prev + 10);
    setCurrent(startPage + 10);
    // console.log(activePage)
  };

  return (
    <MapBoardPage
      data={data}
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      current={current}
      startPage={startPage}
      lastPage={lastPage}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
      isMatched={false}
    />
  );
}
