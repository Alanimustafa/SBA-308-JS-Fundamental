// SBA 308 - JavaScript Fundamentals
//----------------------------------



// **** IMPORTANT : PLEASE NOTE, I CREATED FUNCTIONS FOR SOME PARTS OF THIS JS FILE JUST FOR TESTING PURPOSES.



// Section 1 - JavaScript Total Recall
//------------------------------------




// ------------------------------------ I. Variables & Datatypes --------------------------------------------------------------


// A. Q+A ---------------------------

      function qAnda () {
         //1. How do we assign a value to a variable?
         let abc = 24 ;

         //2. How do we change the value of a variable?
         abc = 15;

         // 3.How do we assign an existing variable to a new variable?
         let def = 25;
         abc = def;

         // 4. Remind me, what are declare, assign, and define?
         let dclr = ""; // A declaration of a string variable.
         dclr = "Mustafa" // Assigning a string value to the variable.
         function dclrFunction () {} //Defining a function named dclrFunction.

         // 5.What is pseudocoding and why should you do it?
         /* Pseudocode is a way used to simplify the code. It is a way to clarify the code to programmers and stakeholders. 
            That helps in planning and teamwork dicussions. */

         // 6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
         /* Understanding and thinking will take longer than programming (coding). It's about 70-80% on thinking versus 20-30% on coding. */
      }

// B. Strings

      function strings () {
         // 1. Create a variable called firstVariable.
         let firstVariable;

         // 2. Assign it the value of the string "Hello World".
            firstVariable = "Hello World"
         
         // 3. Change the value of this variable to some number.
            firstVariable = 12345 ;
         
         // 4. Store the value of firstVariablein a new variable called secondVariable.
            let secondVariable = firstVariable ;

         // 5. Change the value of secondVariableto any string.
            secondVariable = "Mustafa Alani"
            

         // 6. What is the value of firstVariable?
            console.log (firstVariable); // 12345

         // 7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
            let yourName = "Mustafa";
            console.log ("Hello, my name is " + yourName);
      }     


// c. Booleans
      function booleans () {
         const a = 4;
         const b = 53;
         const c = 57;
         const d = 16;
         const e = 'Kevin';

         console.log(a < b);
         console.log(c > d);
         console.log('Name' === 'Name');
         // FOR THE NEXT TWO, USE ONLY && OR ||
         console.log(true || false);
         console.log(false && false && false && false && false || true);
         console.log(false === false)
         console.log(e === 'Kevin');
         console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
         console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
         console.log(48 !== '48');
      }
      // booleans(); 


// D. The farm 
      function theFarm () {
         // 1. Declare a variable animal. Set it to be either "cow" or something else
            let animal = "cow" || "";
            animal = "cat"; // 4. Commit.
         // 2.Write code that will print out "mooooo" if the it is equal to cow.
            if (animal === "cow") {
               console.log("mooooo");
            } 
         
         // 3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
            else {
               console.log("Hey! You're not a cow.");
            }
      }

      // theFarm(); // 4. Commit.


// E. Driver's Ed
      
      function driversID () {
         // 1. // 1. Make a variable that holds a person's age; be semantic
            let personAge ;

         // 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
            personAge = 16 ;
            if (personAge <= 0) {
               console.log("Invalid Age. Please try again.");
            } else if ( personAge >= 16) {
               console.log("Here are the keys!");
            } else {
               console.log("Sorry, you're too young.");
            } 
      }
      // driversID(); 





// ----------------------------------- II. Loops ---------------------------------------------------------

// A. The basics
      function theBasics () {
         // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
            for (let loopOne = 0; loopOne <= 10; loopOne++) {
               console.log(loopOne);
            }

         // 2. Write a loop that will print out all the numbers from 10 up to and including 400
            for (let loopTwo = 0; loopTwo <= 400; loopTwo++) {
               console.log(loopTwo);
            }
         
         // 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
            for (let loopThree = 12; loopThree <= 4000; loopThree += 3) {
               console.log(loopThree);
            }
      }
      // theBasics();


