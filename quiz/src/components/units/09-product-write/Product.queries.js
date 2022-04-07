//쿼리
import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_PRODUCT = gql`
mutation updateProduct(
    $productId: ID
    $updateProductInput: UpdateProductInput!
    ){
      updateProduct(seller: $seller, updateProductInput: $updateProductInput){
      _id
      number
      message
    }
    }


`;