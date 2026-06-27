
function passwordGenerator(length , lowerCase , upperCase , numbers , symbols) {

    const lowercaseChar="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar="1234567890";
    const symbolChar="@&!*#?"

    let string="";
    let password="";

    string += lowerCase ? lowercaseChar: "";
    string += upperCase ? uppercaseChar: "";
    string += numbers ? numberChar: "";
    string += symbols ? symbolChar: "";

    

    for(let i=0;i<length;i++)
    {
        const random = Math.floor(Math.random()*string.length);
        password += string[random];
    }

    if(length<=0)
        return `Password must contain atleast 1 character.`;
    else if(string.length===0)
        return `Select atleast 1 set of characters.`;
    else
        return password;
    
}

const length=10;
const lowerCase=true;
const upperCase=true;
const numbers=true;
const symbols=true;


console.log(`Password is: ${passwordGenerator(length,lowerCase,upperCase,numbers,symbols)}`);