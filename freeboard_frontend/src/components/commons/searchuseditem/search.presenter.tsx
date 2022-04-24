import * as S from "./search.styles";
import { ISearchBarUIProps } from "./search.types";

export default function SearchBarUI(props: ISearchBarUIProps) {
  return (
    <S.TitleSearchWrapper>
      <S.SearchImg src="/images/search.png" />
      <S.SearchInput
        onChange={props.onChangeSearch}
        type="text"
        placeholder="제목을 검색해주세요."
      />
    </S.TitleSearchWrapper>
  );
}
