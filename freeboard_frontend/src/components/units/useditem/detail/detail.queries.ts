import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        #   _id
        #   zipcode
        address
        addressDetail
        #   lat
        #   lng
        #   createdAt
        #   updatedAt
      }
      # # buyer
      seller {
        _id
        email
        name
        picture
        # userPoint {
        #   _id
        #   amount
        # }
        # 유저포인트 넣었더니 다른 데이터들도 다 못받아왔는데 이유 확인할것
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const PICK_USED_ITEM = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
