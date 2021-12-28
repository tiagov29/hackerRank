function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// get summary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// instantiate magazine Object
const mag1 = new Magazine("Mag One", "chente Del Toro", "2019", "Feb");

// use magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
