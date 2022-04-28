import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6269ed5aa8255b002988d662" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);
  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "6269ed5aa8255b002988d662" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6269ed5aa8255b002988d662" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6269ed5aa8255b002988d662" },
          data: {
            fetchBoard: {
              _id: "6269ed5aa8255b002988d662",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>optimisticUI</h1>
      <div>LikeCount:{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>Like It!</button>
    </div>
  );
}
