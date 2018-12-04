import fixtures from "node-mongoose-fixtures";
import dummy from "mongoose-dummy";
import Order from "./models/Order";
import Roles from "./enums/Roles";
import User from "./models/User";

let orders = [];
let users = [];

export default {
  run() {
    addFiftyOrders();
    addOneManager();
    addTenBikers();

    return fixtures({
      order: orders,
      user: users
    }, function(err, data) {
      console.log('Fixtures Loaded');
    });
  }
}

function addFiftyOrders() {
  Array.from({length: 50}).forEach(() => {
    orders.push(dummy(Order));
  });
}

function addOneManager() {
  users.push(dummy(User, {
    force: {
      role: Roles.MANAGER
    }
  }));
}

function addTenBikers() {
  Array.from({length: 10}).forEach(() => {
    users.push(dummy(User, {
      force: {
        role: Roles.BIKER
      }
    }));
  });
}