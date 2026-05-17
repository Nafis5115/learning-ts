// class Parent {
//     constructor(public name: string, public age: number) { }
//     takeRest() {
//         console.log(this.name, this.age);
//     }
// }
export {};
// class Teacher extends Parent {
// }
// class Student extends Parent {
//     constructor(public name: string, public age: number, public roll: number,) { super(name, age) }
//     takeRest() {
//         console.log(this.roll);
//     }
// }
// const student = new Student('shan', 22, 10)
// const teacher = new Teacher('teacher', 40)
// // Type guard - typeOf 
// const add = (num1:number | string, num2:number| string) => {
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//     return num1 + num2
//     }else{
//        return num1.toString() + num2.toString()
//     }
// }
// console.log(add(2, '4'));
// // Type guard - in 
// type NormalUser = {
//     name:string,
// }
// type AdminUser = {
//     name:string,
//     role:'Admin'
// }
// const getUserRole = (user:NormalUser | AdminUser) => {
// if('role' in user){
//     console.log(user.role);
// }
// else{
//     console.log("role not here");
// }
// }
// getUserRole({name:'shan'})
