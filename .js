let Person = function(firstAndLast) {
  // Copy the full name that was passed as a parameter
    let fullName = firstAndLast;
  // Create six methods needed and return what is asked for
    this.getFirstName = function(){
        return fullName.split(' ')[0];
    }
    this.getLastName = function(){
        return fullName.split(' ')[1];
    }
    this.getFullName = function(){
        return fullName;
    }
    this.setFirstName = function(first){
        fullName = first + " " + fullName.split(' ')[1];
    }
    this.setLastName = function(last){
        fullName = fullName.split(' ')[0] + " " + last;
    }
    this.setFullName = function(firstAndLast){
        fullName = firstAndLast;
    }
}
var bob = new Person('Bob Ross');

bob.getFirstName(); // return "Bob"
bob.getLastName(); // return "Ross"
bob.getFullName(); // return "Bob Ross"


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/


