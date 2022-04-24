import BoardDetail from "../../../src/components/units/board/detail/detail.container";
import CommentLists from "../../../src/components/units/comment/1/list/comment.list.container";
import CommentWrite from "../../../src/components/units/comment/1/write/comment.write.container";
export default function BoardDetailPage() {
  return (
    <div>
      <BoardDetail />
      <CommentWrite />
      <CommentLists />
    </div>
  );
}