// B. Get even
      function getEven () {
         // 1. Print out the numbers that are within the range of 1 - 100
            for (let num = 0; num <= 100; num++) {
               if (num % 2 === 0) {

               // 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
                  console.log (`${num} <-- Is an even number`);
               } else {
                  console.log (num);
               }
            }
      }
      // getEven();


// C. Give me Five
      function giveMeFive () {
         
            for (let Hi5 = 0; Hi5 <= 100; Hi5++) {

         // 3. For numbers divisible by both three and five, be sure your code prints both messages.
               if ((Hi5 % 3 === 0) && (Hi5 % 5 ===0)) {
                  console.log(`I found the number ${Hi5}. High Five!`);
                  console.log(`I found the number ${Hi5}. Three is a crowd`);
               } 
               
         // 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
               else if (Hi5 % 5 === 0) {
                  console.log(`I found the number ${Hi5}. High Five!`);
               } 
               
         // 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
               else if (Hi5 % 3 === 0) {
                  console.log(`I found the number ${Hi5}. Three is a crowd`);
               } else {
                  console.log (Hi5);
               }
            }
      }
      // giveMeFive();


// D. Savings account
      function savingAccount () {
         // 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
            let bank_account = 0 ;
            let i = 0;
            while (i <= 10) {
               bank_account += i ;
               i++ ;
            }
               // Check your work! Your bank_account should have $55 in it.
               console.log (`Bank Account : ${bank_account}$.`);

         // 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
            while (i <= 100) {
               bank_account += i;
               i++ ;
            }
               // Check your work! Your bank_account should have $10,100 in it.
               console.log (`Bank Account : ${bank_account * 2}$.`);
      }
      // savingAccount();





// ---------------------------------- III. Arrays & Control flow ----------------------------------------------------------------------      

// A. Talk about it:

      // 1. What are the things in an array called?
         /* Elements */ 

      // 2. Do Arrays guarantee those things will be in order?
         /* Yes */

      // 3. What real-life thing could you model with an array?
         /* To-Do list */


// B. Easy Does It
      function easyDoesIt () {
         // 1. Create an array that contains three quotes and store it in a variable called quotes
         qoutes = ["A", 12, true];
         console.log(qoutes);
      }
       // easyDoesIt();


// C. Accessing elements
      function accessingElements () {
         // Given the following array const randomThings = [1, 10, "Hello", true].
            const randomThings = [1, 10, "Hello", true]

         // 1. How do you access the 1st element in the array?
            console.log(randomThings[0]);

         // 2. Change the value of "Hello"to "World"
            randomThings[2] = "World";
            console.log(randomThings);

         // 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
            /* Already checked console.log() */
      }
      // accessingElements();


// D. Change values
      function changeValues () {
         // Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"].
            const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

         // 1. What would you write to access the 3rd element of the array?
            console.log(ourClass[2]);

         // 2. Change the value of "Github" to "Octocat".
            ourClass[4] = "Octocat";
            console.log(ourClass);

         // 3. Add a new element, "Cloud City" to the array.
            ourClass.push("Cloud City");
            console.log(ourClass);
      }      
      // changeValues();


// E. Mix It Up
      function mixItUp () {
         // Given the following array: const myArray = [5, 10, 500, 20].
            const myArray = [5, 10, 500, 20];

         // 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
            myArray.push("Aegon", "Sub Zero");
            console.log(myArray);

         // 2. Remove the 5 from the beginning of the array.
            myArray.shift(0);
            console.log(myArray);

         // 3. Add the string "Bob Marley"to the beginning of the array.
            myArray.unshift("Bob Marley");
            console.log(myArray);

         // 4. Remove the string of your choice from the end of the array.
            myArray.pop();
            console.log(myArray);

         // 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
            myArray.reverse();
            console.log(myArray);
            /* The array has been reversed, all values are still there after the changes I've made. */
      }      
      // mixItUp();


// F. Biggie Smalls
      function biggieSmalls () {
         // Create a variable that contains an integer.
            let myVariable = 44;

         // Write an if ... elsestatement that:
         // 1. console.log()s "little number" if the number is entered is less than 100
            if (myVariable < 100) {
               console.log(`${myVariable} Little Number`);
            } 
            
         // 2. console.log()s big numberif the number is greater than or equal to 100.
            else if (myVariable >= 100) {
               console.log (`${myVariable} Big Number`)
            }
      }  
      // biggieSmalls();    


