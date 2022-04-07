import * as S from "./comment.list.styles";
import { ICommentListsUIProps } from "./comment.list.types";
import { Rate, Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListsUI(props: ICommentListsUIProps) {
  return (
    <div>
      {props.deleteModalOn && (
        <Modal
          title="Comment Delete"
          visible={true}
          onCancel={props.deleteModalToggle}
          onOk={props.onClickCommentDelete}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={props.onChangePassword} />
        </Modal>
      )}
      {props.updateModalOn && (
        <Modal
          title="Comment Update"
          visible={true}
          onCancel={props.updateModalToggle}
          onOk={props.onClickCommentUpdate}
        >
          <div>별점 입력: </div>
          <Rate onChange={props.handleChange} />
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={props.onChangePassword} />
          <div>내용 입력:</div>
          <S.ContentsInput onChange={props.onChangeContents} />
        </Modal>
      )}
      <S.Wrapper>
        <S.CommentLists>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            loader={<div className="loader" key={0}></div>}
          >
            {props.data?.fetchBoardComments.map((el: any) => (
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
                        <S.commentListWriter>{el.writer}</S.commentListWriter>
                        <Rate disabled value={el.rating} />
                      </S.RowFlexWrapper>
                      <S.RowFlexWrapper>
                        <S.CommentUpdateBtn
                          onClick={props.onClickUpdateModalOpen}
                          id={el._id}
                          src="/images/commentUpdate.png"
                        ></S.CommentUpdateBtn>
                        <S.CommentDeleteBtn
                          id={el._id}
                          src="/images/commentDelete.png"
                          onClick={props.onClickDeleteModalOpen}
                        ></S.CommentDeleteBtn>
                      </S.RowFlexWrapper>
                    </S.RowFlexOutWrapper>
                    <S.commentListContents>{el.contents}</S.commentListContents>
                  </S.ColumnFlexWrapper>
                  <S.CommentDate>{el.createdAt.substr(0, 10)}</S.CommentDate>
                </S.ColumnFlexWrapper>
              </S.CommentList>
            ))}
          </InfiniteScroll>
        </S.CommentLists>
      </S.Wrapper>
    </div>
  );
}
