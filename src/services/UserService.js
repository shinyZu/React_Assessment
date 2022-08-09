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

  registerUser = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("users", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  updateUser = async (id, data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .put("users/" + id, data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  deleteUser = async (id) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .delete("users/" + id)
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
