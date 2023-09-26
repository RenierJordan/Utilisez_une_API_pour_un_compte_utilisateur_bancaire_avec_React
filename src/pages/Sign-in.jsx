import Footer from "../components/Footer";
import "../styles/Sign-in.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Tony" && password === "Test") {
      dispatch(
        login({
          username: username,
          password: password,
          remember: remember,
          loggedIn: true,
        })
      );
      console.log("Connection reussie !");
    } else {
      console.log("Identifiants incorrects");
    }
  };

  return (
    <>
      <NavBar page={"Signin"} />
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
                onChange={(e) => setRemember(e.target.value === "on")}
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
