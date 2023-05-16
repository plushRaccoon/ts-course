class USER {
  name: string;
  age: number;
  _login: string;
  password: string;

  constructor(); // overload signature
  constructor(name: string);
  constructor(age: number);
  constructor(nameOrAge?: string | number) { // implementation signature
    if (typeof nameOrAge === 'string') {
      this.name = nameOrAge;
    } else if (typeof nameOrAge === 'number') {
      this.age = nameOrAge;
    }
  }

  set login(l: string | number) { // can't be async, but methods can
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


class Admin{
  role: number; // Property 'role' has no initializer and is not definitely assigned in the constructor.To prevent such type of errors we changed the property ""strictPropertyInitialization": false" to false
}

enum PayStatus {
  Holded,
  Processed, 
  Reversed
}

class Payment {
  id: number;
  status: PayStatus  = PayStatus.Holded;
  createdAt: Date  = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
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

// function run(dist: string): void;
// function run(dist: number): void;
// // function run(dist: number | string): void { }
// run('9');


interface ILogger {
  log(...args: any[]): void;
  error(...args: any[]): void;
}

class Logger1 implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    console.log(...args);
  }
}

// we better use **override** property for extending methods in order to get the error if something is wrong with parent's method

// class composition
// We don’t mean that inheritance is a bad thing, a developer will still need to use inheritance from time to time. Composition is just an alternative that we should consider, before using inheritance.

class Walkable {

  walk() {
    console.log("Walking...")
  }
}

class Swimmable {

  swim() {
    console.log("Swimming...")
  }
}

class Flyable {

  fly() {
    console.log("Flying...")
  }
}

class Fish {
  swimmable

  constructor() {
    this.swimmable = new Swimmable()
  }
}

class Bird {
  walkable
  swimmable
  flyable

  constructor() {
    this.walkable = new Walkable()
    this.swimmable = new Swimmable()
    this.flyable = new Flyable()
  }
}

console.log("Nemo the fish's activities:")
var nemo = new Fish()
nemo.swimmable.swim()

console.log("Tweety the bird's activities:")
var tweety = new Bird()
tweety.walkable.walk()
tweety.swimmable.swim()
tweety.flyable.fly()


// property visibility

class Vehicle {
  public make: string;
  private damages: string[];
  private _model: string; // access only from the inside of class
  protected run: number; // we can access protected properties from inherited classes, but can't from the outside of class
  // #price: number;
  static db: any;

  set model(m: string) {
    // this.#price = 100;
    this._model = m;
  }
  get model() {
    return this._model;
  }
  addDamage(damage: string) {
    this.damages.push(damage);
  }
}

console.log(new Vehicle());


// abstract classes

abstract class Controller {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log('start');
    this.handle(req);
    console.log('end');
  }
}

// new Controller(); // Cannot create an instance of an abstract class.

class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

const classUser = new UserController();
console.log(classUser.handleWithLogs('request'));
