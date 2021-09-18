var numbers = prompt('Raqam yozing' , "1 2 3 4 5").split(' ');

var sum = 0

for (var result of numbers) {  

   sum = sum + Number(result)
}

alert(sum);