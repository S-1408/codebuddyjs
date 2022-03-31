// level {1}

// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]
// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6
// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"
​





// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.

const arr = [1,2,3]
const arr2 = arr.map(x=> x+1)
console.log(arr2);
// Output should be [2, 3, 4]





// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.

const arr3 = [1,2,3]
const arr4 = arr.reduce((c,acc)=>{
    return c+acc
},0)
// Output should be a number: 6




// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.

const user = {
    name: 'Elie',
     rank: 'Pro'
}

const strUser = String(`name:${user['name']} rank:${user['rank']}`)
// Output should be a string: "name: Elie, rank: Pro"
