//Behind the scenes when executing a new object.
function Person(name) {
    this.name = name;
}

const daniel = new Person();

const obj = {} // Creates an new empty object

// Links to Object.Prototype to access interlinks method like toString, valueOf, which can help create a prototype chain 
Object.setPrototypeOf(obj, Person.prototype);

//Calls the Construction Function
Person.call(obj);

//Returns the object
return obj;

//Behind the scenes when executing a new object with an argument is passed.
function Animal(dog) {
    this.name = dog;
}

const dogName = new Animal("dog");

const obj1 = {} // Creates an new empty object

// Links to Object.Prototype to access interlinks method like toString, valueOf, which can help create a prototype chain 
Object.setPrototypeOf(obj1, Person.prototype);

//Calls the Construction Function
Person.call(obj1, "dog"); // this.name = dog

//Returns the object
return obj1;