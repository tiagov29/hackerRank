function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${year}`;
  };
}
// instatiate an Object
const book1 = new Book("test1", "SV", "2021");

console.log(book1.getSummary());
