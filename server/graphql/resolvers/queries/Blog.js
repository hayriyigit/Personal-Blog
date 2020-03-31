const Blog = {
    user: async (parent, args, { User }) =>  {
        try{
            return await User.findById(parent.user_id);
        }catch (e) {
            throw new Error(e);
        }
    }
};

module.exports = Blog;