import { MouseEvent, useState } from "react";
import PaginationUI from "./pagination.presenter";
import { IPaginationProps } from "./pagination.types";
export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activated = Number((event.target as HTMLElement).id);
    setCurrentPage(activated);
    props.refetch({ page: activated });
    // console.log(current)
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurrentPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
    // console.log(activePage)
  };
  const onClickNextPage = () => {
    if (lastPage - startPage < 10) {
      return;
    }
    setStartPage((prev) => prev + 10);
    setCurrentPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
    // console.log(activePage)
  };

  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}
