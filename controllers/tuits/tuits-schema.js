import mongoose from 'mongoose';
const schema = mongoose.Schema({
  topic: String,
  postedBy: {
    username: String,
  },
  liked: Boolean,
  disliked: Boolean,
  verified: Boolean,
  handle: String,
  title: String,
  tuit: String,
  attachments: {
    video: String,
    image: String
  },
  time: String,
  logoimage: String,
  avatarimage: String,
  stats: {
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number
  }
}, {collection: 'tuits'});
export default schema;