import BoardFetchUi from './Routed.presenter';
import { useQuery} from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from './Routed.queries';

export default function BoardFetch() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.numbers) },
  });

  console.log(data);
return (
    <BoardFetchUi
    data = { data }
    />
)}