function getFullName(userProfile: {
  firstName: string;
  lastName: string;
}): string {
  return `${userProfile.firstName} ${userProfile.lastName}`;
}

const user = {
  firstName: 'Walter',
  lastName: 'White',
  city: 'Albuquerque',
  age: 50,
};

console.log(getFullName(user));

interface Info {
  officeId: number,
  isOpened: boolean,
  contacts: {
    phone: string,
    email: string,
    address: {
      city: string
    }
  }
}
  
  let info: Info = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}

const skills: string[] = ['fef', 'lel'];

for (const skill of skills) {
  console.log(skill.toUpperCase());
}

console.log(skills.filter((s: string) => s == 'fef').map(s => 1));


// tuple
const skill: readonly [number, string, ...boolean[]] = [1, 'lel', true]; 
const o = skill[3]; 
console.log(o); // undefined
// skill[0] = 3;

// enums
const enum StatusCode {
  SUCCESS = 1,
  PENDING = 'p', 
  REJECTED = 'f'
} // it is better to use same types of enum, e.g. either 1,2,3 or 's', 'p', 'f'

const result = {
  message: 'Success',
  statusCode: StatusCode.SUCCESS
}
// 1- success, 2 - pending, 3 - rejected

if (result.statusCode === StatusCode.SUCCESS) {

}
function action(status: StatusCode) {

}
action(StatusCode.SUCCESS);
const s = StatusCode.SUCCESS;
