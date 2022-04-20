import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_LIST = gql`
  
query fetchUseditems($isSoldOut:Boolean,$page: Int, $search: String) {
  fetchUseditems(isSoldOut:$isSoldOut, page: $page, search: $search) {
    writer
    title
    contents
    _id
    createdAt
  }
}
`;
