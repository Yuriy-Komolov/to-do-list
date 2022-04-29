import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id, userName } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    userName,
    token,
    id,
  };
};
