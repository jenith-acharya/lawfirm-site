const PracticeModel = require("./practiceareas.model");

class PracticeService {
    
    // Create a new practice area
    createPractice = async (data) => {
        try {
            const practice = new PracticeModel(data);
            return await practice.save();
        } catch (exception) {
            throw exception;
        }
    };
    
   
    
    // Delete a practice area by ID
    deleteById = async (id) => {
        try {
            const response = await PracticeModel.findByIdAndDelete(id);
            if (!response) {
                throw { statusCode: 404, message: "Practice area not found" };
            }
            return response ;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Update a practice area by ID
    updateById = async (id, data) => {
        try {
            const response = await PracticeModel.findByIdAndUpdate(id, data, { new: true });
            if (!response) {
                throw { statusCode: 404, message: "Practice area not found" };
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Get details of a practice area by ID
    getDetailById = async ({ _id }) => {
        try {
            const practiceDetail = await PracticeModel.findById(_id).populate("createdby", ["_id", "name", "email"]);
            if (!practiceDetail) {
                throw { statusCode: 404, message: "Practice area not found" };
            }
            return practiceDetail;
        } catch (exception) {
            throw exception;
        }
    };
    
    // List all active practice areas
    listAllPractices = async () => {
        try {
            return await PracticeModel.find({}, { title: 1 });
        } catch (exception) {
            throw exception;
        }
    };
}

const practiceService = new PracticeService();
module.exports = practiceService;
