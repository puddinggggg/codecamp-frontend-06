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

declare const window: typeof globalThis & {
  IMP: any;
};

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
  // const onClickBuyUseditem = () => {
  //   console.log(data?.fetchUseditem.name);
  //   const IMP = window.IMP; // 생략 가능
  //   IMP.init("imp02614431"); // Example: imp00000000
  //   // IMP.request_pay(param, callback) 결제창 호출
  //   IMP.request_pay(
  //     {
  //       // param
  //       pg: "html5_inicis",
  //       pay_method: "card",
  //       //   merchant_uid: "ORD20180131-0000011",
  //       //   상품아이디가 중복되면 에러 발생. 그래서 알고리즘 사용하거나 주석처리해서 자동생성되도록 해야함
  //       name: data?.fetchUseditem.name,
  //       amount: data?.fetchUseditem.price,
  //       buyer_email: router.query.email || "",
  //       buyer_name: data?.fetchUseditem.buyer || "",
  //       buyer_tel: router.query.phonenumber || "",
  //       buyer_addr: router.query.address || "",
  //       buyer_postcode: router.query.zipcode || "",
  //       m_redirect_url: `/useditem/${router.query.useditemId}`,
  //     },
  //     (rsp) => {
  //       // callback
  //       if (rsp.success) {
  //         // 결제 성공 시 로직,
  //         console.log(rsp);

  //         // 백엔드에 결제관련 데이터 넘겨주기(뮤테이션 실행하기)
  //         // 예: createPointTransactionOfLoading
  //       } else {
  //         // 결제 실패 시 로직,
  //         alert("결제 실패!");
  //       }
  //     }
  //   );
  // };
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
      // onClickBuyUseditem={onClickBuyUseditem}
      onClickPick={onClickPick}
    />
  );
}
