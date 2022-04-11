import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, useState, MouseEvent } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      writer
      title
      contents
      _id
    }
  }
`;
const Row = styled.div`
  border: 1px solid #dbdbdb;
  display: flex;
`;
const Column = styled.div`
  border: 1px solid #dbdbdb;
  width: 50%;
  text-align: center;
`;
const Word = styled.span`
  color: ${(props: IPros) => (props.isMatched ? "red" : "black")};
`;

interface IPros {
  isMatched: boolean;
}

export default function SearchBoard() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(e.target.id) });
  };

  return (
    <div>
      검색어입력:
      <input onChange={onChangeSearch} type="text" />
      <Row>
        <Column>작성자</Column>
        <Column>제목</Column>
      </Row>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(keyword, `¿¿¿${keyword}¿¿¿`)
              .split("¿¿¿")
              .map((el) => (
                <Word isMatched={keyword === el} key={uuidv4()}>
                  {el}
                </Word>
              ))}
          </Column>
        </Row>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
