import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import useInput from "../Hooks/useInput";
import { register } from "../utils/netword-data";

const Register = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirm, setConfirm] = useInput("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password }).then((res) => {
      if (res.status === "success") {
        navigate("/login");
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
    <>
      <h2>Fill the form to register account.</h2>
      <form onSubmit={handleSubmit} className="input-register">
        <label htmlFor="name">Name</label>
        <InputField type="text" name="name" onChange={setName} value={name} />

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

        <label htmlFor="confirm">Confirm Password</label>
        <InputField
          type="password"
          name="confirm"
          onChange={setConfirm}
          value={confirm}
        />

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to={"/login"}>Login here</Link>
      </p>
    </>
  );
};

export default Register;
