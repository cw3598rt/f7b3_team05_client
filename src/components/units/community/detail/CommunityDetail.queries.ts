import { gql } from "@apollo/client";

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($id: String!) {
    fetchBoard(id: $id) {
      id
      title
      content
      mainImg
      createdAt
      boardTags {
        id
        title
      }
      user {
        id
        name
      }
    }
  }
`;
