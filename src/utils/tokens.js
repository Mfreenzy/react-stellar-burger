// В проектной работе эта функция будет обращаться к серверу
// и обновлять токены если они уже устарели.
const getUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: {},
      });
    }, 1000);
  });

const login = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
        user: {},
      });
    }, 1000);
  });

const logout = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });  

export const tokens = {
  getUser,
  login,
  logout
};