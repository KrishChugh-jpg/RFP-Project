import { UPDATE_ISLOGIN } from "../../constants";

export const updateIsLogin = (isLogin) => {
  return {
    type: UPDATE_ISLOGIN,
    payload: isLogin,
  };
};
