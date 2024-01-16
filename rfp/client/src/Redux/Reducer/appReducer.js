import { UPDATE_ISLOGIN } from "../../constants";

const initialValues = {
  isLogin: false,
};

export const appReducer = (state = initialValues, action) => {
  switch (action.type) {
    case UPDATE_ISLOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
