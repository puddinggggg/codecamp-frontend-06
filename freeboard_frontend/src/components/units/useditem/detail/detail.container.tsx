import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import UseditemDetailUI from "./detail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  PICK_USED_ITEM,
} from "./detail.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function UseditemDetail() {
  const router = useRouter();
  const [deletUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(PICK_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(data);

  // 댓글 id router.query._id로 가져옴
  const onClickDelete = () => {
    deletUseditem({
      variables: { useditemId: String(router.query.useditemId) },
    });
    alert("상품 삭제 완료");
    router.push("/useditem");
  };
  const onClickUseditemList = () => {
    router.push("/useditem");
  };
  const onClickUseditemEdit = () => {
    router.push(`/useditem/${router.query.useditemId}/edit`);
  };
  const onClickPick = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.useditemId) },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { boardId: router.query.useditemId },
        },
      ],
    });
  };

  return (
    <UseditemDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickUseditemList={onClickUseditemList}
      onClickUseditemEdit={onClickUseditemEdit}
      onClickPick={onClickPick}
    />
  );
}
