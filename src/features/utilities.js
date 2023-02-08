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
  // filtering from duplicates
  let filteredArray = Array.from(new Set(array.map((item) => item.id))).map(
    (id) => {
      return array.find((a) => a.id === id);
    }
  );

  // getting exact number of people
  filteredArray = filteredArray.filter(
    (item) => filteredArray.indexOf(item) < numberOfItems
  );

  return filteredArray;
};
