import axios from "axios";
const { REACT_APP_SERVICE } = process.env;

export default {
  addOrder: (order) => {
    axios
      .post(`${REACT_APP_SERVICE}/order`, {
        products: order,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
};
