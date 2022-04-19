import ProductDetail from "../../../src/components/units/product/detail/detail.container";
import CommentWrite from "../../../src/components/units/comment/write/comment.write.container";
import CommentLists from "../../../src/components/units/comment/list/comment.list.container";
export default function ProductDetailPage() {
  return (
    <div>
      <ProductDetail />;
      <CommentWrite />
      <CommentLists />
    </div>
  );
}
