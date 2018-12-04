import {Schema, model} from "mongoose";
import ShipmentStatus from "../enums/OrderStatus";

const schema = new Schema(
  {
    origin: String,
    destiny: String,
    status: {
      type: String,
      enum: Object.keys(ShipmentStatus)
    },
    assignee: {
      type: Schema.Types.ObjectId,
      ref: 'Biker'
    }
  }
);

class Order {

  assign(biker) {
    this.assignee = biker;
  }

}

schema.loadClass(Order);

export default model('Order', schema);