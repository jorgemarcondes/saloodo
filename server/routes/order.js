import ShipmentCtrl from '../controllers/order.ctrl';

export default (router) => {

    router.route('/orders').get(ShipmentCtrl.orders)

}