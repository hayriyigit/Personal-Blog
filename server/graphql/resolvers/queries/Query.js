const Query = {
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(args.id);
    } catch (e) {
      throw new Error(e);
    }
  },
  users: async (parent, args, { User }) => {
    try {
      return await User.find({}).sort({ created_At: -1 });
    } catch (e) {
      throw new Error(e);
    }
  },
  blog: async (parent, args, { Blog }) => {
    try {
      return await Blog.findById(args.id);
    } catch (e) {
      throw new Error(e);
    }
  },
  blogs: async (parent, args, { Blog }) => {
    try {
      return await Blog.find({}).sort({ created_At: -1 });
    } catch (e) {
      throw new Error(e);
    }
  }
};

module.exports = Query;
