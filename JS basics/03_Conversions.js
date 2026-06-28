let score = 33
console.log(score);

let valueInNum = String (score)
console.log("Type is = ",typeof valueInNum);
console.log("Value is = ",valueInNum);


let string1 = "111"
console.log(string1);
let valueInNum1 = Number (string1)
console.log("Type is = ",typeof valueInNum1);
console.log("Value is = ",valueInNum1);

/* Investigation:
--String to number = converted
--Number to string = converted
--*/

let valueInNum2 = Boolean (score)
console.log(score);
console.log(typeof valueInNum2);
console.log(valueInNum2);


//Number to boolean conversion

let status = false
let changeStatus = Number (status)

console.log(typeof changeStatus);
console.log(changeStatus);

//Boolean to numebr conversion

let status1 = false
console.log(status1);

let changeStatus1 = (status1=true)
let BooltoNum = Number (changeStatus1)

console.log(BooltoNum);
console.log(typeof BooltoNum);

//At first converted false value to true (boolean) and than converted that boolean value to number
