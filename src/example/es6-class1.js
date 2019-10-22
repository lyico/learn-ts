class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getPostion() {
    return `${this.x}  ${this.y}`;
  }
}

const p1 = new Point(123, 22);

console.log(p1);
console.log(p1.getPostion());


const _func2 = () => {}

class Info {
  constructor(age) {
    this.age = age;
  }

  getData1() {
    return this.age;
  }

  static getData() {
    return 'this age is ' + this.age;
  }

  _getData() {}

  func1() {
    _func2.call(this);
  }

}

const data = new Info(18);

// console.log(data.getData())
console.log(Info.getData())