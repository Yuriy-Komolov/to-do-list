import { TITLE_LENGTH, DESCRIPTION_LENGTH } from "../Constants/UI.Constants";
import { authErrorCodes } from "../Constants/validationConstants";

export const postTitleValidation = (title) => {
  let error = "";
  if (title.length >= TITLE_LENGTH) {
    error = `Task name character limit: ${title.length} / 255`;
  }
  return error;
};

export const postDescriptionValidation = (description) => {
  let error = "";
  if (description.length >= DESCRIPTION_LENGTH) {
    error = `Tast description character limit ${description.length} / 500`;
  }
  return error;
};

export const signUpEmailValidation = (error) => {
  switch (error.code) {
    case authErrorCodes.INVALID_EMAIL:
      return "Email is invalid";
    case authErrorCodes.EMAIL_MISSING:
      return "Email is required";
    case authErrorCodes.EMAIL_EXISTS:
      return "Email is already in use";
    case authErrorCodes.USER_DELETED:
      return "Invalid email or password";
    default:
      break;
  }
};

export const signUpPasswordValidation = (error) => {
  switch (error.code) {
    case authErrorCodes.INTERNAL_ERROR:
      return "Password is required";
    case authErrorCodes.WEAK_PASSWORD:
      return "Password should be at least 6 characters";
    case authErrorCodes.INVALID_PASSWORD:
      return "Invalid email or password";
    default:
      break;
  }
};
