import axios from "../axios";

class CartService {
  getAllCarts = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("carts")
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  saveCart = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("carts", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };
}
export default new CartService();
