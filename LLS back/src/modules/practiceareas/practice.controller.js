const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const practiceService = require("./practice.service");

class PracticeController {
  
  // Create a new practice area
  createPractice = async (req, res, next) => {
    try {
      const data = req.body;
      const image = req.file;

      // Upload image if provided
      if (image) {
        const imageUrl = await uploadImage(`./public/uploads/practices/${image.filename}`);
        data.image = imageUrl;
        deleteFile(`./public/uploads/practices/${image.filename}`);
      }

      data.createdBy = req.authUser.id;
      const response = await practiceService.createPractice(data);

      res.json({
        result: response,
        message: "Practice area created successfully",
        meta: null,
      });
    } catch (exception) {
      console.log(`Error in createPractice ${exception}`);
      next(exception);
    }
  };

  // List all practice areas with pagination and filtering
  listPractices = async (req, res, next) => {
    try {
      const { page = 1, limit = 5, search } = req.query;
      let filter = {};
      
      if (search) {
        filter.title = { $regex: search, $options: "i" };
      }

      const { practices, totalPages, total, currentPage } = await practiceService.listPractices(page, limit, filter);

      res.json({
        result: practices,
        message: "List of practice areas",
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

  // View a single practice area by ID
  viewPractice = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw { statusCode: 400, message: "Practice area ID is required" };
      }
      const practiceDetail = await practiceService.getDetailByFilter({ _id: id });

      res.status(200).json({
        result: practiceDetail,
        message: "Practice area details retrieved successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Edit a practice area by ID
  editPractice = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw { statusCode: 400, message: "Practice area ID is required" };
      }

      const data = req.body;
      const image = req.file;

      if (image) {
        const imageUrl = await uploadImage(`./public/uploads/practices/${image.filename}`);
        data.image = imageUrl;
        deleteFile(`./public/uploads/practices/${image.filename}`);
      }

      const response = await practiceService.updateById(id, data);

      res.json({
        result: response,
        message: "Practice area updated successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Delete a practice area by ID
  deletePractice = async (req, res, next) => {
    try {
      const { id } = req.params;
      await practiceService.deleteById(id);

      res.json({
        result: null,
        message: "Practice area deleted successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  // Count total practice areas
  countPractices = async (req, res, next) => {
    try {
      const count = await practiceService.countPractices();
      res.json({
        result: count,
        message: "Total practice areas",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

// Create an instance of PracticeController
const practiceController = new PracticeController();

module.exports = practiceController;
