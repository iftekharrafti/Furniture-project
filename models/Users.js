import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 90,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 90,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      maxlength: 11,
    },
    password: {
      type: String,
      required: true,
    },
    password2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", usersSchema);
