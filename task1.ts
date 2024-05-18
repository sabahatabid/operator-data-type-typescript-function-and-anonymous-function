// 1. Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles

//Ques 1
// Create a variable representing distance in miles
// let miles = 130;

 // Conversion factor from miles to kilometers
// const conversionFactor = 1.60934;

 // Calculate equivalent distance in kilometers
// let kilometers = miles * conversionFactor;
// console.log("te distance "+miles+"mile is equal to "
// +kilometers+" kilometer.");

// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.

//Ques 2
// import inquirer from 'inquirer';


// const enteredNum = await inquirer.prompt({
//     name: "Num",
//     type: "number",
//     message: "Enter the first number:"
// });

// let dynamnicNum= 21;
// if (dynamnicNum > enteredNum.Num){
//     console.log("The number you have entered is "+enteredNum.Num+" which is LESS than the dynamic number "+dynamnicNum);
// }else if(dynamnicNum < enteredNum.Num){
//     console.log("The number you have entered is "+enteredNum.Num+" which is GREATER than the dynamic number "+dynamnicNum);
// }else{
//     console.log("The number you have entered is "+enteredNum.Num+" which is EQUAL to the dynamic number "+dynamnicNum);
// }

// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// responce

//Ques 3
//  import inquirer from 'inquirer'; 
    
//      const  name = await inquirer.prompt({
//          name: "name",
//          type: "input",
//          message: "Enter a name:"
//      });
//      switch (name.name) {
//          case "manahil":
//              console.log(name.name+" is my friend");
//              break;
//          case "saba":
//              console.log(name.name+" is my friend");
//             break;
//         case "hafsa":        
//          console.log(name.name+" is my friend");
//              break;
//          default:
//             console.log(name.name+" is my friend");
//              break;
//    }

// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments

//Ques 4
//Set up two different variables with different values.

// let num1 = 10;
// let num2 = 20;
 // Call a function with these variables as arguments and output the result using console.log.
// function MultiplyNumbers(var1:number, var2:number) {
//         console.log("The product of number "+var1+ " and " +var2+ "is : "+(var1*var2));
//     }

// MultiplyNumbers(num1,num2);
// // Create a second call to the function with two more numbers as arguments.
// let num3 = 40;
// let num4= 15;
// MultiplyNumbers(num3,num4);