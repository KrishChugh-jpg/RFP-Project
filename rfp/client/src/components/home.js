import React from "react";
import Navbar from "../components/navbar";

import { useTheme } from "@emotion/react";

import DashBoard from "./dashboard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminNavbar from "./adminNavbar";
const Home = () => {
  const emailFromRedux = useSelector((state) => state?.user?.userObject?.email);

  const [data, setData] = useState(null);

  useEffect(() => {
    const getLogin = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/user/profile/${emailFromRedux}`
      );
      console.log(response.data);
      setData(response.data);
    };
    console.log(emailFromRedux);
    if (emailFromRedux) {
      getLogin();
    }
  }, []);
  console.log(data);

  return (
    <>
      {data && data.user.role === "Vendor" && <Navbar data={data}/>}
      {data && data.user.role === "Admin" && <AdminNavbar data={data}/>}

      <DashBoard />
    </>
  );
};

export default Home;
