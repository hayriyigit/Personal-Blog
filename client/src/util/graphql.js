import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  query {
    blogs {
      id
      createdAt
      body
      title
      category
      user {
        id
        username
      }
    }
  }
`;

export const FETCH_SINGLE_POST = gql`
  query($id: ID!) {
    blog(id: $id) {
      id
      title
      body
      createdAt
      user {
        id
        username
      }
    }
  }
`;
