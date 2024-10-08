export default function updateStudentGradeByCity(array, city, grade) {
  const arr = array.filter((element) => element.location === city);
  for (const element of arr) {
    element.grade = 'N/A';
  }
  const newarr = arr.map((element) => {
    const newElement = element;
    for (const ele of grade) {
      if (ele.studentId === element.id) {
        newElement.grade = ele.grade;
      }
    }
    return newElement;
  });

  return newarr;
}
