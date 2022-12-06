import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
import { useRouter } from "next/router";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const router = useRouter();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {});
  };

  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = {email, displayName: name}
        setUser(newUser)
        // Send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    router.push('/')
  };

  const signinUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert('SignIn Successfully')
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
    return unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        router.push('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    signInWithGoogle,
    registerUser,
    signinUser,
    logOut,
  };
};

export default useFirebase;
