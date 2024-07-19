//OBJECTS

//Day 7

// *** Activity 1: Object Creation and Access ***

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book={title : "abc" ,author:"xyz" ,year:2023};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log('title =>',book["title"]);
console.log('author =>',book.author);

//  *** Activity 2: Object Methods ***
//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

function info(){
    return `book title is ${this.title} and  author is ${this.author} `;
}
book.info=info;
console.log(book.info());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property,then log the updated object.

function updatedYear()
{
    return this.year =2024;
}
book.updatedYear=updatedYear;
console.log('Updated Year =>',book.updatedYear())

// *** Activity 3: Nested Objects ***

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: "City Library",
    address: "123 Library St, Booktown",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            yearPublished: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            yearPublished: 1949
        },
        {
            title: "Moby Dick",
            author: "Herman Melville",
            yearPublished: 1851
        }
    ]
};

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);

library.books.forEach((book,number )=>
    {
         console.log(`title of book ${number + 1} is ${book.title}`);
    });

// *** Activity 4: The this Keyword *** 
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

function usingThis()
{
    return (`book title is ${this.title} and ${this.year}`);
}

book.usingThis =usingThis;
console.log(book.usingThis());

// *** Activity 5: Object Iteration ***
// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

for (const i in library.books) {
    let book=library.books[i];
   console.log(` book -> ${book.title} , author -> ${book.author} ,yearPublished -> ${book.yearPublished}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log();
console.log();
library.books.map(book =>
    {       
            console.log(`key -> ${Object.keys(book)}   value -> ${Object.values(book)}`);  
    });
