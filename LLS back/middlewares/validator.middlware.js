// payload data body
// query string
// params

const bodyValidator = (schema) => {
    return async (req, res, next) => {
      try {
        const data = req.body;
        console.log(data);
        //single file
        if (req.file) {
          data[req.file.fieldname] = req.file.filename;
          console.log(`Data after req.file field included`, data);
          // dynamic key value pair
        } else if (req.files) {
          //multiple files
          // [{},{},{}]
        }
  
        // all data is stored in req.body
        // now validate the package using joi
        await schema.validateAsync(data, { abortEarly: false });
        next();
      } catch (error) {
        let detail = {};
        error.details.map((err) => {
          console.log(`error at validation middleware`);
          detail[err["path"][0]] = err.message;
        });
  
        // send the error response
        next({
          statusCode: 400,
          detail: detail,
          message: "Validation Error",
        });
      }
    };
  };
  
  module.exports = {
    bodyValidator,
  };
  