import {BoardNumber, BoardWriter,BoardTitle,BoardContents } from './Routed.styles'
export default function BoardFetchUi(props) {
    
    return (
      <div>
        <BoardNumber>{props.data?.fetchBoard.number}번게시글 입니다.</BoardNumber>
        <BoardWriter>작성자:{props.data?.fetchBoard.writer}</BoardWriter>
        <BoardTitle>제목:{props.data?.fetchBoard.title}</BoardTitle>
        <BoardContents>내용:{props.data?.fetchBoard.contents}</BoardContents>
      </div>
    );
  }