const BlogModel = require("./blogs.model");

class BlogService {
    
    // Create a new blog post
    createBlog = async (data) => {
        try {
            const blog = new BlogModel(data);
            return await blog.save();
        } catch (exception) {
            throw exception;
        }
    };
    
    // List all blog posts with pagination and filtering
    listData = async (currentPage, limit, filter = {}) => {
        try {
            const count = await BlogModel.countDocuments(filter);
            const skip = (currentPage - 1) * limit;
            const data = await BlogModel.find(filter)
                .populate("createdby", ["_id", "name", "email"])
                .skip(skip)
                .limit(limit)
                .sort({ _id: -1 });
            let totalPages = Math.ceil(count / limit);
            return { data, count, totalPages };
        } catch (exception) {
            throw exception;
        }
    };
    
    // Get details of a blog post by filter
    getDetailByFilter = async (filter) => {
        try {
            const blogDetail = await BlogModel.findOne(filter).populate("createdby", ["_id", "name", "email"]);
            if (!blogDetail) {
                throw { statusCode: 404, message: "Blog post not found" };
            }
            return blogDetail;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Delete a blog post by ID
    deleteById = async (id) => {
        try {
            const response = await BlogModel.findByIdAndDelete(id);
            if (!response) {
                throw { statusCode: 404, message: "Blog post not found" };
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Update a blog post by ID
    updateById = async (id, data) => {
        try {
            const response = await BlogModel.findByIdAndUpdate(id, data, { new: true });
            if (!response) {
                throw { statusCode: 404, message: "Blog post not found" };
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Get details of a blog post by ID
    getDetailById = async ({ _id }) => {
        try {
            const blogDetail = await BlogModel.findById(_id).populate("createdby", ["_id", "name", "email"]);
            if (!blogDetail) {
                throw { statusCode: 404, message: "Blog post not found" };
            }
            return blogDetail;
        } catch (exception) {
            throw exception;
        }
    };
    
    // List all published blogs
    listAllBlogs = async () => {
        try {
            return await BlogModel.find({}, { title: 1 });
        } catch (exception) {
            throw exception;
        }
    };
}

const blogService = new BlogService();
module.exports = blogService;
