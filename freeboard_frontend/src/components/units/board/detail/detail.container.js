import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUI from "./detail.presenter"
import { FETCH_BOARD } from "./detail.queries";

export default function BoardDetail() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardId },
    });
  
    return ( <BoardDetailUI data={data}/>)}