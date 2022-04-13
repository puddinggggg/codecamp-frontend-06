import * as S from "./pagination.styles";
import { IPaginationUIProps } from "./pagination.types";
export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <S.PaginationWrapper>
      {props.startPage !== 1 && (
        <S.PageArrow onClick={props.onClickPrevPage}>＜</S.PageArrow>
      )}

      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Pages
              key={index + props.startPage}
              current={index + props.startPage === props.currentPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
            >
              {` `}
              {index + props.startPage}
              {` `}
            </S.Pages>
          )
      )}
      {` `}
      {props.lastPage - props.startPage >= 10 && (
        <S.PageArrow onClick={props.onClickNextPage}>＞</S.PageArrow>
      )}
    </S.PaginationWrapper>
  );
}
