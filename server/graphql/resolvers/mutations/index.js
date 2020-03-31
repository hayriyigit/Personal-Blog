const user = require('./user.mutation');
const blog = require('./blog.mutation');

const Mutation = {
    ...user,
    ...blog,
};

module.exports = Mutation;