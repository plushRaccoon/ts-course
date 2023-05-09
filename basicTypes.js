"use strict";
function getFullName(userProfile) {
    return `${userProfile.firstName} ${userProfile.lastName}`;
}
const user = {
    firstName: 'Walter',
    lastName: 'White',
    city: 'Albuquerque',
    age: 50,
};
console.log(getFullName(user));
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
const skills = ['fef', 'lel'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
console.log(skills.filter((s) => s == 'fef').map(s => 1));
// tuple
const skill = [1, 'lel', true];
const o = skill[3];
console.log(o); // undefined
// skill[0] = 3;
// enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["PENDING"] = "p";
    StatusCode["REJECTED"] = "f";
})(StatusCode || (StatusCode = {})); // it is better to use same types of enum, e.g. either 1,2,3 or 's', 'p', 'f'
const result = {
    message: 'Success',
    statusCode: 1 /* StatusCode.SUCCESS */
};
// 1- success, 2 - pending, 3 - rejected
if (result.statusCode === 1 /* StatusCode.SUCCESS */) {
}
function action(status) {
}
action(1 /* StatusCode.SUCCESS */);
const s = 1 /* StatusCode.SUCCESS */;
