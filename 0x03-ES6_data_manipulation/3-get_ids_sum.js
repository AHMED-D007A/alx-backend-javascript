export default function getStudentIdsSum(array) {
  const sum = array.reduce((acc, currentValue) => acc + currentValue.id, 0);

  return sum;
}
