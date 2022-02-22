import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
        maxlength: 60
    },
    img:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
        maxlength: 60
    },
    date:{
        type: String,
    },
    desc:{
        type: String,
        required: true,
    },
    tags:{
        type:[String],
        required: true,
    }
},
{ timestamps: true }
)

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema)