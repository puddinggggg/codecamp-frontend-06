import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";
export default function BoardDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.boardData?.title} />
        <meta property="og:description" content={props.boardData?.contents} />
        <meta property="og:image" content={props.boardData?.images[0]} />
      </Head>
      <div>Welcome to BoardDetailPage.</div>
      <div>BoardID : {router.query.boardid}</div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;
// SSR 하겠다
export const getServerSideProps = async (context) => {
  // data request
  // const {data} = useQuery(FETCH_BOARD) 는 안된다.
  // 서버에서 데이터가 저장되있는 곳이 context이기 때문에 context.query.boardId
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardid }
  );
  return {
    props: {
      boardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
