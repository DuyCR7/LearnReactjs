import { useState } from "react";
import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login");
  }

  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
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
          <button onClick={() => handleLogin()} className="btn btn-primary btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
