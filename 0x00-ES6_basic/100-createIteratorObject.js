export default function createIteratorObject(report) {
  const returnedValues = [];
  const iter = (Object.values(report.allEmployees)[Symbol.iterator]());
  for (const element of iter) {
    returnedValues.push(...element);
  }

  return returnedValues;
}
