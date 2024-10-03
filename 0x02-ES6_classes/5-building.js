export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}