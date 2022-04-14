import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BoardList from "../../src/components/units/board/list/list.container";

function BoardListPage() {
  return <BoardList />;
}

export default withAuth(BoardListPage);
