const teamService = require("../../services/teammember.services");
const TeamModel = require("./team.model");

class TeamMemberController {
    // Get all team members
    getTeamMembers = async (req, res, next) => {
        try {
            const teamMembers = await teamService.listAllMembers();

            res.status(200).json({
                result: teamMembers,
                message: "All team members retrieved successfully",
                meta: null,
            });
        } catch (error) {
            next(error);
        }
    };

    // Create a new team member
    createTeamMember = async (req, res, next) => {
        try {
            const data = await teamService.transformMemberCreate(req);
            data.createdby = req.authUser?.id; // Assigning creator info
            
            const newMember = await teamService.createMember(data);

            // Send activation email
            await teamService.sendActivationEmail(data);

            res.status(201).json({
                result: newMember,
                message: "Team member created successfully, activation email sent",
                meta: null,
            });
        } catch (error) {
            next(error);
        }
    };

    // Get team member details by ID
    getTeamMemberById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const member = await teamService.getSingleMemberById(id);

            res.status(200).json({
                result: member,
                message: "Team member details retrieved successfully",
                meta: null,
            });
        } catch (error) {
            next(error);
        }
    };

    // Update team member details
    updateTeamMember = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedMember = await teamService.updateById(id, data);

            res.status(200).json({
                result: updatedMember,
                message: "Team member updated successfully",
                meta: null,
            });
        } catch (error) {
            next(error);
        }
    };

    // Delete team member by ID
    deleteTeamMember = async (req, res, next) => {
        try {
            const { id } = req.params;
            await teamService.deleteById(id);

            res.status(200).json({
                result: id,
                message: "Team member deleted successfully",
                meta: null,
            });
        } catch (error) {
            next(error);
        }
    };
}

// Create an instance of the controller
const teamMemberController = new TeamMemberController();

// Export the controller
module.exports = teamMemberController;
