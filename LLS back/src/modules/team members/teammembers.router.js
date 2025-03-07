const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.middleware');
const { setPath, uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const { teamMemberCreateDTO, teamMemberUpdateDTO } = require('./teammembers.request');
const teamMemberController = require('./teammembers.controller');

const router = require('express').Router();

// Public routes
router.get('/list-home', teamMemberController.listForHome);

// Protected routes
router.route('/')
    .get(loginCheck, hasPermission(['admin']), teamMemberController.listForTable)
    .post(loginCheck, hasPermission(['admin']), setPath('teammembers'), uploadFile().single('image'), bodyValidator(teamMemberCreateDTO), teamMemberController.createTeamMember);

router.route('/:member')
    .get(teamMemberController.viewTeamMember)
    .patch(loginCheck, hasPermission(['admin']), setPath('teammembers'), uploadFile().single('image'), bodyValidator(teamMemberUpdateDTO), teamMemberController.editTeamMember)
    .delete(loginCheck, hasPermission(['admin']), teamMemberController.deleteTeamMember);

module.exports = router;
