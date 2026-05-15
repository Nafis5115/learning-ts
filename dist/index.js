// //constraint
// const testUser1 = {
//     name: 'Shan',
//     age: 22
// }
// const testUser2 = {
//     name: 'Shan',
//     age: 22,
//     isMarried: true
// }
export {};
// const constraint = <T extends { name: string, age: number }>(val: T) => {
//     return { course: 'Next Level', ...val }
// }
// const test = constraint(testUser1)
// const test1 = constraint(testUser2)
// // console.log(test);
// // console.log(test1);
// //keyOf constraint
// type User = {
//     name: string,
//     age: number
// }
// const user = {
//     name: 'shaan',
//     age: 22
// }
// const product = {
//     name: 'pohne',
// }
// const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
//     return obj[key]
// }
// const result = getPropertyFromObj(user, 'name')
// const result1 = getPropertyFromObj(product, 'name')
// console.log(result1);
// //enum
// enum Role {
//     Admin = 'Admin',
//     Editor = 'Editor'
// }
//Use asConst instead of enum
// const UserRole = {
//     Admin: 'ADMIN',
//     Editor: 'EDITOR',
//     Viewer: 'VIEWER'
// } as const
// const getUserRole = (role: (typeof UserRole)[keyof typeof UserRole]) => {
//     if (role === UserRole.Admin || role === UserRole.Editor) {
//         return role
//     } else {
//         return role
//     }
// }
// console.log(getUserRole('EDITOR'));
// //Mapped types
// type AreaOfNum = {
//     height: number,
//     width: number
// }
// type Area<T> = {
//     [key in keyof T]: T[key]
// }
// const area: Area<{
//     height: string,
//     width: string
// }> = {
//     height: '20',
//     width: '20'
// }
