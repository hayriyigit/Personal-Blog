const gql = require("graphql-tag");

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users: [User!]!
    blog(id: ID!): Blog!
    blogs: [Blog!]!
  }
  type Blog {
    id: ID!
    title: String!
    body: String!
    category: String!
    createdAt: String!
    user: User!
  }
  type User {
    id: ID!
    username: String!
    createdAt: String!
    token: String
    blogs: [Blog!]!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createBlog(createBlogInput: CreateBlogInput): Blog!
    deletePost(blogID: ID!): String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
  }
  input CreateBlogInput{
    title: String!
    body: String!
    category: String!
    user_id: ID!
  }
`;
