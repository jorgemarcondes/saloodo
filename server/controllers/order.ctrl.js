import Shipment from "../models/Order";

export default {

    orders: (req, res, next) => {
        Shipment.find(req.params.id)
            .populate('assignee')
            .exec((err, shipment)=> {
            if (err)
                res.send(err);
            else if (!shipment)
                res.send(404);
            else
                res.send(shipment);
            next()
        })
    },

    assignOrder: (req, res, next) => {
        // let { text, title, claps, description } = req.body
    }

}