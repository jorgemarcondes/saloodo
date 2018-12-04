import {Schema, model} from "mongoose";
import Roles from "../enums/Roles";

const schema = new Schema(
  {
    name: String,
    role: {
      type: String,
      enum: Object.keys(Roles)
    },
  }
);

class User {



}

schema.loadClass(User);

export default model('User', schema);