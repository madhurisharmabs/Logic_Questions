// Day2
// Take three numbers and print the largest. 
function isLargestNum()
{
    let num1 =20;
    let num2 = 25;
    let num3 = 35;
    if(num1 > num2 && num1 > num3)
    {
        return ` ${num1} is largest number`;
    }
    else if(num2 >= num1 && num2 >= num3)
    {
        return `${num2} is largest`;
    }
    else
    {
        return`${num3} is largest`;
    }
}
// console.log(isLargestNum())

// Take a temperature value and print “Cold”, “Warm”, or “Hot” using range conditions. 
// Tc-O(n) Sc - O(n)
function CheckTemprature()
{
    var temperature = 28;
    if(temperature <= 15)
    {
        return "Cold";
    }
    else if(temperature >= 15 && temperature <=30)
    {
        return "Warm";
    }
    else
    {
        return "Hot";
    }
}
// console.log(CheckTemprature());

function chckTemp(temp)
{
    if(temp < 15)
    {
        return "Cold";
    }
    else if(temp >= 15 && temp <=30)
    {
        return "Warm";
    }
    else
    {
        return "Hot";
    }
}
// console.log(chckTemp(35))

// Take a character and check if it’s a vowel or consonant. 

function checkCharacter(char)
{
    var vowel = ['a','e','i','o','u'];
    char = char.toLowerCase();
    if(vowel.includes(char))
    {
        return  "vowels character"
    }
    else
    {
        return "consonent Charcter";
    }
}
// console.log(checkCharacter('A'));

function chkCharacter(ch)
{
    if(typeof ch !== "string" || ch.length !== 1)
    {
        return "Invalid Character";
    }

    ch = ch.toLowerCase();
    if(!/[a-z]/.test(ch))
    {
        return "Please enter an alphabet";
    }
    return 'aeiou'.includes(ch) ? "vowels" : "consonant";
}

// console.log(chkCharacter('h'));

//  Take a character and check whether it’s uppercase, lowercase, a digit, or a special  character
function checkChar(cha)
{
   if(/[A-Z]/.test(cha))
   {
       return "UpperCase character"
   }
   else if(/[a-z]/.test(cha))
   {
       return "LowerCase char"
   }
   else if(/[0-9]/.test(cha))
   {
        return "Numbers"
   }
   else
   {
        return "Special Char";
   }
}
console.log(checkChar("/"));