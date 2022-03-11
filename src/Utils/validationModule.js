import { TITLE_LENGTH, DESCRIPTION_LENGTH } from "../UI/Constants";

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
