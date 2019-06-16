import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  list: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});

export default model('user', userSchema);
