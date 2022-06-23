function reverseWords(str){ //buat param untuk mem parse string
    let resultReserve = str.split(" "); //variable yang isinya memisahkan kata kata berdasarkan spasi menjadi bebrapa elment array
    //console.log(newString); 
    resultReserve.reverse();//me reverse kata per dari arraynewString 
    resultReserve = resultReserve.join(" "); //menggabungkan hasil dan menambahkan spasi
    return resultReserve;
  };

  console.log(reverseWords("aku sayang kamu"));
  