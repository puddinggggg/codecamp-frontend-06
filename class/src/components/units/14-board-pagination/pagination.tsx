import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (e) => {
    props.refetch({ page: Number(e.target.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (props.lastPage - startPage < 10) {
      return;
    }
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전</span>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` `}
              {index + startPage}
            </span>
          )
      )}
      {` `}
      <span onClick={onClickNextPage}>다음</span>
    </div>
  );
}
