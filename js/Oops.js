// Creating Objects
let circle = {
    radius: 10,
    draw: function(){
        console.log("Drawing circle")
    }
}

circle.draw()

// Two methods to create an object - In JS functions are objects
// 1) Factory Methods
function createCircle(radius){
    return {
        radius,
        draw: function (){
            console.log("Drawing circle")
        }
    }
}

let circle1 = createCircle(10)

// 2) Constructor functions
function Circle(radius){
    //this key word is reference to the constructor function and reference to the object executing 
    //the constructor function
    this.radius = radius
    this.draw = function (){
        console.log("Drawing circle")
    }
}
// Creating a instance of the class
let circle2 = new Circle(1);  // Internally Circle.call({}, 1) - First argument refers to "this"
// 1) new key word create a empty object then
// 2) it will set "this" to point to that object, by default "this" points to global objects
// in browser global object is a window object 
// 3) It will return that object

// Prototype
function User(name, email){
    this.name = name
    this.email = email
    this.online = false
}

User.prototype.login = function(){
    this.online = true
    console.log(`Hello ${this.name} logged in.`)
}

User.prototype.logout = function(){
    this.online = false
    console.log(`${this.name} is logged out.`)
}

function Admin(...args){
    User.apply(this, args); // inheritance, only properties not proto methods
    this.role = "Admin"
}

Admin.prototype =Object.create(User.prototype) // Inherit User Proto in to Admin
Admin.prototype.deleteUser = function(){

}


let userOne = new User("Varun", "varun@efgh.com");

// Framework → Astro
// Styles → Tailwind
// Hosting → Cloudflare
// Iconos → Tabler Icons
// Dependencies → pnpm
// Supabase → Authentication
// Testing → Vitest & Playwright
// Turso → Database (SQLite). graphQL
// https://github.com/getify/You-Dont-Know-JS
// frontend security
// Typescript 
// Front end architecture 
// Redux
// Knowledge of UI and animation frameworks, touch user interface, and MVP application design.
