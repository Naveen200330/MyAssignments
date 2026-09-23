function lastWordLength() {
   
    let s = "Hello World";

    let words = s.split(" ");

    let lastWord = words[words.length - 1];

    console.log(`The last word is ${lastWord} with length ${lastWord.length}`);
  
}

lastWordLength();

function lastWord(){

    let s = " fly me to the moon "

    let words=s.trim().split(" ");

    let lastWord=words[words.length-1]

    console.log(`The last word is ${lastWord} with length ${lastWord.length}`);

        return lastWord.length

    }

console.log(lastWord());

function isAnagram(str1,str2){

    str1=str1.toLowerCase().replaceAll(" ","");
    str2=str2.toLowerCase().replaceAll(" ","");

   let Sort1=str1.split('').sort();
   let Sort2=str2.split('').sort();

   return Sort1.toString()==Sort2.toString();

      
}

console.log(isAnagram('Listen','Silent'));
console.log(isAnagram('Hello','World'));