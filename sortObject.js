function sortLibrary(library) {
    
    // tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library da
    
    console.log(library.sort(function (a, b){
        return a.title.localeCompare(b.title)
    }));
}



sortLibrary();

// there is a good method String.prototype.localeCompare,
//  which is designed for these purposes. 
//  According to MDN, it "returns a number indicating whether
//   a reference string comes before or after or is
//  the same as the given string in sort order".