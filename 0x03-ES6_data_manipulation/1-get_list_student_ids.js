export default function getListStudentIds(array) {
  let arr = [];
  if (!Array.isArray(array)) {
    return arr;
  }
  arr = array.map((element) => element.id);

  return arr;
}
