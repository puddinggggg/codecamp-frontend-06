import WriteBoard from "../../../../src/components/units/board/write/write.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;
export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <WriteBoard isEdit={true} data={data} />;
}
