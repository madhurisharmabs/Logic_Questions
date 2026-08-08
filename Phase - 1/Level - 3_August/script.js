// Level 3: Math and Number Logic 
// 1. Take a 3-digit number and check if all digits are distinct.
function isDistinctNum(num)
{
    let ones = num % 10;
    let tens = Math.floor(num / 10) % 10;
    let hundreds = Math.floor(num / 100) % 10;
    // let thousands = Math.floor(num / 1000) % 10;

    if(ones != tens && ones != hundreds)
        // && ones != thousands)
    {
        return "All digits are distinct number";
    }
    return "Digits are not distinct number"
}
console.log(isDistinctNum(123))

// The One Pattern You Should Remember
// Almost every digit-based problem follows this template:
// while (num > 0) {
//     let digit = num % 10;

//     // Process the digit

//     num = Math.floor(num / 10);
// }
// This loop:

// 2.Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither
function findMiddleDigitNum()
{
    let num = 423;
    let ones = (num % 10);
    let tens = Math.floor(num / 10) % 10;
    let hundreds = Math.floor(num / 100) % 10;

    if(tens > hundreds && tens > ones)
    {
        return "Middle digit is largest num"
    }
    else if(tens < hundreds && tens < ones)
    {
        return "Middle digit is smallest num"
    }
    return "Neither Middle digit is largest nor smallest";
}
// console.log(findMiddleDigitNum())

// Take a 3-digit number and determine if the first digit is the largest, smallest, or neither.
function isFirstDigitLargestNum()
{
    let num = 421;
    let ones = num % 10;
    let tens = Math.floor(num /10) % 10;
    let hundres = Math.floor(num / 100) % 10;

    if(hundres > tens && hundres > ones)
    {
        return "First Digit is Largest";
    }
    else if(hundres < tens && hundres < ones)
    {
        return "First digit is smallest";
    }
    return "Neither first digit is largest nor smallest";

}
// console.log(isFirstDigitLargestNum())
// Take a 3-digit number and determine if the last digit is the largest, smallest, or neither.
function isLastDigitLargestNum()
{
    let num = 123;
    let ones = num % 10;
    let tens = Math.floor(num /10)%10;
    let hundred = Math.floor(num / 100) / 10;

    if(ones > tens && ones > hundred)
    {
        return "Last digit is largest";

    }
    else if(ones < tens && ones < hundred)
    {
        return "Last digit is smallest";
    }
    return "Neither last digit is largest nor smallest";
}
// console.log(isLastDigitLargestNum())

function CheckDigitLargestOrSmallest()
{
    let num = 583;
    let ones = num % 10;
    let tens = Math.floor(num /10)%10;
    let hundreds = Math.floor(num / 100);

    let largest;
    let smallest;

    if(hundreds > tens && hundreds > ones)
    {
        largest = "First Digit is largest";
    }
    else if(tens > ones && tens > hundreds)
    {
       largest = "Middle digit is largest";
    }
    else if(ones > tens && ones > hundreds)
    {
       largest =  "Last digit is largest";
    }
    else {
        largest ="There is tie for largest";
    }

    if(hundreds < tens && hundreds < ones){
        smallest = "first digit is smallest";
    }
    else if(tens < ones && tens < hundreds)
    {
        smallest = "Middle digit is smallest";
    }
    else if (ones < tens && ones < hundreds)
    {
        smallest =  "Last digit is smallest";
    }
    else
    {
        smallest = "there is tie for smallest";
    }
    
    return  `${largest} - ${smallest} of ${num}`;
}
console.log(CheckDigitLargestOrSmallest())

// 3. Take a 4-digit number and check if the first and last digits are equal. 
function findFirstAndLastDigitEqual(n)
{
    let first = Math.floor(n / 1000) % 10;
    let last = n % 10;
    if(first === last)
    {
      return "First and last digit is equal";
    }
    else
    {
        return "First and last digit is not equal";
    }
}
console.log(findFirstAndLastDigitEqual(1124))

// Take a 4-digit number and calculate the difference between the first and last digits.
function diffFirstandLastDigit()
{
    let num = 1225;
    let first = Math.floor(num / 1000)%10;
    let last = num % 10;
    let diff = Math.abs(first - last);

    if(diff)
    {
        return `Only this is the difference ${diff}`;
    }
    else
    {
        return "It is not difference";
    }
}
console.log(diffFirstandLastDigit())

