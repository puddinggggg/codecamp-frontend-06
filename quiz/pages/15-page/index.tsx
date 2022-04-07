import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      contents
      _id
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnHead = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 50%;
`;
const MyColumn = styled.div`
  padding: 10px;
  width: 50%;
`;
const Wrapper = styled.div`
  height: 500px;
  overflow: auto;
  width: 500px;
`;

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <Wrapper>
      <HeadWrapper>
        <ColumnHead>제목</ColumnHead>
        <ColumnHead>작성자</ColumnHead>
      </HeadWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {data?.fetchBoards.map((el) => (
          <MyRow key={el._id}>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
          </MyRow>
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
}