// G. Monkey in the Middle
      function monkeyInTheMiddle () {
         // Write an if ... else if ... elsestatement:
            let monkeyNumber = 3;

         // 1. console.log()little numberif the number entered is less than 5.
            if (monkeyNumber < 5) {
               console.log(`${monkeyNumber} Little Number`);
            } 
            
         // 2. If the number entered is more than 10, log big number.
            else if (monkeyNumber > 10) {
               console.log(`${monkeyNumber} Big Number`);
            } 
            
         // 3. Otherwise, log "monkey".
            else {
               console.log("Monkey");
            }
      }       
      // monkeyInTheMiddle();


// H. What's in Your Closet?
      function yourCloset () {

         // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
            const kristynsCloset = [
               "left shoe",
               "cowboy boots",
               "right sock",
               "Per Scholas hoodie",
               "green pants",
               "yellow knit hat",
               "marshmallow peeps"
            ];
            
            // Thom's closet is more complicated. Check out this nested data structure!!
            const thomsCloset = [
               [
               // These are Thom's shirts
               "grey button-up",
               "dark grey button-up",
               "light blue button-up",
               "blue button-up",
               ],[
               // These are Thom's pants
               "grey jeans",
               "jeans",
               "PJs"
               ],[
               // Thom's accessories
               "wool mittens",
               "wool scarf",
               "raybans"
               ]
            ];


         // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
            console.log("Kristyn is rocking that "  + kristynsCloset[2] + " today!");

         // 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
            kristynsCloset.splice(6,0,"raybans");
            console.log(kristynsCloset);

         // 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
            kristynsCloset[5] = ("stain knit had");
            console.log(kristynsCloset);

         // 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
            console.log(thomsCloset[0][0]);

         // 5. In the same way, access one item from Thom's pants array.
            console.log(thomsCloset[1][0]);

         // 6. Access one item from Thom's accessories array.
            console.log(thomsCloset[2][1]);
         
         // 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!
            console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

         // 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
            thomsCloset[1][2] = "Footie Pajamas";
            console.log(thomsCloset);
      }
      // yourCloset();





// ---------------------------------- IV. Functions ----------------------------------------------------------------------       

// A. printGreeting

      // Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting? Like so?
         function printGreeting (name) {
            return  "Hello there " + name;
         }
         // console.log(printGreeting("Slimer")) ;

// B. printCool      
      // Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
         function printCool (name) {
            return name + " is cool." ;
         }
         // console.log(printCool ("Captin Reynolds")) ;

// C. calculateCube
      // Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
         function calculateCube (num) {
            let cubCal = num ** 3;
            return "Cube Calculation is " + cubCal ;
         } 
         // console.log(calculateCube(5));          

// D. isVowel 
      // Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
         function isVowel (theString) {
            let aString = "";
            aString = theString.toLowerCase();
            if (aString === "a" || aString === "e" || aString === "i" || aString === "o" || aString === "u") {
               return true ;
            } else {
               return false;
            }
         }
         // console.log(isVowel("D")) ;

// E. getTwoLengths
      // Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
         function getTwoLength (string1, string2) {
            return [string1.length , string2.length] ;
         }
         // console.log (getTwoLength("Hank", "Hippopopalous")) ;

// F. getMultipleLengths
      // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
         function getMultipleLengths (param) {
            result = [];
            for (let i = 0; i < param.length; i++) {
               result.push(param[i].length);
            }
            return result;
         }
         // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); 

// G. maxOfThree
      // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
         function maxOfThree (num1, num2, num3) {
            return Math.max(num1, num2, num3);
         }   
         // console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
      // Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.         
         function printLongestWord (words) {
            let longestWord = words[0];
            for (let i = 1; i < words.length; i++) {
               if (words[i].length > longestWord.length) {
                     longestWord = words[i];
               }
            }
             return longestWord;
         }
         // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

 
         


// ------------------------------------------------------- V - Objects -------------------------------------------------------------------------

// A. Make a user object
      // 1. Create an object called user.
         let user = {};

      // 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
         user  = {
            name: "Mustafa Alani",
            email: "username@email.com",
            age: 46,
            purchased: []
         }
         // console.log(user);

