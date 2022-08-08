import axios from "../axios";

class ProductService {
  getAllProducts = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("products")
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  getAllProductCategories = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("products/categories")
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  saveProduct = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("products", data)
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
export default new ProductService();
