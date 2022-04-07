import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import MapBoardPage from "./list.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./list.queries";

import { MouseEvent, useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  function onClickBoardNew() {
    router.push("/boards/new");
  }

  function onClickBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${event.target.id}`);
  }

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
    />
  );
}
