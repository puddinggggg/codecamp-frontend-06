import MapUseditemPage from "./list.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_LIST } from "./list.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { getToday } from "../../../../commons/libraries/utils";

export default function UseditemList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEM_LIST);

  function onClickUseditemNew() {
    router.push("/useditem/new");
  }

  const onClickUseditemDetail =
    (item) => (event: MouseEvent<HTMLDivElement>) => {
      const today = JSON.parse(localStorage.getItem("today") || "[]");
      const temp = today.filter(
        (el) => el._id === item._id && el.date === getToday()
      );
      // 같은 글이 아니거나 같은 날짜가 아닐 경우에만 실행
      if (temp.length === 0) {
        const { __typename, ...rest } = item;
        const aaa = { ...rest, date: getToday() };
        today.push(aaa);
        localStorage.setItem("today", JSON.stringify(today));
      }
      if (event.target instanceof Element)
        router.push(`/useditem/${event.target.id}`);
    };
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <MapUseditemPage
      onLoadMore={onLoadMore}
      data={data}
      refetch={refetch}
      onClickUseditemNew={onClickUseditemNew}
      onClickUseditemDetail={onClickUseditemDetail}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
