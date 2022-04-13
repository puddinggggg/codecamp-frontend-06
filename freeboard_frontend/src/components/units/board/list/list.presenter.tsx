import * as S from "./list.styles";
import { IMapBoardPageProps } from "./list.types";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/pagination.container";
import SearchBar from "../../../commons/search/search.container";

export default function MapBoardPage(props: IMapBoardPageProps) {
  return (
    <div>
      <S.Wrapper>
        <S.BestWrapper>
          <S.BestTitle>베스트 게시글</S.BestTitle>
          <S.BestLists>
            <S.BestBoard>
              <S.BestImg src="/images/mainimg.jpg" />
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
                  <S.BestLikeImg src="/images/like.png" />
                  <S.BestLikeCount>345</S.BestLikeCount>
                </S.BestBottomRight>
              </S.BestBoardBottomWrapper>
            </S.BestBoard>
            <S.BestBoard>
              <S.BestImg src="/images/mainimg.jpg" />
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
                  <S.BestLikeImg src="/images/like.png" />
                  <S.BestLikeCount>345</S.BestLikeCount>
                </S.BestBottomRight>
              </S.BestBoardBottomWrapper>
            </S.BestBoard>
            <S.BestBoard>
              <S.BestImg src="/images/mainimg.jpg" />
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
                  <S.BestLikeImg src="/images/like.png" />
                  <S.BestLikeCount>345</S.BestLikeCount>
                </S.BestBottomRight>
              </S.BestBoardBottomWrapper>
            </S.BestBoard>
            <S.BestBoard>
              <S.BestImg src="/images/mainimg.jpg" />
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
                  <S.BestLikeImg src="/images/like.png" />
                  <S.BestLikeCount>345</S.BestLikeCount>
                </S.BestBottomRight>
              </S.BestBoardBottomWrapper>
            </S.BestBoard>
          </S.BestLists>
        </S.BestWrapper>
        <S.SearchWrapper>
          <SearchBar
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
          <S.DateSearch>YYYY.MM.DD ~ YYYY.MM.DD</S.DateSearch>
          {/* <S.SearchBtn>검색하기</S.SearchBtn> */}
        </S.SearchWrapper>
        <S.ListWrapper>
          <S.HeaderRow>
            <S.HeaderNumberColumn>ID</S.HeaderNumberColumn>
            <S.HeaderTitleColumn>제목</S.HeaderTitleColumn>
            <S.HeaderWriterColumn>작성자</S.HeaderWriterColumn>
            <S.HeaderDateColumn>작성일</S.HeaderDateColumn>
          </S.HeaderRow>
          {props.data?.fetchBoards.map((el: any) => (
            // el index types 파일에 작성하는 방법 확인 필요
            <S.Row key={el._id}>
              <S.NumberColumn>
                {el._id.substr(el._id.length - 4, el._id.length)}{" "}
              </S.NumberColumn>
              <S.TitleColumn id={el._id} onClick={props.onClickBoardDetail}>
                {/* {el.title} */}
                {el.title
                  .replaceAll(props.keyword, `¿¿¿${props.keyword}¿¿¿`)
                  .split("¿¿¿")
                  .map((el: any) => (
                    <S.Word isMatched={props.keyword === el} key={uuidv4()}>
                      {el}
                    </S.Word>
                  ))}
              </S.TitleColumn>
              <S.WriterColumn>{el.writer}</S.WriterColumn>
              <S.DateColumn>{el.createdAt.substr(0, 10)}</S.DateColumn>
            </S.Row>
          ))}
        </S.ListWrapper>
        <Pagination refetch={props.refetch} count={props.count} />
        <S.Footer>
          <S.Btn onClick={props.onClickBoardNew}>게시물 등록하기</S.Btn>
        </S.Footer>
      </S.Wrapper>
    </div>
  );
}
