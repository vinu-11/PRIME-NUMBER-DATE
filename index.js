var readLineSync = require('readline-sync');
var userDate = readLineSync.question('Please enter your date in DD format: ');
var userMonth = readLineSync.question('Please enter your month in MM format: ');

console.log("You Entered " + userDate + "/" + userMonth);

if ( userMonth == 02 && userDate < 29){
  primeNumber(userDate);
} else if ( userMonth < 31 && userMonth == 04 || userMonth == 06 || userMonth == 08 || userMonth == 09 || userMonth ==11 ){
  primeNumber(userDate);
}else if (userMonth < 32 && userMonth == 01 || userMonth == 03 || userMonth == 05 || userMonth == 07 || userMonth ==10 || userMonth ==12){
  primeNumber(userDate);
}else{
  console.log("Please enter valid date and month");
}

function primeNumber(userDate){
  var flag = 0;

  if (userDate == 0 || userDate == 1){
    flag = 1;
  }
  for(var i = 2; i <= userDate / 2; i++){
    if ( userDate%i == 0){
    flag = 1;
    break;
    }
  }

  if(flag == 0){
    console.log("Entered date is prime number ");
  }else{
    console.log("Entered date is not a prime number ");
  }
}

