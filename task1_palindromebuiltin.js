function palindromeCek(string) {

    const arrString = string.split('');
    const reverseArr = arrString.reverse();
    const resultReverse = reverseArr.join('');

    if(string == resultReverse) {
        console.log('Palindrome Detected');
    }
    else {
        console.log('Not a palindrome');
    }
}

palindromeCek("malam");