var number = [1,400,12,34,5];
var i = 0;
var total = 0;
console.log(number.length);
while(i < number.length){


  total = total + number[i];
  console.log(total);
  console.log(i);
  i = i + 1;



}
console.log(`total : ${total}`);
