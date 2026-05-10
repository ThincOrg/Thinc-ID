import * as mongoose from "mongoose";
import validator from "validator";

const IdSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A username is required"],
      trim: true,
      unique: [true, "This username is already in use"],
    },
    email: {
      type: String,
      required: [true, "An email is required"],
      unique: [true, "This email is already in use"],
      validate: [validator.isEmail, "Invalid email"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "A password is required"],
      minLength: [6, "A password should be 6 characters or more"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: { type: String },
    verificationExpiry: { type: Date },
    resetCode: { type: String, default: null },
    resetExpiry: { type: Date, default: null },
    refreshToken: [
      {
        token: { type: String },
        expiry: { type: Date },
      },
    ],
  },
  { timestaps: true },
);

const IdModel = mongoose.model("Id", IdSchema);

export default IdModel;
