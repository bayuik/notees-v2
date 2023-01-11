import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import { login, putAccessToken } from "../utils/netword-data";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: `${e.target.value}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data).then((res) => {
      console.log(res);
      if (res.error === false) {
        putAccessToken(res.data.accessToken);
        navigate("/");
      }
    });
  };
  return (
    <div>
      <h2>Login to use app, please.</h2>
      <form onSubmit={handleSubmit} className="input-login">
        <label htmlFor="email">Email</label>
        <InputField type="text" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <InputField type="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to={"/register"}>Register here</Link>
      </p>
    </div>
  );
};

export default Login;
