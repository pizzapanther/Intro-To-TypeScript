module Sayings {
  export class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hello, " + this.greeting;
    }
  }
}

var greeter = new Sayings.Greeter("world");

// Else where in your code: import Sayings = require('Sayings');
