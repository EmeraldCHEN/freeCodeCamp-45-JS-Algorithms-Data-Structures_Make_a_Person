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
    this.setFirstName = function(name){
        fullName = name + " " + fullName.split(' ')[1];
    }
    this.setLastName = function(name){
        fullName = fullName.split(' ')[0] + " " + name;
    }
    this.setFullName = function(name){
        fullName = name;
    }
}
var bob = new Person('Bob Ross');
bob.getFullName();




// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/


