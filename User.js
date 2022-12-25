function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    //member function of User class.
    this.displayUserDetails = function() {
        console.log("Hi, I am " + this.firstName + " and my age is: " + this.age);
    }


    this.calculateAge = function() {
        // how to calculate 
    }
}

export default User;

export function sum() {
    console.log(10);
}

export function sum1() {
    console.log(10);
}

export function sum2() {
    console.log(10);
}

export var name = "This is Name string";
// {
    // sum, sum2, sum3, name
// }
