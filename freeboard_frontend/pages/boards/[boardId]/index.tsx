import BoardDetail from "../../../src/components/units/board/detail/detail.container";
import CommentWrite from "../../../src/components/units/comment/write/comment.write.container";
import CommentLists from "../../../src/components/units/comment/list/comment.list.container";
export default function BoardDetailPage() {
  return (
    <div>
      <BoardDetail />;
      <CommentWrite />
      <CommentLists />
    </div>
  );
}
