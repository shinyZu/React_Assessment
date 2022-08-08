import axios from "../axios";

class UserService {
  getAllUsers = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("users")
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
export default new UserService();
