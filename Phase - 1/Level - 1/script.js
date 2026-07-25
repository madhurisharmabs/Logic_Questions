// 1.Take a number and print whether it’s positive, negative, or zero.
// Using if-else
function checkNum(num)
{
    if(isNaN(num))
    {
        return "Invalid Number";
    }
    else if(num > 0)
    {
        return "Positive num";
    }
    else if(num < 0)
    {
        return "Negative Num";
    }
   return "zero";
}
console.log(checkNum(Number("xzy")));
// console.log(checkNum(10))

// using Ternery operator 
const num = 10;
// let num = Number("-30");
// let num = Number("abc");
console.log(isNaN(num) ?"Invalid Number": num > 0 ? "Positive" : num < 0 ? "Negative":"Zero");
// -------------------------------------------------------------------------------------------------------
// 2. Check if a number is even or odd.
// Using if-else
function checkEvenOdd(num)
{
    if(num % 2 == 0)
    {
        return "even";
    }
    return "odd";
}
console.log(checkEvenOdd(3));

// Using Ternery
const nums = 2;
console.log(num % 2 == 0 ? "Even" : "Odd");
// -------------------------------------------------------------------------
// Check if a number is divisible by 5.
// Using if-else
function checkDivisibleByFive(num)
{
    if(isNaN(num))
        return "Invalid number";

    if(num % 5 == 0)
    {
        return "Divisible by 5";
    }
    return "Not Divisible by 5";
}
console.log(checkDivisibleByFive(12));

let numbers = 25;
console.log(isNaN(Number(numbers)) ? "Invalid Number": numbers % 5 == 0 ? "Divisible by 5":"Not Divisible by 5");
// ---------------------------------------------------------------------------------------------------------------------

// Check if a number is divisible by both 3 and 5.
// Using if-else
function checkDivisibleByThreeAndFive(num)
{
    if(isNaN(Number(num)))
        return "Invalid Number";

    if(num % 3 == 0 && num % 5 == 0)
    {
        return "Divisible by 3 and 5"
    }
    return "Not divisible by 3 and 5";
}
console.log(checkDivisibleByThreeAndFive(35));

// let numss = "bn";
let numss = 24;

console.log(isNaN(Number(numss)) ? "Invalid number":numss % 3 == 0 && numss % 5 == 0?"Divisible by 3 and 5" : "Not Divisble by 3 and 5")

// Check if a given year is a leap year.
// Using if-else 
function isLeapYear(year)
{
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
    {
        return "Leap Year"
    }
    return "Not Leap year"
}
console.log(isLeapYear(2026))
// Using Ternery operator
// let year = "vbb";
let year = 2020;
console.log((typeof year != "number" ||isNaN(year))?"Invalid Year":year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)?"Leap Year":"Not Leap Year");
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Take two numbers and print the larger one.
function isLargest()
{
    let num1 = 23;
    let num2 = 67;
    if(num1 > num2)
    {
        return num1 + " is the largest num";
    }
   else if (num2 > num1)
    {
        return num2 + " is the largest num"
    }
    return "Both are equal";
}

console.log(isLargest())

let nums1 = "iii";
let nums2 = "abc";
// console.log(Math.max(nums1, nums2));

console.log(typeof(nums1) != "number" || typeof(nums2) != "number" ||isNaN(nums1)|| isNaN(nums2) ? `Invalid Number`:nums1 > nums2 ? `${nums1} is largest`:nums2 < nums1 ? `${nums2} is largest`:`Both nums are equal`)