function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'input a valid number'
    } else {
        const numbers = number * number * number;
        return numbers
    }
}
const isClubNumber = cubeNumber(3)
// console.log(isClubNumber);


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'input e valid string';
    }
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}


//   console.log(matchFinder("John Doe","ohn")); 
//   console.log(matchFinder("JavaScript","Code")); 
//   console.log(matchFinder("Peter Parker","Pen")); 
//   console.log(matchFinder("Peter Parker","pet")); 


function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input"
    }
    else if (arr[0] === arr[1]) {
        return "equal"
    }
    else {
        return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])]
    }
}

// console.log(sortMaker([2,3]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([4,-2]));


function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'please provide a valid object'
    } else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return `${street}, ${house}, ${society}`;
    }
}
const obj = {
    street: 10,
    house: "15A",
    society: "EarthPerfect"
}
// console.log(findAddress(obj));


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Empty";
    }
    var sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum = sum + element;
    }
    if (sum > totalDue) {
        return true;
    } else {
        return false;
    }
}
const myPrice = [1, 2, 5];
const chipsPrice = 10;
const myPay = canPay(myPrice, chipsPrice)
// console.log(myPay);