import Footer from "../components/Footer";
import "../styles/User.css";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, updateProfile } from "../features/callApi";
import { saveProfile } from "../features/profileSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userProfile = useSelector((state) => state.profile?.value);
  const userToken = useSelector((state) => state.user?.user?.token);

  async function fetchAndDispatchProfile(userToken) {
    const getProfileResponse = await getProfile(userToken);
    if (getProfileResponse.status === 200) {
      const profile = getProfileResponse.body;
      dispatch(saveProfile(profile));
    }
  }
  useEffect(() => {
    if (userToken) {
      fetchAndDispatchProfile(userToken);
    } else {
      navigate("/login");
    }
  }, [userToken]);

  const [editOn, setEditOn] = useState(false);
  const [editedFirstName, setFirstName] = useState("");
  const [editedLastName, setLastName] = useState("");
  const editedUserNames = {
    firstName: editedFirstName,
    lastName: editedLastName,
  };

  function handleEdit() {
    setFirstName(userProfile.firstName);
    setLastName(userProfile.lastName);
    setEditOn(true);
  }

  function handleEditCancel() {
    setEditOn(false);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();

    const getUpdateResponse = await updateProfile(userToken, editedUserNames);

    if (getUpdateResponse.status === 200) {
      const updatedProfile = {
        email: userProfile.email,
        firstName: editedFirstName,
        lastName: editedLastName,
        createdAt: userProfile.createdAt,
        updatedAt: `${Date.now()}`,
        id: userProfile.id,
      };
      dispatch(saveProfile(updatedProfile));
      setEditOn(false);
    } else {
      console.error("ERR : Couldn't edit name");
    }
  }

  return !userProfile ? (
    <Loader />
  ) : (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          {!editOn && (
            <div>
              <h1>
                Welcome back {`${userProfile.firstName}`} <br />{" "}
                {`${userProfile.lastName}`}
              </h1>

              <button className="edit-button" onClick={handleEdit}>
                Edit Name
              </button>
            </div>
          )}
          {editOn && (
            <div className="profile-edit">
              <div className="profile-inputs">
                <input
                  type="text"
                  className="profile-input"
                  defaultValue={editedFirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>

                <input
                  type="text"
                  className="profile-input"
                  defaultValue={editedLastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>

              <button
                className="profile-save"
                onClick={(e) => handleEditSubmit(e)}
              >
                Save
              </button>

              <button className="profile-cancel" onClick={handleEditCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default User;
