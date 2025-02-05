const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath, uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const { practiceCreateDTO, practiceUpdateDTO } = require('./practice.request');
const practiceController = require('./practice.controller');

const router = require('express').Router();

// Public routes
router.get('/list-home', practiceController.listForHome);

// Count of practice areas
router.get('/count', practiceController.countPractices);

// Protected routes
router.route('/')
    .get(loginCheck, hasPermission(['admin']), practiceController.listForTable)
    .post(loginCheck, hasPermission(['admin']), setPath('practices'), uploadFile().single('image'), bodyValidator(practiceCreateDTO), practiceController.createPractice);

router.route('/:practice')
    .get(practiceController.viewPractice)
    .patch(loginCheck, hasPermission(['admin']), setPath('practices'), uploadFile().single('image'), bodyValidator(practiceUpdateDTO), practiceController.editPractice)
    .delete(loginCheck, hasPermission(['admin']), practiceController.deletePractice);

module.exports = router;
