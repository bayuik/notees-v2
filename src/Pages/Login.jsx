import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import useInput from "../Hooks/useInput";
import { login, putAccessToken } from "../utils/netword-data";

const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }).then((res) => {
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
        <InputField
          type="text"
          name="email"
          onChange={setEmail}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <InputField
          type="password"
          name="password"
          onChange={setPassword}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to={"/register"}>Register here</Link>
      </p>
    </div>
  );
};

export default Login;
