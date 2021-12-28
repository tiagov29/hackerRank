function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// get summary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// get years
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// revise / change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};
// instatiate an Object
const book1 = new Book("test1", "SV", "2019");

console.log(book1);
book1.revise("2016");
console.log(book1);
