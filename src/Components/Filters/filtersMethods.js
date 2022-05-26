import { sortingBy, filteringOrder } from "../../Constants/filterConstants";

export const sortingByMethods = (
  list,
  sortingMethod = "Default",
  order = filteringOrder.ASCENDING
) => {
  switch (sortingMethod) {
    case sortingBy.DEFAULT:
      return list;
    case sortingBy.ALPHABETICALLY:
      return alphsbetSort(list, order);
    case sortingBy.DATE_ADDED:
      return dateAddedSort(list, order);
    default:
      break;
  }
};

const alphsbetSort = (list, order) => {
  if (order === filteringOrder.DESCENDING) {
    return list
      .slice()
      .sort(({ title: a }, { title: b }) => (a === b ? 0 : a > b ? 1 : -1));
  } else {
    return list
      .slice()
      .sort(({ title: a }, { title: b }) => (a === b ? 0 : a < b ? 1 : -1));
  }
};
const dateAddedSort = (list, order) => {
  if (order === filteringOrder.DESCENDING) {
    return list.slice().sort(({ dateAdding: a }, { dateAdding: b }) => a - b);
  } else {
    return list.slice().sort(({ dateAdding: a }, { dateAdding: b }) => b - a);
  }
};
