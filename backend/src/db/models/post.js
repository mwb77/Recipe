import mongoose, { Schema } from 'mongoose'
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    // ingredients: { type: String, required: true },
    // imageUrl: { type: String, required: true },
    //createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    author: String,
    contents: String,
    tags: [String],
  },
  { timestamps: true },
)
export const Post = mongoose.model('post', postSchema)
