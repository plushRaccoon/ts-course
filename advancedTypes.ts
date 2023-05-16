// union types

function logId(id: string | number) {
  console.log(id);
}

logId(1);
logId('haha');

// narrowing

function narrow(id: string | number) {
  if (typeof id === 'string') {
    console.log('string');
  } else {
    console.log('number');
  }
}

function logObj(obj: { a: number } | { b: string }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

logObj({ b: 'heh' });

// literal types with union
//type aliases

type httpMethod = 'POST' | 'GET'; // alias
type User = {
  name: string;
  age: number;
  skills: string[];
}; // also alias
type input = string; // also alias

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  // method has type 'POST' or 'GET' (literal types), therefore we can't pass any other types of data
  return 1;
}

fetchWithAuth('url', 'POST');
fetchWithAuth('url', 'GET');
let post = '3';
fetchWithAuth('url', post as 'POST'); // type assertion: we better don't use such assertion in order to prevent data to be valid which is actually not.
const get = 'GET';

type Role = {
  name: string; // TODO what is the type 'never'??? if name: number
  id: number;
};
type userWithRole = User & Role; // & - intersection type. Here, we’ve intersected User and Role to produce a new type that has all the members of User and Role.

let user$: userWithRole = {
  name: 'marina',
  age: 22,
  skills: ['1', '2'],
  id: 5,
};

// interfaces
interface useruser {
  name: string;
  age: number;
  skills: string[];
  log: (id1: number) => string;
}

interface userWithRole1 extends useruser {
  // 'extends' allows us to effectively copy members from other named types, and add whatever new members we want.
  roleId: number;
}

let user1: userWithRole1 = {
  name: 'marina',
  age: 22,
  skills: ['1', '2'],
  roleId: 3,
  log(id1) {
    return 'lalal';
  },
};

// interface vs alias

interface Cat {
  name: string;
}
interface Cat {
  breed?: string;
}

let cat: Cat = { name: 'Chio', breed: 'scottish' }; // we can't reassign aliases, though
// interface works with objects only, whereas alias can describe primitives!! and objects

// ? after property means optional property or type
// ! after property means we are 100% sure that property exists

// type void means that function doesn't return anything
function multiply(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
  return f * s;
}
console.log(multiply(3, 5));

type voidFunc = () => void;
const f1: voidFunc = () => {};
const f2: voidFunc = () => true; // return of data is ignored if function has type void

// type unknown

let input: unknown; // we don't know which type of data is expected at all
input = 3;
input = [5, 6];
// let res: string = input; // we cannot reassign type of unknown
let res1: any = input; // valid

async function getData() {
  try {
    fetch('');
  } catch (error) {
    if (error instanceof Error) {
      // when we check type of error
      console.log(error.message); // it acts as if we define type of error as Error, that's why here error turns into Error type
    }
    // console.log(error.message); // error has type unknow here
  }
}

type U1 = unknown | string; // when we make union type with unknown the type of U1 will be always coerced to unknown. Here is the most wide type picked, which is actually 'unknown'

type T1 = unknown & string; // intersection picks the most narrow type, which is string (unknown contains string as well)

// type never

function generateError(message: string): never {
  // the function will never return anything
  throw new Error(message);
}

function dumpErr(): never {
  // if don't write 'never' explicitly, then void type will be assigned
  while (true) {}
}

function recursion(): never {
  // any
  return recursion();
}

// let a: never = 5; // impossible to assign smth to never type

type paymentAction = 'refund' | 'checkout' | 'reject';
function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      break;
    case 'checkout':
      break;
    case 'reject':
      break;
    default:
      const _: never = action; // the method of verification that we will never enter this branch
      throw new Error('no such action');
  }
}

function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  generateError('err'); // исчерпывающая проверка, function has to return 'never' so that it couldn't proceed further and give 'undefined'
}

// type null

const nulll: null = null; // we can't assign anything else but null
const nulll1: any = null; // null is assignable to any
// const nulll2: string = null; // null is not assignable to string

// types coercion

let a = 5,
  b: string = a.toString(),
  c: string = new String(a).valueOf(), // because String is a wrapper object, whereas string is primitive
  d = 'string',
  e: number = parseInt(d);

interface Person {
  name: string;
  email: string;
  login: string;
}

const userPers: Person = {
  // more preferable coercion, than 'as Person' and const userPers = <Person> {} (in react)
  name: 'Kate',
  email: 'kate@mail.com',
  login: 'katia',
};

interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...userPers,
  role: 1,
};
function userToAdmin(user: Person): Admin { // mapping function in order to make one object from another
  return {
    role: 1,
    name: user.name
  }
}


// type guard

function logIdi(id: number | string) {
  if (isString1(id)) {
    //..
  } else {
    //..
  }
}

function isString1(x: number | string): x is string { // type guard
  return typeof x === 'string';
}


// assert

interface Pers {
  name: string;
}

const h = {};
assertUser(a);
a.name = 'Jane';

function assertUser(obj: unknown): asserts obj is Pers {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('not user');
}

