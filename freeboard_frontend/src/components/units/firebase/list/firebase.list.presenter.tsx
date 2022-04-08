import * as S from "./firebase.list.styles";
import { IFirebaseListUIProps } from "./firebase.list.types";

export default function MyfirebaseListUI(props: IFirebaseListUIProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>제목</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
      </S.Row>
      {props.dataBoards?.map((el: any, index: number) => (
        <S.Row key={index}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnTitle>{el.contents}</S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.Button onClick={props.onClickMoveToBoardNew}>게시물 등록</S.Button>
    </S.Wrapper>
  );
}
