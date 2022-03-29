import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import MapBoardPage from "./list.presenter";
import { FETCH_BOARDS } from "./list.queries";

import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickBoardNew() {
    router.push("/boards/new");
  }

  function onClickBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <MapBoardPage
      data={data}
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
    />
  );
}
