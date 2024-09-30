export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const iter = reportWithIterator[Symbol.iterator]();
  let result = iter.next();
  str += result.value;
  result = iter.next();
  while (!result.done) {
    str = `${str} | ${result.value}`;
    result = iter.next();
  }

  return str;
}
