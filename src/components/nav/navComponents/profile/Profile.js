import React from "react";
import "./profile.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../contexts/AuthContext";
function Profile() {
  const { isProfileOpen, setIsProfileOpen } = useNavContext();
  // if the user is logged in, we want to display their email address
  // if the user is not logged in, we want to display a login button
  const { currentUser, signup, login, logout } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e) {
    login(email, password);
  }
  function handleSignup(e) {
    e.preventDefault();
    signup(email, password);
  }
  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, [currentUser]);
  return (
    <div
      style={{
        transform: isProfileOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      {currentUser ? (
        <div className="profile">
          <h1>{email}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="profile">
          <div className="login">
            <h1>Login</h1>
            <form
              onSubmit={(e) => {
                handleLogin(e);
              }}
              className="login-form"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="signup">
            <h1>Sign Up</h1>
            <form
              onSubmit={(e) => {
                handleSignup(e);
              }}
              className="signup-form"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
