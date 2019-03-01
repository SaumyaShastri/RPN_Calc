const rs = require('readline-sync');
let str3 = '';
function powop(tmp)
{
    let end;
    let start;
    let str1 = tmp.substr(tmp.search("POW")+4, tmp.length-1);
    console.log("Input String: "+str1);
    let str2 = '';
    i = 0;
    start = tmp.IndexOf("POW");
    end = tmp.lastIndexOf("POW");
    for(i=start; i<end; i++)
    {
        while(str1.charAt(i) !== ')')
        {
            console.log(str1.charAt(i));
            if(str1.charAt(i) === ',')
            {
                str2 += ' ';
            }
            else
            {
                str2 += str1.charAt(i);
            }
            i++;
        }
    }
    return str2;
}

let tmp = rs.question("Enter the expression: ");
tmp = powop(tmp);
console.log(tmp);
