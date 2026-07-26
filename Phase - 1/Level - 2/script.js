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