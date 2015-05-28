class Student {
  fullname : string;
  constructor(firstname, public middleinitial, public lastname) {
    this.fullname = firstname + " " + middleinitial + " " + lastname;
    this.firstname = firstname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
