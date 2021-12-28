// Object Of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// create Object

// const book1 = Object.create(bookProtos);
// book1.title = "theBook";
// book1.author = "sv";
// book1.year = "2015";

//alternative way to do it
const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: " Sv" },
  year: { value: "2014" },
});

console.log(book1);
