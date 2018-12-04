import {AxiosInstance as axios} from "axios";

const url = "http://localhost:5000/api/";

export function loadOrders() {
  return (dispatch) => {
    axios.get(`${url}orders`)
      .then((res) => {
        let articles = res.data;
        dispatch({type: 'LOAD_ORDERS', articles});
      }).catch((err) => {
        console.log(err);
    })
  }
}

export function getUser(_id) {
  return axios.get(`${url}user/${_id}`).then((res) => {
    return res.data;
  }).catch(err => console.log(err))
}