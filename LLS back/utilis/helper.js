const fs = require('fs');
const path = require('path');



const randomStringGenerator = (len) => {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let random = "";
    for (let i = 0; i < len; i++) 
      {
        random += chars.charAt(Math.floor(Math.random() * len));
    }
    return random;
}




function deleteFile(relativePath) {
    // Construct the absolute path to the file
    const filePath = path.join(process.cwd(), relativePath);
  
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting file:', err.message);
            } else {
              console.log('File deleted successfully.');
            }
          });
    } else {
      console.error(`File does not exist: ${filePath}`);
    }
  }
  
module.exports = {
    randomStringGenerator,
    deleteFile
}