import * as S from "./list.styles";
import { IMapUseditemPageProps } from "./list.types";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../../commons/searchuseditem/search.container";
import InfiniteScroll from "react-infinite-scroller";

export default function MapUseditemPage(props: IMapUseditemPageProps) {
  return (
    <div>
      <S.Wrapper>
        <S.BestWrapper>
          <S.BestTitle>베스트 상품</S.BestTitle>
          <S.BestLists>
            <S.BestItem>
              <S.BestImg src="/images/mainimg.jpg" />
              <S.BestUseditemTitle>삼성전자 갤럭시탭A 10.1</S.BestUseditemTitle>
              <S.BestUseditemBottomWrapper>
                <S.BestBottomLeft>
                  <S.BestRemarks>2019 LTE 32GB</S.BestRemarks>

                  <S.BestUseditemPrice>240,120원</S.BestUseditemPrice>
                </S.BestBottomLeft>

                <S.BestBottomRight>
                  <S.BestLikeImg src="/images/like.png" />
                  <S.BestLikeCount>345</S.BestLikeCount>
                </S.BestBottomRight>
              </S.BestUseditemBottomWrapper>
            </S.BestItem>
          </S.BestLists>
        </S.BestWrapper>
        <S.MidWrapper>
          <S.MenuWrapper>
            <S.MidMenu>판매중상품</S.MidMenu>
            <S.MidMenu>판매된상품</S.MidMenu>
          </S.MenuWrapper>
          <S.Btn onClick={props.onClickUseditemNew}>상품 등록하기</S.Btn>
          <S.SearchWrapper>
            <SearchBar
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            />
            <S.DateSearch>YYYY.MM.DD ~ YYYY.MM.DD</S.DateSearch>
            <S.SearchBtn>검색 </S.SearchBtn>
          </S.SearchWrapper>
        </S.MidWrapper>
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {props.data?.fetchUseditems.map((el: any) => (
              // el index types 파일에 작성하는 방법 확인 필요
              <S.Row key={el._id}>
                {/* <S.NumberColumn>
                  {el._id.substr(el._id.length - 4, el._id.length)}{" "}
                </S.NumberColumn> */}
                <S.TitleColumn
                  id={el._id}
                  onClick={props.onClickUseditemDetail}
                >
                  {/* {el.name} */}
                  {el.name
                    .replaceAll(props.keyword, `¿¿¿${props.keyword}¿¿¿`)
                    .split("¿¿¿")
                    .map((el: any) => (
                      <S.Word
                        onClick={(event) => event.stopPropagation()}
                        isMatched={props.keyword === el}
                        key={uuidv4()}
                      >
                        {el}
                      </S.Word>
                    ))}
                </S.TitleColumn>
                <S.WriterColumn>{el.remarks}</S.WriterColumn>
                <S.WriterColumn>￦ {el.price}</S.WriterColumn>
                {/* <S.WriterColumn>{el.seller.name}</S.WriterColumn> */}
                {/* <S.DateColumn>{el.createdAt.substr(0, 10)}</S.DateColumn> */}
              </S.Row>
            )) || <div>　</div>}
          </InfiniteScroll>
        </S.ListWrapper>

        {/* <S.Footer>
          <S.Btn onClick={props.onClickUseditemNew}>상품 등록하기</S.Btn>
        </S.Footer> */}
      </S.Wrapper>
    </div>
  );
}