// Take a 3-digit number and check whether all digits are equal.
function isAllDigitAreEqual()
{
    let num =111;
    let ones = num % 10;
    let tens = Math.floor(num / 10) %10;
    let hundreds = Math.floor(num / 100)%10;
    if(hundreds === tens && tens === ones && hundreds === ones)
    {
        return "All 3 digits are equal";
    }
    else
    {
        return "Not all 3 digits are equal";
    }
}

console.log(isAllDigitAreEqual())

// Take a 3-digit number and check whether exactly two digits are equal.
function isDigitisEqual(nn)
{
    let ones = nn % 10;
    let tens = Math.floor(nn / 10) % 10;
    let hundreds = Math.floor(nn / 100) % 10;
    if(ones === tens)
    {
        return "Ones and tens digits is equal";
    }
    else if(ones === hundreds)
    {
        return "Ones and hundreds is equal";
    }
    else if(tens == hundreds)
    {
        return "tens and hundres are equal";
    }
    return "Digits are not equal";
}
console.log(isDigitisEqual(112))
// Take a 4-digit number and check whether first two digits are equal && last two digit are equal.
function isFourDigit(nnn)
{
    let ones = nnn % 10;
    let tens = Math.floor(nnn / 10 ) % 10;
    let hundreds = Math.floor(nnn / 100) % 10;
    let thousands = Math.floor(nnn / 1000) % 10;

    if(thousands === hundreds)
    {
        return "First two digits are equal";
    }
    else if(tens === ones)
    {
        return "Last two digits are equal";
    }
    return "Not all digits are equal";
}
console.log(isFourDigit(1322))
// Check whether a given integer is single-digit, double-digit, or multi-digit. 
function isDigits()
{
    let num = 12;
    if(num >= 0 && num <=9)
    {
        return "Single digit integer";
    }
    else if(num >= 10 && num <= 99)
    {
        return "Double digit integer";
    }
    else
    {
        return "Multi digit number";
    }
}
console.log(isDigits());

// check if a number is a multiple of 7 or ends with 7.
function isSevenMultiple()
{
    let num = 17;
    if(num % 7 == 0 || num % 10 === 7)
    {
        return "number is a multiple of 7 or ends with 7"
    }
    return "not number is a multiple of 7 or ends with 7";
}
console.log(isSevenMultiple())

// Take coordinates (x, y) and determine which quadrant the point lies in. 
function isQuadrant(x,y)
{
    
    if(x > 0 && y > 0)
    {
        return "First quadrant";
    }
    else if(x < 0 && y > 0)
    {
        return "Second quadrant";
    }
    else if(x < 0 && y < 0)
    {
        return "Third quadrant";
    }
    else if(x > 0 && y < 0)
    {
        return "Fourth quadrant";
    }
    else
    {
        return "no quadrant"
    }
}
console.log(isQuadrant(2,))

// check if an amount can be evenly divided into 2000, 500, and 100 currency notes. 
function isDivisibleNum()
{ 
    let amount = 6000;
    if(amount % 2000 === 0 && amount % 500 === 0 && amount % 1000 === 0)
    {
        return "Can be divided by 2000,500 & 100";
    }
    else{
        return "Not divided by 2000,500 & 100"
    }
}
console.log(isDivisibleNum())

// Check if a number lies within the range [100, 999]. 
function isRangeNumber()
{
    let num = 101;
    if(num >= 100 && num <= 999)
    {
        return "Numbers lies in range of 100 to 999"
    }
    else{
        return "Not lies in range of 100 to 999";
    }
}
console.log(isRangeNumber())

// Take two angles of a triangle and compute the third angle. 
function isTriangle()
{
    let A = 90;
    let B = 70;
    let C;
    let total= 180;
    C = total - (A + B); 
    return C
}
const result = isTriangle();
console.log(result)

// Check whether a number is a perfect square (without using the square root function).
function isPerfectSquare()
{
    let num = 30;
    let n = 1;
    while(n * n <= num)
    {
         if(n * n === num)
        {
            return "Perfect square";
        }
        n++;
    }
    return "Not perfect square";
   
}
console.log(isPerfectSquare())