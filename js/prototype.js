function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

const P1 = new Person('John', 'Doe')
const P2 = new Person('Bob', 'Marl')

Person.prototype.middleName = 'Dontcare';

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

console.log(P1.getFullName() + ' ' + P1.middleName)
console.log(P2.getFullName() + ' ' + P2.middleName)