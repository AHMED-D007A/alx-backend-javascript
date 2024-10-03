export default class HolbertonCourse {
  constructor(name, length, students) {
    this._setName(name);
    this._setLength(length);
    this._setStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._setName(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._setLength(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._setStudents(students);
  }

  _setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  _setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  _setStudents(students) {
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of Strings');
    }
    this._students = students;
  }
}
