import Footer from "../components/Footer";
import "../styles/Sign-in.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { getToken } from "../features/callApi";

function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  const serviceData = { email: username, password: password };

  async function handleSubmit(e) {
    e.preventDefault();
    const getTokenResponse = await getToken(serviceData);

    if (getTokenResponse.status === 200) {
      dispatch(
        login({
          username: username,
          password: password,
          rememberMe: rememberMe,
          loggedIn: true,
          token: getTokenResponse.body.token,
        })
      );

      console.log("Connection reussie !");
      navigate("/user");
    } else {
      console.log("Identifiants incorrects");
    }
  }
  async function handleRememberMe() {
    setRememberMe(!rememberMe);
  }

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                defaultValue={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Signin;
