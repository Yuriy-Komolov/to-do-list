import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id, userName } = useSelector(
    (state) => state.persistedReduser.user
  );
  return {
    isAuth: !!email,
    email,
    userName,
    token,
    id,
  };
};
