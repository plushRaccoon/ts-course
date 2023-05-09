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
  name: string,
  age: number,
  skills: string[]
}; // also alias
type input = string; // also alias

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 { // method has type 'POST' or 'GET' (literal types), therefore we can't pass any other types of data
  return 1;
}

fetchWithAuth('url', 'POST');
fetchWithAuth('url', 'GET');
let post = '3';
fetchWithAuth('url', post as 'POST'); // type assertion: we better don't use such assertion in order to prevent data to be valid which is actually not.
const get = 'GET';

type Role = {
  name: string, // TODO what is the type 'never'??? if name: number
  id: number
}
type userWithRole = User & Role;

let user$: userWithRole = {
  name: 'marina',
  age: 22,
  skills: ['1', '2'],
  id: 5
};


// interfaces
interface useruser {
  name: string,
  age: number,
  skills: string[],
  log: (id1: number) => string
}

interface userWithRole1 extends useruser {
  roleId: number
}

let user1: userWithRole1 = {
  name: 'marina',
  age: 22,
  skills: ['1', '2'],
  roleId: 3,
  log(id1) { return'lalal'}
};

// interface vs alias

interface Cat {
  name: string
}
interface Cat {
  breed?: string
}

let cat: Cat = { name: 'Chio', breed: 'scottish' }; // we can't reassign aliases, though
// interface works with objects only, whereas alias can describe primitives!! and objects

// ? after property means optional property or type
// ! after property means we are 100% sure that property exists






