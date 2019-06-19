 
// Es6 Object orented............




// class Person{

//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullName(){
//         return (this.firstName + " " + this.lastName);
//     }
// }


// const person1 = new Person("Rabbi","islam");


// class Stuedent extends Person{

//     constructor(firstName,lastName,course){
//         super(firstName,lastName,course);
//         this.course = course;
//     }
//     fullName(){
//       return super.fullName() +" " + this.course;
//     }
// }

// const stuedent1 = new Stuedent("nishan","islam","javaScirpt")
// console.log(person1);
// console.log(person1.fullName());
// console.log(stuedent1);

// console.log(stuedent1.fullName())

// function Person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
    
// }


// const person1 = new Person("Rabbi","islam");

// Person.prototype.fullName = function(){
//     return (this.firstName + " " + this.lastName);
// }



// // inharitance pattern 


// function stuedent(firstName ,lastName ,course){

//     Person.call(this,firstName,lastName)
//     this.course = course;
// }

// const stuedent1  = new stuedent("Raju","islam","javaScript");

// stuedent.prototype.fullName = function(){
    
//     return (this.firstName + " " + this.lastName + " " + this.course);
// }



// console.log(stuedent1)
// console.log(stuedent1.fullName())
// console.log(person1.fullName())
// console.log(person1);


