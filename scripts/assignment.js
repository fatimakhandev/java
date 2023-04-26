// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".


// var zakat_percentage = 0.025;
// var user_asset = +prompt ("Asset Value");
// var result = zakat_percentage * user_asset;
// alert("Your Zakat value is " + result);


// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


// var familyMembers = +prompt("Enter Your Family Members");
// var fitrahMethod = prompt("Enter Your Fitrah Method a(Khajoor,500) b(kishmish,800) c(Gandum,1500) d(bajra,2000)");
// var a = 500;
// var b = 800;
// var c = 1500;
// var d = 2000;
// if(fitrahMethod == "a"){
//     var result = familyMembers * a;
//     alert("your fitrah amount is " + result);  
// }
// else if(fitrahMethod == "b"){
//     var result = familyMembers * b;
//     alert("your fitrah amount is " + result);
// }
// else if(fitrahMethod == "c"){
//     var result = familyMembers * c;
//     alert("your fitrah amount is " + result);
// }
// else if(fitrahMethod == "d"){      
//     var result = familyMembers * d;
//     alert("your fitrah amount is " + result);
// }
// else{
//     alert("Try Again")
// }



// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


// var secretNumber = 3;
// var randomNumber = +prompt("Guess Any Number From 1 To 10")
// if (secretNumber == randomNumber) {
//     alert("Congratulations! You Guessed The Secret Number")
// }
// else if (secretNumber <= randomNumber) {
//     alert("Your Value Is High Guess Again")
// }
// else if (secretNumber >= randomNumber) {
//     alert("Your Value Is Low Guess Again")
// } 
// else {
//     alert("Try Again")
// }



// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).


// var username = prompt("Enter your username")
// var username2 = username[0].toUpperCase();
// var username3 = username.slice(1).toLowerCase();
// var username4 = username2 + username3;
// console.log(username4);


// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.


// var contactNumbers = []
// var contactNames = []
// for (var a = 1; a <= 3; a++) {
//     var contactNumber = +prompt("Enter Your Contact Number");
//     var contactName = prompt("Enter Your Contact Name");
//     contactNames.push(contactName);
//     contactNumbers.push(contactNumber);
// }
// for (let a = 0; a < contactNames.length; a++) {
//     console.log(contactNames[a] + ": " + contactNumbers[a]);
// }


// console.log(contactNumbers[a] + ": " + contactNames[a]);
// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


// var products = ["copy", "pencil", "eraser"];
// var userInput = prompt("Enter your product a.copy b.pencil c.eraser");
// var removedItembook = products.splice(0 , 1);
// var totalReamainingItem = products.length;
// console.log(products);
// console.log(removedItembook);
// console.log(totalReamainingItem);


// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// not done
// var nationality = prompt("Enter your nationality");
// var gender = prompt("Enter your gender");
// var age = +prompt("Enter your age");

// if (nationality == "pakistani" || nationality == "indian") {
//     if (gender == "male" || age <= 18) {
//         alert("you are eligible to vote")
//     }
//     else if (gender == "female" || age <= 18) {
//         var maritalStatus = prompt("if you are female tell us that you are married? yes or no")
//         if (maritalStatus == "yes" || age <= 18) {
//             alert("your are eligible to vote")
//         } else {
//             alert("your are not eligible to vote")
//         }
//     }
// }
// else {
//     alert("you are under age")
// }


// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)


// var WorldCupSquad = ["Babar Azam", "Haider Ali", "Asif Ali", "Fakhar Zaman", "Shadab Khan", "Iftikhar Ahmad", "Haris Rauf", "Khushdil Shah", "Mohammad Hasnain", "Mohammad Nawaz", "Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shaheen Shah Afridi", "Shan Masood"];
// console.log(WorldCupSquad);
// var finalTeamPlayers = WorldCupSquad.slice(0, 11);
// console.log(finalTeamPlayers)