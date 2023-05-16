"use strict";
// union types
function logId(id) {
    console.log(id);
}
logId(1);
logId('haha');
// narrowing
function narrow(id) {
    if (typeof id === 'string') {
        console.log('string');
    }
    else {
        console.log('number');
    }
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
logObj({ b: 'heh' });
function fetchWithAuth(url, method) {
    // method has type 'POST' or 'GET' (literal types), therefore we can't pass any other types of data
    return 1;
}
fetchWithAuth('url', 'POST');
fetchWithAuth('url', 'GET');
let post = '3';
fetchWithAuth('url', post); // type assertion: we better don't use such assertion in order to prevent data to be valid which is actually not.
const get = 'GET';
let user$ = {
    name: 'marina',
    age: 22,
    skills: ['1', '2'],
    id: 5,
};
let user1 = {
    name: 'marina',
    age: 22,
    skills: ['1', '2'],
    roleId: 3,
    log(id1) {
        return 'lalal';
    },
};
let cat = { name: 'Chio', breed: 'scottish' }; // we can't reassign aliases, though
// interface works with objects only, whereas alias can describe primitives!! and objects
// ? after property means optional property or type
// ! after property means we are 100% sure that property exists
// type void means that function doesn't return anything
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
    return f * s;
}
console.log(multiply(3, 5));
const f1 = () => { };
const f2 = () => true; // return of data is ignored if function has type void
// type unknown
let input; // we don't know which type of data is expected at all
input = 3;
input = [5, 6];
// let res: string = input; // we cannot reassign type of unknown
let res1 = input; // valid
async function getData() {
    try {
        fetch('');
    }
    catch (error) {
        if (error instanceof Error) {
            // when we check type of error
            console.log(error.message); // it acts as if we define type of error as Error, that's why here error turns into Error type
        }
        // console.log(error.message); // error has type unknow here
    }
}
// type never
function generateError(message) {
    // the function will never return anything
    throw new Error(message);
}
function dumpErr() {
    // if don't write 'never' explicitly, then void type will be assigned
    while (true) { }
}
function recursion() {
    // any
    return recursion();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            break;
        case 'checkout':
            break;
        case 'reject':
            break;
        default:
            const _ = action; // the method of verification that we will never enter this branch
            throw new Error('no such action');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('err'); // исчерпывающая проверка, function has to return 'never' so that it couldn't proceed further and give 'undefined'
}
// type null
const nulll = null; // we can't assign anything else but null
const nulll1 = null; // null is assignable to any
// const nulll2: string = null; // null is not assignable to string
// types coercion
let a = 5, b = a.toString(), c = new String(a).valueOf(), // because String is a wrapper object, whereas string is primitive
d = 'string', e = parseInt(d);
const userPers = {
    // more preferable coercion, than 'as Person' and const userPers = <Person> {} (in react)
    name: 'Kate',
    email: 'kate@mail.com',
    login: 'katia',
};
const admin = {
    ...userPers,
    role: 1,
};
function userToAdmin(user) {
    return {
        role: 1,
        name: user.name
    };
}
// type guard
function logIdi(id) {
    if (isString1(id)) {
        //..
    }
    else {
        //..
    }
}
function isString1(x) {
    return typeof x === 'string';
}
const h = {};
assertUser(a);
a.name = 'Jane';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('not user');
}
