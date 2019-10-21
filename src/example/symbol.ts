const s = Symbol();
// console.log(s);

let prop = "name";
const obj = {
  name: "abc",
  [`my${prop}is`]: "ccc",
  [s]: "Symbol key"
};

// console.log(obj)

for (const key in obj) {
  // console.log(key);
}
// console.log(Object.keys(obj));

// console.log(Object.getOwnPropertyNames(obj));

// console.log(Object.getOwnPropertySymbols(obj));

// console.log(Reflect.ownKeys(obj));
