class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (first, second) => { return first - second};
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    indices.sort();
    (indices.map(index => this.array[index]) || []).sort(this.comparator).forEach((element,index) => {
      this.array[indices[index]] = element;
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;