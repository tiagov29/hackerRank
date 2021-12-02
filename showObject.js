function displayInformation() {
    // var library is defined, use it to print the information
   let library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }
];
   for (let i in library){
       if(library[i].readingStatus == false) {
           console.log(`You still need to read '${library[i].title}' by ${library[i].author}.`)
       } else {
           console.log(`Already read '${library[i].title}' by ${library[i].author}.`)
       }
       // console.log(library[i].readingStatus)
   }
   
} 

displayInformation();