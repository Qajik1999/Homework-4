const str1 = "react";
const str2 = "redux";
let commonCount = 0; 
let checkedChars = '';
for(let i in str1){
   for(let y in str2){
    if(str1[i] === str2[y]){
        commonCount +=1
        checkedChars += str1[i]
        }
   }
}
console.log(commonCount);
console.log(checkedChars);