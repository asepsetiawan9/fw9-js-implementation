function reverseWord(str) {
    str = str;
    const tem = str;
    let lastWord = str;
    let result = '';
   for (let i = str.length - 1; i >= 0; i--) {
     result = result + lastWord[i];
    }
    const hasil = result;
    
    if(hasil == tem){
        console.log('Palindrome Detected')
    }else{
        console.log('Not Palindrome')
    }
   }
   reverseWord('cekkec');