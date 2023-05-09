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
    id: 5
};
let user1 = {
    name: 'marina',
    age: 22,
    skills: ['1', '2'],
    roleId: 3,
    log(id1) { return 'lalal'; }
};
let cat = { name: 'Chio', breed: 'scottish' }; // we can't reassign aliases, though
// interface works with objects only, whereas alias can describe primitives!! and objects
// ? after property means optional property or type
// ! after property means we are 100% sure that property exists
