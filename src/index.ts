//constraint
const testUser1 = {
    name: 'Shan',
    age: 22
}
const testUser2 = {
    name: 'Shan',
    age: 22,
    isMarried: true
}


const constraint = <T extends { name: string, age: number }>(val: T) => {
    return { course: 'Next Level', ...val }
}
const test = constraint(testUser1)
const test1 = constraint(testUser2)
// console.log(test);
// console.log(test1);

//keyOf constraint

type User = {
    name: string,
    age: number
}

const user = {
    name: 'shaan',
    age: 22
}
const product = {
    name: 'pohne',

}

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
    return obj[key]
}


const result = getPropertyFromObj(user, 'name')
const result1 = getPropertyFromObj(product, 'name')

console.log(result1);