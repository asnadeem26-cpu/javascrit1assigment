//q1

var num1 = 15
var num2= 10

if(num1>num2){
    console.log(num1+"is larger than"+num2+".")

}else if(num2>num1){
    console.log(num2+"is larger than "+num1+".")

}else{console.log(num1+"and"+num2+"are equal")}


//q3
var num= -7

if(num>0){
    console.log("the number is positive")
}else if(num<0){
    console.log("the number is negative")
}else{
    console.log("the number is zero")
}

//4

var correct= "secret"
var input="secret"
if(input===correct){
    console.log("correct!  the password enter match")
}else{
    console.log("incorrect! sorry try again")
}

//6
var greeting ;
var hour=13
if(hour<13){
    greeting="good afternoon"
}else if(hour<17){
    greeting="good dAY" 
}
else{
    greeting="good day"
}

//7
var hours =parseInt(time24/100)
var min= time24%100
var period="Am"
var display=hours

if(hours>=12){
    period="pm"
}

//8
var  time =1900
var greeting;
if( time>= 1200  &&time<1200

){
    greeting="good morning"
}else if(time>=1200&& time<1700 ){
    greeting="good afternoon"
}else if(time>=1700&&time<2100){
    greeting="good evening"
}