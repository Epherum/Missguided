import React from "react";
import "./profile.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Profile() {
  const { isProfileOpen, setIsProfileOpen } = useNavContext();

  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  useEffect(() => {
    console.log(isProfileOpen);
  }, [isProfileOpen]);
  return (
    <div
      style={{
        display: isProfileOpen ? "block" : "none",
      }}
    >
      <h3>Sign up</h3>
      <form action="">
        <label for="html">Email</label>
        <br />
        <input id="html" name="fav_language" value="HTML" />
        <br />
        <label for="html">Password</label>
        <br />
        <input id="html" name="fav_language" value="HTML" />
        <br />
        <p>Already have an account? </p>
        <button>log in</button>
      </form>
    </div>
  );
}

export default Profile;
