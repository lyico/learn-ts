const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`;
};

interface NameInfo {
  firstName: string;
  lastName: string;
}

getFullName({
  firstName: "hh",
  lastName: "cc"
});

interface Vegetable {
  color?: string;
  type: string;
  readonly name: string;
  [prop: string]: any;
}

interface ArrInter {
  0: number;
  1: string;
}

type AddFunc = (num1: number, num2: number) => number;
// const add: AddFunc = (n1, n2) => n1 + n2;

interface Vegetables {
  color: string;
}

interface Tomato {
  color: string;
  name: string;
}

interface Car extends Vegetables {
  name: string;
}

const di: Car = {
  name: "123",
  color: "red"
};

console.log(di);

class testObj {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const c = new testObj("123");

console.log(c.getName());

interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => c.count++;
  c.count = 0;
  return c;
};
