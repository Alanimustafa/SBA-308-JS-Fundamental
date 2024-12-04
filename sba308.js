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