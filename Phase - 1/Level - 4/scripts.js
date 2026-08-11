// 1.Take a character and check if it is a letter, a digit, or neither.
function checkCharacter(char)
{
    // char = char.toUpperCase();
    if(/[A-Z]/.test(char) || /[a-z]/.test(char))
    {
        return "It is a letter"
    }
    else if(/[0-9]/.test(char))
    {
        return "It is a digit";
    }
    else
    {
        return "It is neither letter or digit"
    }
}
// console.log(checkCharacter("***"))

function checkCharacter1(char)
{
    let code = char.charCodeAt(0);
    let uppercase = code >= 65 && code <= 90;
    let lowercase = code >= 97 && code <= 122
    if(uppercase || lowercase)
    {
        return "It is a letter"
    }
    else if(code >= 48 && code <= 57)
    {
        return "It is a digit";
    }
    else
    {
        return "It is neither letter or digit"
    }
}
console.log(checkCharacter1('hgyf'))

// 2. Take a number and print “Fizz” if divisible by 3, “Buzz” if divisible by 5, and 
// “FizzBuzz” if divisible by both.

function fizzBuzz(num)
{
  
    if(num % 3 == 0 && num % 5 == 0)
    {
        return "FizzBuzz";
    }
    else if(num % 3 == 0)
    {
        return "Fizz";
    }
    else if(num % 5 == 0)
    {
        return "Buzz"
    }
    else{
        return "no Fizz";
    }
}
console.log(fizzBuzz(4))

// Take three numbers and print the median value (neither maximum nor minimum).

function medianNum()
{
    let a = 20;
    let b = 35;
    let c = 50;
    if(a > b && a < c || a < b && a > c)
    {
        return " a is median number";
    }
    else if(b > a && b < c || b < a && b > c)
    {
        return "b is median number";
    }
    else if(c > a && c < b || c < a && c > b)
    {
        return "c is median number";
    }
    return "No median num"

}
console.log(medianNum());

// Take 24-hour time (hours and minutes) and print whether it is AM or PM. 
function checkAMPM(hour, minutes) {
    if (hour < 12) {
        return "AM";
    } else {
        return "PM";
    }
}

console.log(checkAMPM(10, 30)); // AM
console.log(checkAMPM(15, 45)); // PM
// console.log(checkAMPM(12, 00)); // PM

// Take income and age, and check if eligible for tax (age > 18 and income > 5 L). 
function isEligiableForTax(income,age)
{
    if( age >= 18 && income >= 5)
    {
        return "Eligible to pay tax";
    }
    else{
        return "Not eligible to pay tax"
    }

}
console.log(isEligiableForTax(8,18))

// Take two numbers and check if both are positive and their sum is less than 100.
function isTwoNumPositive(num1,num2)
{
    let sum = num1 + num2;
    if(num1 > 0 && num2 > 0 && sum <=100)
    {
        return "Bothe are positive number";
    }
    else
    {
        return "Both are not positive";
    }

}
console.log(isTwoNumPositive(10,90))

// Take a single digit (0–9) and print its word form (“Zero” to “Nine”). 
function digitToWord(num)
{
    if(num === 0)
    {
        return "Zero";
    }
    else if(num === 1)
    {
        return "One";
    }
    else if(num === 2)
    {
        return "Two";
    }
    else if(num === 3)
    { 
        return "Three";
    }
    else if(num === 4)
    {
        return "Four";
    }
    else if(num === 5)
    {
        return "Five";
    }
    else if(num === 6)
    {
        return "Six";
    }
    else if(num === 7)
    {
        return "Seven";
    }
    else if(num === 8)
    {
        return "Eight";
    }
    else if(num === 9)
    {
        return "Nine";
    }
    else
    {
        return "Invalid digit";
    }
}
console.log(digitToWord(7))

// Take a weekday number (1–7) and determine if it is a weekday or weekend.
function isWeekDaysOrWeekend(day)
{
    if( day === 1 || day ===2 || day === 3 || day === 4 || day === 5)
    {
        return "Weekdays";
    }
    else if(day === 6 || day === 7)
    {
        return "Weekend";
    }
    else
    {
        return "Neither weekDays nor Weekend";
    }
}
console.log(isWeekDaysOrWeekend(15))

// Take a password string and check basic rules (length ≥ 8 and contains at least one 
// digit). 
function isPassword()
{
    let paswd = "asdfgh";
    if(paswd.length >= 8)
    {
        return "Password contains 8 character"
    }
    else
    {
        return "Password is incorrect";
    }
}
console.log(isPassword());

// Take electricity units consumed and calculate the bill as per slabs (using if-else).
// 0–100 units      → ₹5/unit
// 101–200 units    → ₹7/unit
// 201–300 units    → ₹10/unit
// Above 300        → ₹15/unit
function CalculateElectricityBill(units)
{
    let bill=0;
    if(units < 100)
    {
        bill= units * 5;  
    }
    else if(units <=200)
    {
        bill = 100 * 5 + ((units - 100) * 7);
    }
    else if(units <= 300)
    {
        bill = 100 * 5 + 100 * 7+ ((units - 200) * 10);
    }
    else
    {
        bill = 100 * 5 + 100 * 7 + 100 * 10 + ((units - 300) * 15);
    }
    return bill;
}
console.log(CalculateElectricityBill(250))
// Understand the calculation
//  First 100  → 100 × 5  = 500
// Next 100   → 100 × 7  = 700
// Remaining 50 → 50 × 10 = 500

// Total = 1700

function CalEleSingleRateBasedOnSlab(unit)
{
    let bill = 0;
    if(unit < 100)
    {
        bill = unit * 5;
    }
    else if(unit <=200)
    {
        bill = unit * 7;
    }
    else if(unit <=300)
    {
        bill = unit * 10;
    }
    else
    {
        bill = unit * 15;
    }
    return bill;
}
console.log(CalEleSingleRateBasedOnSlab(250))
// Calculation
// 250 → falls in 201–300 slab
// Rate → ₹10
// 250 × 10 = ₹2500