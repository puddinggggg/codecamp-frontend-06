import { useQuery, useMutation, gql } from "@apollo/client";
import * as S from "../../styles/boards";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
            
      createdAt
      updatedAt
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { boardId: String(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
        <S.BestWrapper>
            <S.BestTitle>베스트 게시글</S.BestTitle>
            <S.BestLists>
                <S.BestBoard>
                    <S.BestImg src="/images/mainimg.jpg"/>
                    <S.BestBoardTitle>게시글 제목1</S.BestBoardTitle>
                    <S.BestBoardBottomWrapper>
                        <S.BestBottomLeft>
                            <S.BestProfileWrapper>
                            <S.BestProfileImg src="/images/profile.png" />
                            <S.BestWriter>작성자</S.BestWriter>
                            </S.BestProfileWrapper>
                            <S.BestCreated>Date : 2222.02.22</S.BestCreated>
                        </S.BestBottomLeft>

                        <S.BestBottomRight>
                            <S.BestLikeImg src="/images/like.png"/>
                            <S.BestLikeCount>345</S.BestLikeCount> 
                        </S.BestBottomRight>
                    </S.BestBoardBottomWrapper>
                </S.BestBoard>
                <S.BestBoard>
                    <S.BestImg src="/images/mainimg.jpg"/>
                    <S.BestBoardTitle>게시글 제목2</S.BestBoardTitle>
                    <S.BestBoardBottomWrapper>
                        <S.BestBottomLeft>
                            <S.BestProfileWrapper>
                            <S.BestProfileImg src="/images/profile.png" />
                            <S.BestWriter>작성자</S.BestWriter>
                            </S.BestProfileWrapper>
                            <S.BestCreated>Date : 2222.02.22</S.BestCreated>
                        </S.BestBottomLeft>

                        <S.BestBottomRight>
                            <S.BestLikeImg src="/images/like.png"/>
                            <S.BestLikeCount>345</S.BestLikeCount> 
                        </S.BestBottomRight>
                    </S.BestBoardBottomWrapper>
                </S.BestBoard>
                <S.BestBoard>
                    <S.BestImg src="/images/mainimg.jpg"/>
                    <S.BestBoardTitle>게시글 제목3</S.BestBoardTitle>
                    <S.BestBoardBottomWrapper>
                        <S.BestBottomLeft>
                            <S.BestProfileWrapper>
                            <S.BestProfileImg src="/images/profile.png" />
                            <S.BestWriter>작성자</S.BestWriter>
                            </S.BestProfileWrapper>
                            <S.BestCreated>Date : 2222.02.22</S.BestCreated>
                        </S.BestBottomLeft>

                        <S.BestBottomRight>
                            <S.BestLikeImg src="/images/like.png"/>
                            <S.BestLikeCount>345</S.BestLikeCount> 
                        </S.BestBottomRight>
                    </S.BestBoardBottomWrapper>
                </S.BestBoard>
                <S.BestBoard>
                    <S.BestImg src="/images/mainimg.jpg"/>
                    <S.BestBoardTitle>게시글 제목4</S.BestBoardTitle>
                    <S.BestBoardBottomWrapper>
                        <S.BestBottomLeft>
                            <S.BestProfileWrapper>
                            <S.BestProfileImg src="/images/profile.png" />
                            <S.BestWriter>작성자</S.BestWriter>
                            </S.BestProfileWrapper>
                            <S.BestCreated>Date : 2222.02.22</S.BestCreated>
                        </S.BestBottomLeft>

                        <S.BestBottomRight>
                            <S.BestLikeImg src="/images/like.png"/>
                            <S.BestLikeCount>345</S.BestLikeCount> 
                        </S.BestBottomRight>
                    </S.BestBoardBottomWrapper>
                </S.BestBoard>
            </S.BestLists>
        </S.BestWrapper>

      {data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.Column>{10-index} </S.Column>
          <S.Column>{el.title}</S.Column>
          <S.Column>{el.writer}</S.Column>
          <S.Column>{el.createdAt.substr(0,10)}</S.Column>
          <S.Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제
            </button>
          </S.Column>
        </S.Row>
      ))}
    </div>
  );
}
