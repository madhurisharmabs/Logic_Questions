// Take three sides and check if they form a valid triangle. 
function isValidTriangle(a,b,c)
{
    if(typeof a !== "number" || typeof b !== "number"|| c !== "number" &&  isNaN(a) || isNaN(b) || isNaN(c) && a <= 0 || b <= 0 || c <= 0)
    {
        return "Invalid Input";
    }

    if(a + b > c && a + c > b && b + c > a)
    {
        return "Valid Triangle";
    }
    else
    {
        return "Invalid Triangle";
    }

}
console.log(isValidTriangle(2,3,4))

//  If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene.
function isTriangle(a,b,c)
{
    if(typeof a !== "number" || typeof b !== "number"|| c !== "number" &&  isNaN(a) || isNaN(b) || isNaN(c) && a <= 0 || b <= 0 || c <= 0)
    {
        return "Invalid Input";
    }
    if(a + b <= c || a + c <= b || b + c <= a)
    {
        return "Invalid Triangle";
    }
    if(a == b && b == c)
    {
        return "Equilateral Triangle";
    }
    else if(a == b || a == c || b == c)
    {
        return "Isosceles Triangle";
    }
    return "Scalene Triangle"
}
console.log(isTriangle(5,6,7)); //Scalene Triangle 
console.log(isTriangle(5,5,5)); //Equilateral Triangle
console.log(isTriangle(6,6,5)); //Isosceles Triangle

// Take marks (0–100) and print the corresponding grade (A/B/C/D/F). 
function Grade(marks)
{
    // var A = marks > 90;
    // var B = marks > 75;
    // var C = marks > 50;
    // var D = marks > 35;
    // var F = marks < 35;
    if(marks >= 90 && marks <= 100)
    {
        return "A Grade";
    }
    else if(marks >= 80 && marks < 89)
    {
        return "B Grade";
    }
    else if(marks >= 70 && marks < 80)
    {
        return "C Grade";
    }
    else if (marks >= 60 && marks < 70)
    {
        return "D Grade";
    }
    else if(marks >= 0 && marks < 60)
    {
        return "F Grade";
    }
    else
    {
        return "Invalid marks"
    }
}
console.log(Grade(55))
// Check if one of two given number is a multiple of other
function isMultipleOfOther(num1,num2)
{
    if(num1 == 0 || num2 == 0)
    {
        "Zero cannot be divisible by given number"
    }
    if(num1 % num2 == 0 || num2 % num1 == 0)
    {
        return "It is Divisible";
    }
    return "It is not Divisible";
}
console.log(isMultipleOfOther(7,16));

// Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good 
// Evening”, or “Good Night”.

function greeting()
{
    let hr = 14;
    if(hr >= 5 && hr <= 11)
    {
        return "Good  morning";
    }
    else if(hr >= 11 && hr <=15)
    {
        return "Good Afternoon";
    }
    else if(hr >= 15 && hr <=19)
    {
        return "Good Evening";
    }
    else if(hr >=20 && hr <=23 || hr >=0 && hr <=4 )
    {
       return "Good Night"
    }
}
console.log(greeting())

function grettingFn()
{
    var currentDate = new Date();
    let hour = currentDate.getHours();
    if (hour < 12)
    {
        console.log("Good Morning");
    }
    else if(hour < 17)
    {
        console.log("Good Afternoon");
    }
    else if(hour < 21)
    {
        console.log("Good Evening");
    }
    else
    {
        console.log("Good Night");
    }
}
grettingFn()

// Check voting eligibility for a given age (18+). 
function isEligible()
{
    var age = 23;
    if(age > 18)
    {
        return "Is eligible to vote";
    }
    return "Not Eligible to vote";
}
console.log(isEligible())


// Take two numbers and determine whether both are even, both are odd, or one is 
// even and one is odd.
function isBothEvenOrOdd(num1,num2)
{
    if(num1 % 2 == 0 && num2 % 2 == 0)
    {
        return "Bothe are Even number";
    }
    else if(num1 % 2 != 0 && num2 % 2 != 0)
    {
        return "Both are Odd number"
    }
    return "One is even and one is odd";

}
console.log(isBothEvenOrOdd(3,15));

