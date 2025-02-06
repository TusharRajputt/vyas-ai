//Model1.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const record = mongoose.model('User', userSchema);

export default record;
