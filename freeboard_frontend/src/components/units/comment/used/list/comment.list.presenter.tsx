import * as S from "./comment.list.styles";
import { ICommentListsUIProps } from "./comment.list.types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListsUI(props: ICommentListsUIProps) {
  return (
    <div>
      <S.Wrapper>
        <S.CommentLists>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            loader={<div className="loader" key={0}></div>}
          >
            {props.data?.fetchUseditemQuestions.map((el: any) => (
              <S.CommentList
                key={el._id}
                id={el._id}
                // onClick={commentClickAlert}
              >
                <S.Profile src="/images/profile.png" />
                <S.ColumnFlexWrapper>
                  <S.ColumnFlexWrapper>
                    <S.RowFlexOutWrapper>
                      <S.RowFlexWrapper>
                        <S.commentListWriter>
                          {el.user.name}
                        </S.commentListWriter>
                      </S.RowFlexWrapper>
                      <S.RowFlexWrapper>
                        <S.CommentUpdateBtn
                          // onClick={props.onClickUpdateModalOpen}
                          id={el._id}
                          src="/images/commentUpdate.png"
                        ></S.CommentUpdateBtn>
                        <S.CommentDeleteBtn
                          id={el._id}
                          src="/images/commentDelete.png"
                          onClick={props.onClickCommentDelete}
                        ></S.CommentDeleteBtn>
                      </S.RowFlexWrapper>
                    </S.RowFlexOutWrapper>
                    <S.commentListContents>{el.contents}</S.commentListContents>
                  </S.ColumnFlexWrapper>
                  <S.CommentDate>{el.createdAt.substr(0, 10)}</S.CommentDate>
                </S.ColumnFlexWrapper>
              </S.CommentList>
            )) || <div>　</div>}
          </InfiniteScroll>
        </S.CommentLists>
      </S.Wrapper>
    </div>
  );
}
