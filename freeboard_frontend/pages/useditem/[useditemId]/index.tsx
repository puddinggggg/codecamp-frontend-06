import UseditemDetail from "../../../src/components/units/useditem/detail/detail.container";
import CommentWrite from "../../../src/components/units/comment/used/write/comment.write.container";
import CommentLists from "../../../src/components/units/comment/used/list/comment.list.container";
export default function ProductDetailPage() {
  return (
    <div>
      <UseditemDetail />
      <CommentWrite />
      <CommentLists />
    </div>
  );
}
