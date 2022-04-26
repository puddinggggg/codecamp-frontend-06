import { gql } from "@apollo/client";
export const CREATE_COMMENT = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      createdAt
      user {
        _id
        name
      }
      contents
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      user {
        _id
        name
      }
      contents
      createdAt
    }
  }
`;

export const FETCH_USED_ITEM_COMMENTS = gql`
query fetchUseditemQuestions(
page: Int,
useditemId: ID!
){
  fetchUseditemQuestions(
    page: $page, useditemId: $useditemId
  ){
    _id
    contents
    createdAt
    user{
      _id
      name
      email
    }
  }
}
`;
