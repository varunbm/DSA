let myObject = {
    name: "Varun",
    sayMyName: function(){
        // console.log(`my name is ${this.name}`)
        // console.log(this)
    }
}

myObject.sayMyName()

// Prototype and constructor

var MyConstructor = function(){
    this.someMethod = function(){
        console.log(this)
    }
}

MyConstructor.prototype = {
    someOtherMethod: function(){
        console.log(this)
    }
}

var a = new MyConstructor()
a.someMethod()
a.someOtherMethod()

const ne = () => {
    console.log( arguments)
}

ne(1,2,3,4,5,6,7,8,9,10)

// Events
// this - points to the owner
// let's assume .cls is <div class="elem"></div>
var element = document.querySelector('.cls')

var someMeth = function(){
    console.log(this)
}
element.addEventListener('click', someMeth,false)
// Here, "this" would refer to <div class="cls"></div>.

// if we just invoke the function, `this` becomes the window object
someMeth() // window

