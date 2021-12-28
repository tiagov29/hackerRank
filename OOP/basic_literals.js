// const s1 = "hello";
// console.log(typeof s1);

// const s2 = new String("hello");
// console.log(typeof s2);

const book1 = {
  title: "Book One",
  author: "SV",
  year: "2021",
  getSummary: function () {
    return `${this.title} was written by ${this.author}`;
  },
};

console.log(book1.getSummary());
