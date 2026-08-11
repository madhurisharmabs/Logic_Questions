//  Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the 
// origin. 
function checkCoordinates(x,y)
{
    if((x < 0 || x > 0) && y === 0)
    {
        return "Points are at X-axis";
    }
    else if(x === 0 && (y > 0 || y < 0))
    {
        return "Points are at Y-axis";
    }
    else if(x === 0 && y === 0)
    {
        return "Points at lies on origin";
    }
    else
    {
        return "Point lies neither on X-axis nor Y-axis";
    }

}
console.log(checkCoordinates(9,6))

// Take three numbers and check if they can form a Pythagorean triplet. 
function CheckPythagoreanTriplet(a,b,c)
{
    // let Pythagoreantheorem = a^2 + b^2 + c^2;
    a = a * a;
    b = b * b;
    c = c * c;

    let hypothenus = a+b;
    if(hypothenus === c && (c > a && c > b))
    {
        return  `Pythagorean triplet`
    } 
    else 
    {
        return "Not Pythagorean triplet";
    }
}
console.log(CheckPythagoreanTriplet(3,4,5));

function PythagoreanTheroem(a,b,c)
{
    let largest = Math.max(a,b,c);
    let sumOfLargest;
    if(largest === a)
    {
        sumOfLargest = (b * b) + (c * c);
    }
    else if(largest === b)
    {
        sumOfLargest = (a * a) + (c * c);
    }
    else
    {
        sumOfLargest = (a * a) + (b * b); 
    }
    if(sumOfLargest === largest * largest)
    {
        return "Pythagorean triplet";
    }
    else
    {
        return "Not Pythogorean triplet";
    }
}
console.log(PythagoreanTheroem(2,3,4))

// Take day and month and check if it forms a valid calendar date (ignoring leap years). 
function isValidCalendar(day,months)
{
    let thirthyOneDaysMonths = ['Jan','March','MAy','July','August','October','December'];
    let thirthyDayMonths = ['Apr','June','September','November'];
    let TwentyEightDays = ['Feb'];
    if(thirthyOneDaysMonths.includes(months))
    {
        if(day >= 1 && day <= 31)
        {
            return "Valid Date";
        }
    }
    else if(thirthyDayMonths.includes(months))
    {
        if(day >= 1 && day <=30)
        {
            return "Valida Date";
        }
    }
    else if(TwentyEightDays.includes(months))
    {
        if(day >= 1 && day <= 28)
        {
            return "Valid Date";
        }
    }
    return "Invalid Date";
}
console.log(isValidCalendar(15,"August"));




