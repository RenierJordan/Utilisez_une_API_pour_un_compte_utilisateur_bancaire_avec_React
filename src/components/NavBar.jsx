import { useDispatch } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../features/userSlice";

function NavBar(props) {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {props.page === "Signin" ? (
          <div className="main-nav-item" to="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </div>
        ) : (
          <div className="main-nav-inline">
            <div className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              Tony
            </div>
            <div className="main-nav-item" onClick={(e) => handleLogout(e)}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
