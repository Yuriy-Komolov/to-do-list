import { sortingBy } from "../../Constants/filterConstants";

const alphsbetSort = (list) => {
  return list
    .slice()
    .sort(({ title: a }, { title: b }) => (a === b ? 0 : a > b ? 1 : -1));
};

export const sortingByMethods = (list, sortingMethod = "default") => {
  switch (sortingMethod) {
    case sortingBy.DEFAULT:
      return list;
    case sortingBy.ALPHABETICALLY:
      return alphsbetSort(list);
    default:
      break;
  }
};
