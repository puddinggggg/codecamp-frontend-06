import { withAuth } from "../../src/components/commons/hocs/withAuth";
import UseditemList from "../../src/components/units/useditem/list/list.container";

function UseditemListPage() {
  return <UseditemList />;
}

export default withAuth(UseditemListPage);
