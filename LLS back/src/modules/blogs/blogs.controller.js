const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const blogService = require("./blogs.services");

class BlogController {
  
  // Create a new blog post
  createBlog = async (req, res, next) => {
    try {
      const data = req.body;
      const image = req.file;

      // Upload image if provided
      if (image) {
        const imageUrl = await uploadImage(`./public/uploads/blogs/${image.filename}`);
        data.image = imageUrl;
        deleteFile(`./public/uploads/blogs/${image.filename}`);
      }

      data.createdBy = req.authUser.id;
      const response = await blogService.createBlog(data);

      res.json({
        result: response,
        message: "Blog post created successfully",
        meta: null,
      });
    } catch (exception) {
      console.log(`Error in createBlog ${exception}`);
      next(exception);
    }
  };

  // List all blog posts with pagination and filtering
  listBlogs = async (req, res, next) => {
    try {
      const { page = 1, limit = 5, search } = req.query;
      let filter = {};
      
      if (search) {
        filter.title = { $regex: search, $options: "i" };
      }

      const { blogs, totalPages, total, currentPage } = await blogService.listBlogs(page, limit, filter);

      res.json({
        result: blogs,
        message: "List of blog posts",
        meta: {
          total,
          currentPage,
          totalPages,
          limit
        },
      });
    } catch (exception) {
      next(exception);
    }
  };

  // View a single blog post by ID
  viewBlog = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw { statusCode: 400, message: "Blog ID is required" };
      }
      const blogDetail = await blogService.getDetailById({ _id: id });

      res.status(200).json({
        result: blogDetail,
        message: "Blog post details retrieved successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Edit a blog post by ID
  editBlog = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw { statusCode: 400, message: "Blog ID is required" };
      }

      const data = req.body;
      const image = req.file;

      if (image) {
        const imageUrl = await uploadImage(`./public/uploads/blogs/${image.filename}`);
        data.image = imageUrl;
        deleteFile(`./public/uploads/blogs/${image.filename}`);
      }

      const response = await blogService.updateById(id, data);

      res.json({
        result: response,
        message: "Blog post updated successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Delete a blog post by ID
  deleteBlog = async (req, res, next) => {
    try {
      const {id}  = req.params;
      await blogService.deleteById(id);

      res.json({
        result: null,
        message: "Blog post deleted successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Get featured blog posts for the homepage
  listFeaturedBlogs = async (req, res, next) => {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.limit || 8;

      const { blogs, hasMore } = await blogService.landingPageBlogs(page, limit, { status: "PUBLISHED" });

      res.json({
        result: blogs,
        hasMore
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Count total blog posts
  countBlogs = async (req, res, next) => {
    try {
      const count = await blogService.countBlogs();
      res.json({
        result: count,
        message: "Total blog posts",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

// Create an instance of BlogController
const blogController = new BlogController();

module.exports = blogController;
