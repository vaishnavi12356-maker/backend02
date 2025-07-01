import { text } from "express";
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,//cloudnery url
      required: true,
    
    },
    thumbnail: {
     type: String,//cloudnery url
      required: true,
    },
    title: {
    type: String,//cloudnery url
      required: true,
    },
    description: {
     type: String,
      required: true,
    },
    duration: {
      type:Number,
      required: true,
    },
    views:
      {
        type: Number,
      required: 0,
      },
      isPublished: {
        type: Boolean,
        default: true,
      },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
   
  },
  { timestamps: true },
);
//videoSchema.plugin(mongooseAggregatePaginate)//we can create our own plugins
export const Video = mongoose.model("Video", videoSchema);
//bcrypt = to hash password
//token == jwt
//both based on the cryptography
