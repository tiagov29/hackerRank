class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSumary() {
    return `${this.title} was written by ${this.author} in ${year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return "Valencia productions";
  }
}

// instantiate Object

const book1 = new Book("Book One", "SV", "2013");
book1.revise("2019");

console.log(book1);
