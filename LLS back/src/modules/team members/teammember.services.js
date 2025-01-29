const TeamModel = require("./team.model");

class TeamService {
    
    // Create a new team member
    createMember = async (data) => {
        try {
            const member = new TeamModel(data);
            return await member.save();
        } catch (exception) {
            throw exception;
        }
    };
    
    // List all team members with pagination and filtering
    listData = async (currentPage, limit, filter = {}) => {
        try {
            const count = await TeamModel.countDocuments(filter);
            const skip = (currentPage - 1) * limit;
            const data = await TeamModel.find(filter)
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
    
    // Get details of a team member by filter
    getDetailByFilter = async (filter) => {
        try {
            const memberDetail = await TeamModel.findOne(filter).populate("createdby", ["_id", "name", "email"]);
            if (!memberDetail) {
                throw { statusCode: 404, message: "Team member not found" };
            }
            return memberDetail;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Delete a team member by ID
    deleteById = async (id) => {
        try {
            const response = await TeamModel.findByIdAndDelete(id);
            if (!response) {
                throw { statusCode: 404, message: "Team member not found" };
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Update a team member by ID
    updateById = async (id, data) => {
        try {
            const response = await TeamModel.findByIdAndUpdate(id, data, { new: true });
            if (!response) {
                throw { statusCode: 404, message: "Team member not found" };
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    };
    
    // Get details of a team member by ID
    getDetailById = async ({ _id }) => {
        try {
            const memberDetail = await TeamModel.findById(_id).populate("createdby", ["_id", "name", "email"]);
            if (!memberDetail) {
                throw { statusCode: 404, message: "Team member not found" };
            }
            return memberDetail;
        } catch (exception) {
            throw exception;
        }
    };
    
    // List all active team members
    listAllMembers = async () => {
        try {
            return await TeamModel.find({ status: true }, { name: 1 });
        } catch (exception) {
            throw exception;
        }
    };
}

const teamService = new TeamService();
module.exports = teamService;
