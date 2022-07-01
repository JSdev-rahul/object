
// This =  keyword basically refers to the object it belongs to
// 1.ALONE this refers to window/global object.
// 2. function  this  refers to window/global object.
// 3.this==window = true.
// 4.arrow function this refers window/global object.
// 5. Strict Mode function this refers to undefinid.
// 6. in method this refers to owner object proprtty.
// 7. call,apply,bind me this current object ko refer karta ghai.


function foo() {
    console.log("Simple function call");
    console.log(this === window);  // true
}

foo();	//prints true on console
console.log(this === window) //Prints true on console.

    /***************************************************** */


    (function () {
        console.log("Anonymous function invocation");
        console.log(this === window);
    })();
// Prints true on console

/***************************************************** */


function foo() {
    'use strict';
    console.log("Simple function call")
    console.log(this === window); // undefined

    foo();	//prints false on console as in “strict mode” value of “this” in global execution context is undefined.


    /***************************************************** */

    // When a function is invoked with the new keyword,
    // then the function is known as a constructor function and returns a new instance.

    // In such cases, the value of this refers to a newly created instance


    function Person(fn, ln) {
        this.first_name = fn;
        this.last_name = ln;

        this.displayName = function () {
            console.log(`Name: ${this.first_name} ${this.last_name}`);
        }
    }

    let person = new Person("John", "Reed");
    person.displayName();  // Prints Name: John Reed
    let person2 = new Person("Paul", "Adams");
    person2.displayName();  // Prints Name: Paul Adams 


    /**************************************************** */


    function foo() {
        'use strict';
        console.log("Simple function call")
        console.log(this === window);
    }

    let user = {
        count: 10,
        foo: foo,
        foo1: function () {
            console.log(this === window);
        }
    }

    user.foo()  // Prints false because now “this” refers to user object instead of global object.
    let fun1 = user.foo1;
    fun1() // Prints true as this method is invoked as a simple function.
    user.foo1()  // Prints false on console as foo1 is invoked as a object’s method

    /************************************************** */


    // Call Method with This object 

    const obj = {
        id: "1",
        name: "peter",
        lang: "JS",
    }
    function data(args) {

        console.log(args + " " + this.name)
    }
    data.call(obj, "hello")



/********************************************** */


// Summary
// So now you can figure out the value of this by following these simple rules:

// By default, this refers to a global object, which is global in the case of NodeJS and a window object in the case of a browser
// When a method is called as a property of an object, then this refers to the parent object
// When a function is called with the new operator, then this refers to the newly created instance
// When a function is called using the call and apply methods, then this refers to the value passed as the first argument of the call or apply method
// As you’ve seen above, the value of this can sometimes be confusing, but the above rules can help you to figure out the value of this.

