let bool:boolean ;
bool = true;
// bool = 123;

let num: number = 123;
// num  = '123';

let str: string;
str = '123';
str = `test${num}`
// console.log(str);

let arr:number[]
arr = [2,32];
// arr=[1,'22']

let arr2:Array<number>

let arr3:Array<any>
let arr4:(number | string)[]

// 元组类型
let tup: [string, number, boolean];
tup = ['123',1,true];
// console.log(tup);

// m枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}
// console.log(Roles.SUPER_ADMIN);
// console.log(Roles[0]);
// if(roles === Roles.SUPER_ADMIN){

// }

// void 类型
const testFun1 = (text:string):void => console.log(text);
// testFun1('123');
// testFun1(1);

// never 类型
const errFunc = (msg: string): never => {
  throw new Error(msg)
};

//类型断言
const getLength = (target: string|number):number =>{
  if((<string> target).length && (target as string).length  ===0){
    return (<string>target).length
  }else {
    return target.toString().length
  }
}
// getLength('12');
// getLength(12);
// getLength(false);
