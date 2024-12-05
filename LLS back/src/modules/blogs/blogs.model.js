const mongoose = require('mongoose')

const BlogSchema = new mongoose.schema(
    {
        title:{
            type: String,
            required:true
        },
        image:{
            type: String,
            required: true
        },
        slug:{
            type: String,
            required: true
        },
        createdby:{
            
        },
        createddate:{
            type: Date,
            required:true
        },
    }
)

const BlogModel = mongoose.model('Blogs', BlogSchema)

module.exports = BlogModel;