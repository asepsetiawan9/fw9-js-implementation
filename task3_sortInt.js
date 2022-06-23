function dividerSort(number){
    let result = '';
    let items = number.toString().split('0'); //number d ubah menjadi string trus d pisahkan dan ketika ketemu angka 0 akan d ubah menjadi sebuah element array
    items.forEach( item => { //data aray kmudian di iterasi
      result = result + item.split('')
        .sort().join('') //hasil iterasi akan di split kembali per huruf karena string, dan di short untuk mengurutkan kemudian hasil dari sort tadi masih berupa element array dan di satukan dengan join
    });
    finalResult = parseInt(result) //convert string ke integer
    console.log(finalResult);
  }
  dividerSort(746501085201959);