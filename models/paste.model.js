import mongoose from "mongoose";

const pasteSchema = new mongoose.Schema(
  {
    pasteId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    expiresAT: {
      type: Date,
      default: null,
    },
    maxViews: {
      type: Number,
      default: null,
      min: 1,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

pasteSchema.index({ expiresAT: 1 }, { expireAfterSeconds: 0 });
const pasteModel = mongoose.model("pastebin", pasteSchema);
export default pasteModel;
