// class Parent {
//     constructor(public name: string, public age: number) { }
//     takeRest() {
//         console.log(this.name, this.age);
//     }
// }

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


// //Polymorphism

// class Person {
//     getSleep(){
//         console.log('This is from Person Class');
//     }
// }

// class Student extends Person{
//     getSleep(){
//         console.log('This is from Student Class');
//     }
// }

// class Teacher extends Person{
//     getSleep(){
//         console.log('This is from Teacher Class');
//     }
// }


// const person1 = new Person()
// const person2 = new Student()
// const person3 = new Teacher()


// const getPersonInfo = (param:Person) =>{
//     return param.getSleep()
// }


// getPersonInfo(person3)


//Abstraction

interface MediaPlayer {
    play():void,
    pause():void,
    stop():void,
}


