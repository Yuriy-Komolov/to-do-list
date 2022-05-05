import React from "react";

import { useAuth } from "../Components/Hooks/useAuth";

import HomeComponent from "../Components/Home&Wellcome/Home.component";
import HeroComponent from "../Components/Home&Wellcome/Hero.component";

export default function HomePage() {
  const userInfo = useAuth();

  return <>{userInfo.isAuth ? <HomeComponent /> : <HeroComponent />}</>;
}
