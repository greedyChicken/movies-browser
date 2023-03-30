import { useSelector } from "react-redux";
import { useQueryParameter } from "../common/queryParameters";
import { pageQueryParamName } from "../common/queryParamNames";

export const formatDate = (inputDate, format) => {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  format = format.replace("dd", day.toString().padStart(2, "0"));

  format = format.replace("MM", month.toString().padStart(2, "0"));

  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().slice(2, 4));
  }

  return format;
};

export const getNonDuplicatedItems = (array, numberOfItems) => {
  const quantity = numberOfItems ?? array.length;

  // filtering from duplicates
  let filteredArray = Array.from(new Set(array.map((item) => item.id))).map(
    (id) => {
      return array.find((a) => a.id === id);
    }
  );

  // getting exact number of people
  filteredArray = filteredArray.filter(
    (item) => filteredArray.indexOf(item) < quantity
  );

  return filteredArray;
};

export const usePage = (selectPage) => {
  const statePage = useSelector(selectPage);
  const page = useQueryParameter(pageQueryParamName) ?? statePage;

  return page;
};
