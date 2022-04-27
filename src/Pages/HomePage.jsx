import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Store/slices/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase/firebase";
import { useAuth } from "../Components/Hooks/useAuth";

import HomeComponent from "../Components/Home&Wellcome/Home.component";
import HeroComponent from "../Components/Home&Wellcome/Hero.component";

export default function HomePage() {
  const dispatch = useDispatch();
  const userInfo = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      }
    });
  }, []);

  return <>{userInfo.isAuth ? <HomeComponent /> : <HeroComponent />}</>;
}