// B. Update the user
      // 1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
         user.email = "usernameUpdated@email.com" ;
         // console.log (user);

      // 2. Our user has had a birthday! Without changing the original userobject, increment the age value using the postfix operator. Hint: age++
         user.age++
         // console.log(user);

// C. Adding keys and values
      // You have decided to add your user's location to the data that you want to collect.
      // 1. Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).
         user.location = "Chicago";
         // console.log(user);

// D. Shopaholic!
      // 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
         user.purchased.push("carbohydrates");
         // console.log (user);

      // 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
         user.purchased.push("peace of mind");
         // console.log (user);

      // 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray
         user.purchased.push("Merino jodhpurs");
         // console.log (user);

      // 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
         // console.log (user.purchased[2]);

// E. Object-within-object
      // 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
         user.friend = {
            name: "Sub Zero",
            age: 40,
            location: "Japan",
            purchased: []
         }
         // console.log(user);   
         
      // 2. Console.log just the friend's name
         // console.log(user.friend.name);

      // 3. Console.log just the friend's location
         // console.log(user.friend.location);

      // 4. CHANGE the friend's age to 55
         user.friend.age = 55.
         // console.log(user);

      // 5. The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
         user.friend.purchased.push("The One Ring");
         // console.log(user);

      // 6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
         user.friend.purchased.push("A latte");
         // console.log(user);

      // 7. Console.log just "A latte" from the friend's purchasedarray.
         // console.log (user.friend.purchased[1]);


// F. Loops
         // 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
           for (let i=0; i < user.purchased.length; i++) {
            // console.log(user.purchased[i]);
           }

         // 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
         for (let i=0; i < user.friend.purchased.length; i++) {
            // console.log(user.friend.purchased[i]);
           }
           
// G. Functions can operate on objects
         // 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
           function updateUser () {
            
         // 2. it should increment the user's age by 1   
            user.age++;

         // 3. make the user's name uppercase
            user.name = user.name.toUpperCase();

            console.log (user);
           }
           // updateUser();

         // The function does not need a return statement, it will merely modify the user object. 
         // 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
           function oldAndLoud (person) {}
            // oldAndLoud(updateUser());      
            
            
// ------------------------------------- Requirements Complete! -------------------------------------------------------------- //

// Hungry for More?

// Cat Combinator

// 1. Mama cat
   /* Define an object called cat1that contains the following properties:
      name
      breed
      age (a number)
      console.log the cat's age
      console.log the cat's breed
   */
   
      
          cat1 = {
            name: "Quees",
            breed: "Russian Blue Cat",
            age: 76
         }
         // console.log(`Mama Cat ${cat1.name} age is ${cat1.age}`);
         // console.log(`Mama Cat ${cat1.name} age is ${cat1.breed}`);
      
      
// 2. Papa cat
   /* Define an object called cat2that also contains the properties:
      name
      breed
      age (a number)
   */
          cat2 = {
            name: "Tom",
            breed: "Aisan Blue Cat",
            age: 86
         }
         //console.log(`Papa Cat ${cat2.name} age is ${cat2.age}`);
         // console.log(`Papa Cat ${cat2.name} age is ${cat2.breed}`);


// 3. Combine Cats!
      // The cats are multiplying!
      // Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

      // Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
         function combineCats (mama, papa) {
            // name is a concatenation of the parents' names
               mama.name = mama.name + papa.name;
               papa.name = papa.name + mama.name;

            // the age is 1
               mama.age = 1;
               papa.age = 1;
            
            // the breed is each of the parents' breeds with a hyphen in between
               mama.breed = mama.breed + "-" + papa.breed;
               papa.breed = papa.breed + "-" + mama.breed;
            // onsole.log (mama);  
            // console.log (papa);
            return { mama, papa}
         }

       //  console.log(combineCats(cat1, cat2));

      // Make it so the combineCats function will return a combination of the two incoming cats
       //  console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }));  


// 4. Cat brain bender
      // Two Levels deep of combineCats
     // console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

      // Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
     
     // console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

      


// ------------------------------------------------------------- SBA 308 End -----------------------------------------------------
           