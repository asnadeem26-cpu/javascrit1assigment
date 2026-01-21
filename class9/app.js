//  var firstName = prompt("Enter your first name:");
//   var lastName = prompt("Enter your last name:");

//   var fullName = firstName + " " + lastName;

//   document.write("Hello, " + fullName + "!");
// q2
// var mobile = prompt("Enter your favorite mobile phone model:");

//   document.write("My favorite phone is: " + mobile + "<br>");
//   document.write("Length of string: " + mobile.length);
// q3
// var word = "Pakistani";
//   var index = word.indexOf("n");

//   document.write("String: " + word + "<br>");
//   document.write("Index of 'n': " + index);


//  var text = "Hello World";
//   var result = text.lastIndexOf("l");

//   document.write("String: " + text + "<br>");
//   document.write("Last index of 'l': " + result);
//   var text = "Pakistani";
//   var char = text.charAt(3);

//   document.write("String: " + text + "<br>");
//   document.write("Character at index 3: " + char);
//   var firstName = prompt("Enter your first name");
//   var lastName = prompt("Enter your last name");

//   var fullName = firstName.concat(" ", lastName);

//   document.write("Hello " + fullName);
  //q7
//   var text ="Situated about 150 kilometers inland from Karachi, Hyderabad is connected to Pakistan's largest city by both a direct railway and the M-9 motorway. The city's origins trace back to a limestone ridge known as Ganjo Takkar or Bald Hill, on the eastern bank of the Indus River."
//   document.write(text)
//   document.write("<h1> REPLACMENT</h1>")
//   var newtext=text.replace(/Hyderabad/g +"islamabad")
//   document.write(newtext)
  //q8
//    var message = "Ali and Sami are best friends. They play cricket and football together.";
//   var result = message.replace(/and/g, "&");

//   document.write("Message: " + message + "<br><br>");
//   document.write("After replacement: " + result);
//q9
//  var str = "472";
//   var num = Number(str);

//   document.write("Value: " + str + "<br>");
//   document.write("Type: " + typeof str + "<br><br>");

//   document.write("Value: " + num + "<br>");
//   document.write("Type: " + typeof num);
//q10
// var userInput = prompt("Enter a string:");
// var upperCaseInput = userInput.toUpperCase();
// console.log("User input:", userInput);
// console.log("Upper case:", upperCaseInput);
//q11
// Get input from the user
// var userInput = prompt("Enter a sentence:");

// Convert to lowercase and split into an array of words
// var words = userInput.toLowerCase().split(' ');
// for (var i = 0; i < words.length; i++) {
//   // Get the first letter and capitalize it
//   var firstLetter = words[i].charAt(0).toUpperCase();

//   var restOfWord = words[i].slice(1);


//   words[i] = firstLetter + restOfWord;
// }

// //q12
// var num = 35.36;
// var strNum = num.toString();

// // Using replace()
// var result = strNum.replace(/\./g, '');

//q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

// var found = false;
// var lowerCaseInput = userInput.toLowerCase();
// var index = -1; // To store the index if found

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === lowerCaseInput) {
//     found = true;
//     index = i;
//     break; // Exit the loop once the item is found
//   }
// }

// if (found) {
//   alert(lowerCaseInput + " is available at index " + index + " in our bakery.");
// } else {
//   alert("We are sorry. " + lowerCaseInput + " is not available in our bakery.");
// }
