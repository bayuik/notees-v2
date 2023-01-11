import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import { register } from "../utils/netword-data";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(data).then((res) => {
      if (res.status === "success") {
        navigate("/login");
      }
    });
  };

  return (
    <>
      <h2>Fill the form to register account.</h2>
      <form onSubmit={handleSubmit} className="input-register">
        <label htmlFor="name">Name</label>
        <InputField type="text" name="name" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <InputField type="text" name="email" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <InputField type="text" name="password" onChange={handleChange} />

        <label htmlFor="confirm">Confirm Password</label>
        <InputField type="text" name="confirm" onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to={"/login"}>Login here</Link>
      </p>
    </>
  );
};

export default Register;
