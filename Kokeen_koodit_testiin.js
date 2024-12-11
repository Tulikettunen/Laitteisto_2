
function suggestMeal(givenTime){
    let result = '';
    if (givenTime >= 400 && givenTime < 1100){
        result = 'breakfast';
    }else if (givenTime >= 1100 && givenTime < 1700){
        result = 'lunch';
    } else{
        result = 'dinner';
    } return result
}

const timeOfDay = 500
const proposedMeal = suggestMeal(timeOfDay)
console.log(proposedMeal)

/*
function productList(numlist){
    let numlist = [];
    let product = 1;
    for (let i = 0; i <= numlist; i++){
        product = product * numlist[i]
    } return product
}

const inputArray = [1, 3, 4, 8]
const resultProduct = productList(inputArray)
console.log(resultProduct) */


//_________
const rolls = 3

let sum = 0;
const numberList = [];
for (let i = 0; i < rolls; i++) {
    let noppa = Math.floor(Math.random() * 6) + 1;
    console.log(`Noppa ${i+1} = ${noppa} `);
    numberList.push(`The result of dice ${i+1} is ${noppa}.`);
    sum += noppa;
}
console.dir(`${numberList} \n and sum is${sum}`)