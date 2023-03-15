import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import useInput from "../Hooks/useInput";
import { login, putAccessToken, getUserLogged } from "../utils/netword-data";
import { setLoggedUser } from "../Store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }).then((res) => {
      if (res.error == false) {
        putAccessToken(res.data.accessToken);
        navigate("/");
      }
    });
  };

  useEffect(() => {
    getUserLogged().then((res) => {
      if (!res.error) {
        dispatch(setLoggedUser(res.data));
        navigate("/");
      }
    });
  }, []);

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
