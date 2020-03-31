const {AuthenticationError} = require("apollo-server");

const isAuth = require("../../../utils/isAuth");

module.exports = {
    createBlog: async (parent,{createBlogInput: {title, body, category, user_id}}, context) => {
        const user = isAuth(context);

        if(body.trim() === ''){
            throw new Error("Blog body must not be empty")
        }

        return await new context.Blog({
            title,
            body,
            category,
            user_id: user.id
        }).save()
    },
    deletePost: async (parent, { blogID }, context) => {
        const user = isAuth(context);
        try {
            const blog = await context.Blog.findById(blogID);
            if(user.username === blog.username){
                await blog.delete();
                return "Blog deleted successfully";
            }else {
                throw new AuthenticationError("Action not allowed")
            }
        }catch (e) {
            throw new Error(e)
        }
    }
};