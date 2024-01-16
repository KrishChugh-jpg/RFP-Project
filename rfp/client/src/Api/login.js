import axios from "axios";

export const signUp = async (body) => {
  try {
    if (!body) {
      throw Error("No body provided");
    }
    const response = await axios.post(
      "http://localhost:4000/api/user/signup",
      body
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (body) => {
  try {
    if (!body) {
      throw Error("No body provided");
    }
    const response = await axios.post(
      "http://localhost:4000/api/user/login",
      body
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};
export const rfpCreate = async (body) => {
  try {
    if (!body) {
      throw Error("No body provided");
    }
    const response = await axios.post(
      "http://localhost:4000/api/user/rfpCreate",
      body
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const categoryCreate = async (body) => {
  try {
    if (!body) {
      throw Error("No body provided");
    }
    const response = await axios.post(
      "http://localhost:4000/api/user/categoryCreate",
      body
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const categoryRfpCreate = async (body) => {
  try {
    if (!body) {
      throw Error("No body provided");
    }
    const response = await axios.post(
      "http://localhost:4000/api/user/categoryRfpCreate",
      body
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};



