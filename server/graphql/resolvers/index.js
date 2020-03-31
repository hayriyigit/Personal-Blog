// query resolvers
const Query = require('./queries/Query');
const Blog = require('./queries/Blog');
const User = require('./queries/User');

// mutation resolvers
const Mutation = require('./mutations/index');

module.exports = {
    Query,
    Blog,
    User,
    Mutation
};