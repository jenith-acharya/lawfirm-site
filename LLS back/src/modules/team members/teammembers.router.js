const router = require("express").Router();

// Route to handle the base URL '/'
router
  .route('/')
  .get((req, res) => {
    // Code to handle GET request
    res.send("Get all team members");
  })
  .post((req, res) => {
    // Code to handle POST request
    res.send("Add a new team member");
  });

// Route to handle '/:members' URL
router
  .route('/:members')
  .get((req, res) => {
    // Code to handle GET request for a specific member
    res.send(`Get details of member: ${req.params.members}`);
  })
  .patch((req, res) => {
    // Code to handle PATCH request for a specific member
    res.send(`Update details of member: ${req.params.members}`);
  })
  .delete((req, res) => {
    // Code to handle DELETE request for a specific member
    res.send(`Delete member: ${req.params.members}`);
  });

module.exports = router;
