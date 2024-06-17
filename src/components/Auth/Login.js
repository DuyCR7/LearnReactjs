import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.warning("Email is invalid");
      return;
    }

    if (!password) {
      toast.warning("Password is invalid");
      return;
    }

    // submit apis
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data)); // dispatch action để lưu data
      toast.success(data.EM);
      navigate("/");
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button onClick={() => navigate('/register')}>Sign up</button>
      </div>
      <div className="title col-4 mx-auto">VuDucDuy</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button
            onClick={() => handleLogin()}
            className="btn btn-primary btn-login"
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
