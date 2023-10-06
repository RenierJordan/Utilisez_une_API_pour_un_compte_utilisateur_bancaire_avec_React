import { useDispatch } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../features/userSlice";
import { deleteProfile } from "../features/profileSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function NavBar() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    dispatch(deleteProfile());
    console.log("Deconnection");
    navigate("/");
  };

  const userProfile = useSelector((state) => state.profile.value);

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
        {!user ? (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        ) : (
          <div className="main-nav-inline">
            <NavLink className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userProfile?.firstName || ""}
            </NavLink>
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
