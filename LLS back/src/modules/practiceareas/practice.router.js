const router = require('express').Router();

// Route to handle the base URL '/'
router
  .route('/')
  .get((req, res) => {
    // Code to fetch all practices
    res.send("Get all practice areas");
  })
  .post((req, res) => {
    // Code to add a new practice area
    res.send("Add a new practice area");
  });

// Route to handle specific practice areas by ID or slug
router
  .route('/:practice')
  .get((req, res) => {
    // Code to fetch details of a specific practice area
    res.send(`Get details of practice area: ${req.params.practice}`);
  })
  .patch((req, res) => {
    // Code to update details of a specific practice area
    res.send(`Update details of practice area: ${req.params.practice}`);
  })
  .delete((req, res) => {
    // Code to delete a specific practice area
    res.send(`Delete practice area: ${req.params.practice}`);
  });

module.exports = router;
