const mongoose= require('mongoose');

const PracticeSchema = new mongoose.schema(
    {
        image:{
            type: String,
            required: true
        },
        title:{
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
        }
    }
)

const practiceModel= mongoose.model('Practice', PracticeSchema)

module.exports = practiceModel