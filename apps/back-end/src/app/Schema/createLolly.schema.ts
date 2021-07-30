import * as mongoose from 'mongoose';

export const CreateLollySchema = new mongoose.Schema({
  reciever: String,
  message: String,
  sender: String,
  colorTop: String,
  colorMiddle: String,
  colorBottom: String,
});
