import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../FireBase/firebase";
import { setUser } from "../../Store/slices/userSlice";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  const googleRegistration = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      dispatch(
        setUser({
          email: userCredential.user.email,
          userName: userCredential.user.displayName,
          id: userCredential.user.uid,
          token: userCredential.user.accessToken,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return googleRegistration;
};
