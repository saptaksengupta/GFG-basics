
import Book from "./Book";
// const Book = require("./Book");
import User, {name, sum2} from "./User";
// const User = require("./User");

// IIFE 
(function(BookInstance, UserInstance) { 
    //Library management code base.
    
    // in this scope.
    var user1 = new UserInstance("Saptak", "Sengupta", "100");

    user1.displayUserDetails();
    var age = user1.calculateAge();

    var historyBook = new Book("Indian History", "XYZ", 100);
    var mathBook = new Book("Basic Math", "ABC", 200);

    historyBook.displayBookDetails();
    mathBook.displayBookDetails();    

    // imported function from User class.
    sum();
    
})(Book, User);



