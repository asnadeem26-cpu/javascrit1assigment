// //q1
// var arr=[[],[],[]]
// ///2
// var matrix=[[0,1,2,3],
// [1,0,1,2],
// [2,1,0,1]
// ]
// console.log(matrix)
// document.write("0,1,2,3<br>");
// document.write("1,2,0,1<br>");
// document.write("2,1,0,1<br>")
// //q3
// var numbers=[1,2,3,4,5,6,7,8,9,10]
//  document.write('1<br>',"2<br>","3<br>","4<br>","5<br>","6<br>","7<br>")
//     //q4

//     var numbers=parseInt(prompt("enter your integer for table "))

//     //range 
//     var range=parseInt(prompt("enter your range for table"))
//     document.write (`Multiplication table for ${number} up to ${range}:`+"</br>")
    
// //q5

// // take number input from the user
// var number = parseInt(prompt('Enter an integer for the table:'));

// // take range input from the user
// var range = parseInt(prompt('Enter the length of the table:'));

// console.log(`Multiplication table for ${number} up to ${range}:`);

// // creating a multiplication table using a for loop
// for (var i = 1; i <= range; i++) {
//     var result = i * number;
//     document.write(`${number} * ${i} = ${result}`);
// }
// //6


// // console.log("a. Counting:");
// // for (var i = 1; i <= 15; i++) {
// //     console.log(i + ", ");
// // }

// console.log("a.counting")
// for(var i=0;i<=15;i++){
//     document.write(i+"</br> ")

// }
// //b


// "<h2>reversecounting</h2>"
// for(vari=10;i>=1;i--){
//     document.write(i+"</br>")
// }
// //c


// for(var i=0;i<20;i+=2){
//     document.write(i+"</br>")
// }
// //d


// for(var i=0;i<19;i+=2){
//     document.write(i+"</br>")

// }


// //e
// for(var i =1;i<=10;i++){
//     document.write(1*2+"k")
// }
//q7



// var user=parseInt (prompt["wellcome to abc bakery!  what do you want"])
// var bakery=["cake","apple pie","cookies","chips","patties"];

// var found = false
// for(let i=0;i< bakery.length;i++){
//     found=true
// }
// if(found){
//     alert(`yes,"${order}" is available in our bakery`);
// }else{
//     alert(`we are sorry,"${order}" is not available in our bakery`)
// }


//10


// for (let i = 5; i <= 100; i += 5) {
//   document.write(i+"</br>");
// }

//q9

var a=[24,53,78,91,12]
var smallest=a[0]
for(var i=1; i <a.length;i++){
    if(a[i]<smallest){
        smallest=a[i]
    }
}