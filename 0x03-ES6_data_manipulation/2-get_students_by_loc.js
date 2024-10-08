export default function getStudentsByLocation(array, city) {
  let arr = [];
  arr = array.filter((element) => element.location === city);

  return arr;
}
