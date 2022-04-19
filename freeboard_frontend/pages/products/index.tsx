import { withAuth } from "../../src/components/commons/hocs/withAuth";
import ProductList from "../../src/components/units/product/list/list.container";

function ProductListPage() {
  return <ProductList />;
}

export default withAuth(ProductListPage);
