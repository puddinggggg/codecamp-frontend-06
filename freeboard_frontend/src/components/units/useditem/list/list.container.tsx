import MapUseditemPage from "./list.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_LIST } from "./list.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

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

  function onClickUseditemDetail(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/useditem/${event.target.id}`);
  }
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
