// SBA 308 - JavaScript Fundamentals
//----------------------------------



// **** IMPORTANT : PLEASE NOTE, I CREATED FUNCTIONS FOR SOME PARTS OF THIS JS FILE JUST FOR TESTING PURPOSES.



// Section 1 - JavaScript Total Recall
//------------------------------------



// I. Variables & Datatypes
//-------------------------


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

      theFarm(); // 4. Commit.


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
      driversID();