var readLineSync = require('readline-sync');
var userDate = readLineSync.question('Please enter ur date in DD format: ');
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
