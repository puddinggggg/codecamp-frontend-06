//상세보기페이지
import {useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId : $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductDetailPage() {
    const router = useRouter();
  
    const { data } = useQuery(FETCH_PRODUCT, {
      variables:{productId:router.query.productId},
    });
    console.log(data);

    const onClickMove = ()=>{
        router.push(`/09-01-product/${router.query.productId}/edit`)
    }
    return(
        <div>
      
      <div>판매자:{data ? data.fetchProduct.seller :  <span>loading...</span>}</div>
      <div>판매물품:{data?data.fetchProduct.name:  <span>loading...</span>}</div>
      <div>상세설명:{data?data.fetchProduct.detail:  <span>loading...</span>}</div>
      <div>가격:{data?data.fetchProduct.price:  <span>loading...</span>}</div>
      <button onClick={onClickMove}>수정하기</button>
      
    </div>
    )
}