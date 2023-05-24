// Получить массив с полными данными пользователя.
// Условия: алгоритм не сложнее O(N), длина обоих массивов <100000, id может быть любым примитивным типом данных (num, bool, str)

const userArr = [{ id: 1, name: 'Jorn Lande' }, { id: 2, name: 'Pablo Escobar' }, { id: 3, name: 'John R.R. Tolkien' }]
const userJobs = [{ id: 3, job: 'Writer' }, { id: 1, job: 'Singer' }, { id: 2, job: '*****' }]

function getUsersWithJobs(users, jobs) {
  const map = new Map();
  const arr = [...users, ...jobs];

  for (const obj of arr) {
    if (!map.has(obj.id)) {
      map.set(obj.id, obj);
    } else {
      map.set(obj.id, {
        ...map.get(obj.id),
        ...obj,
      });
    }
  }

  return [...map.values()];
} // [{ id: 1, name: '...', job: '...' }]

// Отрефакторить код на ES7+

// function foo(value) {
//   const promise = new Promise((res, rej) => {
//     if(value > 1) {
//       res(':)')
//     }
//     rej(':(')
//   })

//   promise.then((val) => console.log(val)).catch((err) => { throw new Error(err) })
// }
async function foo(value) {
  const promise = new Promise((res, rej) => {
    if(value > 1) {
      res(':)')
    }
    rej(':(')
  });
  try {
    let result = await promise;
    console.log(result);
  } catch(err) {
    throw new Error(err);
  }
}

// Арагорн отделился от братства и спрятался во вложенном массиве с глубиной >9999 и Леголас предложил найти его.
// Гимли резко против любых алгоритмов сложнее O(N)

const arr = [[[[[[{ name: 'Aragorn'}]]], [[[{ name: 'orc'}]][[[{ name: 'orc'}]]]][{ name: 'orc'}]],[[[[[{ name: 'orc'}]]][{ name: 'orc'}]]]],[[[[[{ name: 'orc'}]]][{ name: 'orc'}]]]]

function LegolasWhatDoYourEyesSee() {
  return arr.flat(Infinity).find(i => i.name === 'Aragorn'); 
} // { name: 'Aragorn' }

// Получить сумму зарплат во вложенном объекте. Глубина объекта <1000

const obj = {
  salary: 100,
  obj: {
    salary: 200,
    obj: {
      salary: 300,
      obj: {
        salary: 400
      }
    }
  }
}

function getSalary(obj) {
  let salary = 0;
  calc(obj);
  return salary;

  function calc(obj) {
    for (let item in obj) {
      if (typeof obj[item] === 'object') {
        calc(obj[item]);
      } else {
        salary += obj[item];
      }
    }
  }
}
