var city =prompt("enter your city name" ,"karachi");

if(city .tolowecase()==="karachi"){
    document.write("wellcome to city of lights");
} else{
    document.write("wellcome to "+ city)
}

//GENDER
var gender =prompt("enter your gender( male/ female)");
if(gender.tolowecase()=== "MALE"){
    document.write("GOOD MORNING SIR");

}else if(gender.tolowercase()==="female"){
    document.write("GOOD MORNING MAM")
}
//TRAFIC
var signalcolor =("enter traffic color ");
if(signalcolor.tolowecase()==="red"){
    document.write("must stop")

}else if(signalcolor.toLowerCase()==="yellow"){
    document.write("ready to move")
}else if(signalcolor.toLowerCase()==="green"){
    document.write("move now")
}

//4
var  fuel = prompt("enter remaing fuel");
fuel= Number(fuel);
if(fuel< 0.25){
    document.write("please refill the fuel")
}

//5
var a=5
 if(++a===6)
var b=82
if(b++===83){
    alert("given condition variable is true")

}
//6
var markobtain=252;
var totalmarks=300
var percentage=(markobtain/totalmarks)*100
var grade;
var remarks;

if(percentage >=80){
    grade="A-one";
    remarks="excellent";

}else if(percentage >=70){
 grade="A";
 remarks="good"
}else if (percentage >=  60 ){
    grade="B";
    remarks="improve your self"

}
    console.log("maeksheet");
    console.log("totalmarks"+totalmarks);
    console.log("marks obtained")
    console.log("percentage")
    console.log("grade")
    console.log("remarks")
   
