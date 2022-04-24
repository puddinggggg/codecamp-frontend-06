import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_LIST = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      # useditemAddress {
      #   # _id
      #   # zipcode
      #   # address
      #   # addressDetail
      # }

      # seller
      # soldAt
      # createdAt
      # updatedAt
      # createdAt
      # isSoldOut
    }
  }
`;
