const router = require('express').Router();

// Public routes
router.route('/api/blogs')
  .get(); // Fetch all blogs for public display

router.route('/api/blogs/:id')
  .get(); // Fetch a single blog for public display

// Admin panel routes
router.route('/admin/blogs')
  .get() // Fetch all blogs for management
  .post(); // Create a new blog post

router.route('/admin/blogs/:id')
  .get() // Fetch a specific blog for editing
  .patch() // Update a specific blog
  .delete(); // Delete a specific blog

module.exports = router;
