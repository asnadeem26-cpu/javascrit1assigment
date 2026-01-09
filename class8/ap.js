//q1
var arr=[[],[],[]]
///2
var matrix=[[0,1,2,3],
[1,0,1,2],
[2,1,0,1]
]
console.log(matrix)
document.write("0,1,2,3<br>");
document.write("1,2,0,1<br>");
document.write("2,1,0,1<br>")
//q3
var numbers=[1,2,3,4,5,6,7,8,9,10]
 document.write('1<br>',"2<br>","3<br>","4<br>","5<br>","6<br>","7<br>")
    //q4

    var numbers=parseInt(prompt("enter your integer for table "))

    //range 
    var range=parseInt(prompt("enter your range for table"))
    console.log (`Multiplication table for ${number} up to ${range}:`)
    
//q5

// take number input from the user
var number = parseInt(prompt('Enter an integer for the table:'));

// take range input from the user
var range = parseInt(prompt('Enter the length of the table:'));

console.log(`Multiplication table for ${number} up to ${range}:`);

// creating a multiplication table using a for loop
for (var i = 1; i <= range; i++) {
    var result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
//6
// console.log("a. Counting:");
// for (var i = 1; i <= 15; i++) {
//     console.log(i + ", ");
// }
console.log("a.counting")
for(var i=1;i<=15;i++){
    console.log(i+", ")
}