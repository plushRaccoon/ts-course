"use strict";
class USER {
    name;
    age;
    _login;
    password;
    constructor(nameOrAge) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
    }
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return this._login;
    }
}
const user12 = new USER('Jane');
user12.login = 5;
console.log(user12);
const user123 = new USER();
const user1234 = new USER(33);
class Admin {
    role; // Property 'role' has no initializer and is not definitely assigned in the constructor.To prevent such type of errors we changed the property ""strictPropertyInitialization": false" to false
}
var PayStatus;
(function (PayStatus) {
    PayStatus[PayStatus["Holded"] = 0] = "Holded";
    PayStatus[PayStatus["Processed"] = 1] = "Processed";
    PayStatus[PayStatus["Reversed"] = 2] = "Reversed";
})(PayStatus || (PayStatus = {}));
class Payment {
    id;
    status = PayStatus.Holded;
    createdAt = new Date();
    updatedAt;
    constructor(id) {
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PayStatus.Processed) {
            throw new Error('cannot return payment');
        }
        this.status = PayStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(payment, time);
class Logger1 {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
}
// we better use **override** property for extending methods in order to get the error if something is wrong with parent's method
// class composition
// We don’t mean that inheritance is a bad thing, a developer will still need to use inheritance from time to time. Composition is just an alternative that we should consider, before using inheritance.
class Walkable {
    walk() {
        console.log("Walking...");
    }
}
class Swimmable {
    swim() {
        console.log("Swimming...");
    }
}
class Flyable {
    fly() {
        console.log("Flying...");
    }
}
class Fish {
    swimmable;
    constructor() {
        this.swimmable = new Swimmable();
    }
}
class Bird {
    walkable;
    swimmable;
    flyable;
    constructor() {
        this.walkable = new Walkable();
        this.swimmable = new Swimmable();
        this.flyable = new Flyable();
    }
}
console.log("Nemo the fish's activities:");
var nemo = new Fish();
nemo.swimmable.swim();
console.log("Tweety the bird's activities:");
var tweety = new Bird();
tweety.walkable.walk();
tweety.swimmable.swim();
tweety.flyable.fly();
// property visibility
class Vehicle {
    make;
    damages;
    _model; // access only from the inside of class
    run; // we can access protected properties from inherited classes, but can't from the outside of class
    // #price: number;
    static db;
    set model(m) {
        // this.#price = 100;
        this._model = m;
    }
    get model() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
console.log(new Vehicle());
// abstract classes
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
// new Controller(); // Cannot create an instance of an abstract class.
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const classUser = new UserController();
console.log(classUser.handleWithLogs('request'));
