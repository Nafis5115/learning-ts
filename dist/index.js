//constraint
const testUser1 = {
    name: 'Shan',
    age: 22
};
const testUser2 = {
    name: 'Shan',
    age: 22,
    isMarried: true
};
const constraint = (val) => {
    return { course: 'Next Level', ...val };
};
const test = constraint(testUser1);
const test1 = constraint(testUser2);
const user = {
    name: 'shaan',
    age: 22
};
const product = {
    name: 'pohne',
};
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObj(user, 'name');
const result1 = getPropertyFromObj(product, 'name');
console.log(result1);
export {};