function checkNumbersEvenOrOdd(num1, num2) {

    if (
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return "Invalid Input";
    }

    const isEven1 = num1 % 2 === 0;
    const isEven2 = num2 % 2 === 0;

    if (isEven1 && isEven2) {
        return "Both are Even";
    }

    if (!isEven1 && !isEven2) {
        return "Both are Odd";
    }

    return "One is Even and One is Odd";
}
console.log(checkNumbersEvenOrOdd(3,20));

// Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’. 
// function checkCharacters(char) // case insensitive /[A-M]/i.test
// {
//     if(/[A-M]/i.test(char))
//     {
//         return "Character belongs between 'A' and 'M' ";
//     }
//     else if(/[N-Z]/i.test(char))
//     {
//         return "Character belongs between 'N' and 'Z'";
//     }
//     return "Invalid character";
// }
// console.log(checkCharacters('s'));

function checkCharacters(char) // using regular expression.
{
    char = char.toUpperCase();
    if(/[A-M]/i.test(char))
    {
        return "Character belongs between 'A' and 'M' ";
    }
    else if(/[N-Z]/i.test(char))
    {
        return "Character belongs between 'N' and 'Z'";
    }
    return "Invalid character";
}
console.log(checkCharacters('s'));

function ChckChar(c)
{ 
    c = c.toLowerCase();
    if(c >= "a" && c <= "m")
    {
        return "Charcter belongs 'a' and 'm' ";
    }
    else if(c >= "n" && c <= "z")
    {
        return "Charcater belongs between 'n' and 'z' "
    }

    return "Invalid Charcter";
}
console.log(ChckChar("A"))

// Take a day number (1–7) and print the corresponding day name. 
function DayNum(num)
{
     if(num === 1)
     {
        return "Sunday";
     }
     else if (num === 2)
     {
        return "Monday"
     }
     else if(num === 3)
     {
        return "Tuesday";
     }
     else if(num === 4)
    {
        return "Wednesday";
    }
    else if(num === 5)
    {
        return "Thursday";
     
    }
    else if(num === 6)
    {
        return "Friday";
        
    }
    else if(num === 7)
    {
        return "Saturday"
    }
    return "Invalid day num";
}
console.log(DayNum(1));
// Using Switch Case
function checkDaysByNum(numb)
{
    switch(numb){
        case 1: 
            return "Sunday";

        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid Day num";
    }
}
console.log(checkDaysByNum(4))
// Using Array
function checkDayNumUsingArr(numm)
{
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday"
    ]
    if(numm > 1 && numm <= 7)
    {
        return days[numm - 1];
    }
    return "Invalid Day num";
}
console.log(checkDayNumUsingArr(6))

function YearNum(number)
{
    if(number === 1)
    {
        return "January";
    }
    else if(number === 2)
    {
        return "February";
    }
    else if(number === 3)
    {
        return "March";
    }
    else if(number === 4)
    {
        return "April";
    }
    else if(number === 5)
    {
        return "May";
    }
    else if(number === 6)
    {
        return "June";
    }
    else if(number === 7)
    {
        return "July";
    }
    else if(number === 8)
    {
        return "August";
    }
    else if(number === 9)
    {
        return "September";
    }
    else if(number === 10)
    {
        return "October";
    }
    else if(number === 11)
    {
        return "November";
    }
    else if(number == 12)
    {
        return "December";
    }
    return "Invalid year num";
}
console.log(YearNum(7))
// using Switch Case
function yearNumUsingSwitchCase(nummm)
{
    switch(nummm)
    {
        case 1:
          return "January";
        case 2:
            return "Febraury";
        case 3:
            return "March";
        case 4:
            return "april";
        case 5:
            return "May";
        case 6: 
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
    }
}
console.log(yearNumUsingSwitchCase(12))

// using Arr
function usingArrYearNum(nnum)
{
    var years=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "Jul",
        "Augus",
        "Sept",
        "OCt",
        "Nov",
        "Dec"       
    ]
    if(nnum >= 1 && nnum <= 12)
    {
        return years[nnum - 1];
    }
    return "Invalid year num";
}
console.log(usingArrYearNum(13))