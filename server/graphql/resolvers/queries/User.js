const User = {
  blogs: async (parent, args, { Blog }) => {
    try {
      return await Blog.find({ user_id: parent._id });
    } catch (e) {
      throw new Error(e);
    }
  }
};

module.exports = User;
