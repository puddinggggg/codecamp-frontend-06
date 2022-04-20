import MapBoardPage from "./list.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_LIST } from "./list.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  
  IQueryFetchUseditemsArgs,
  
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEM_LIST);
  

 
  function onClickUseditemNew() {
    router.push("/useditem/new");
  }

  function onClickUseditemDetail(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/useditem/${event.target.id}`);
    console.log(event.target.id);
  }
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <MapBoardPage
      data={data}
      onClickUseditemNew={onClickUseditemNew}
      onClickUseditemDetail={onClickUseditemDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
