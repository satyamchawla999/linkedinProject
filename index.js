// MAIN FILE

// IT INCLUDE :-

// SIGN UP BLOCK
// COMPOSITION FUNCTION

    // SECOND MENU 
    // SWITCH CASE FOR SECOND MENU

        // SIGN IN BLOCK
        // PROFILE VIEW AND PROFILE SET UP
            // FOR CHOICE OF PROFILE SETUP 

        // LOGOUT CASE
        // SKILL AND CREDENTIAL SECTION
            // FOR CHOICE OF UPDATING SKILL SECTION

        // POST DISPLAY AND ADD CASE
    
    // CHOICE TO EXIT OR CONTINUE FROM SUB MENU

// CHOICE TO EXIT OR CONTINUE FOR MAIN MENU



// REQUIRE USER CLASS
const User = require('./Components/User.js')
const prompt = require('prompt-sync')();

console.log("*******************************")
console.log("***** WELCOME TO LINKEDIN *****")
console.log("*******************************")

console.log(" ")
console.log(" ")

let x = true;

do {


    // SIGN UP BLOCK
    console.log("-------------------------------");

    console.log("Enter Credential For Sign Up");
    console.log(" ")
    const name1 = prompt('Enter your name: ');
    const email1 = prompt('Enter your Email: ');
    const password1 = prompt('Enter Password: ');
    const Confirm_password = prompt('Please Confirm Confirm Password: ');

    const obj = new User(name1, email1, password1, Confirm_password);
    const obj2 = new User("satyam", "satyam@gmail.com", "123", "123");

    console.log("-------------------------------");

    // COMPOSITION FUNCTION

    const furtherChoice = obj => {

        let x = true;
        do {

            // SECOND MENU 

            console.log("-------------------------------");

            console.log(" ");
            console.log("PRESS 1 FOR SIGN IN : ");
            console.log("PRESS 2 FOR PROFILE : ");
            console.log("PRESS 3 FOR LOGOUT : ");
            console.log("PRESS 4 FOR SKILL : ");
            console.log("PRESS 5 FOR POST : ");
            console.log("PRESS 6 FOR CONNECTIONS : ");

            console.log("-------------------------------");

            const choice = prompt('Enter : ');

            // SWITCH CASE FOR SECOND MENU

            switch (choice) {

                // SIGN IN BLOCK

                case "1":
                    console.log("-------------------------------");

                    console.log("ENTER YOUR CREDENTIALS")
                    console.log(" ")
                    const email = prompt('Enter your email: ');
                    const password = prompt('Enter your password: ');
                    obj.signIn(email, password);

                    console.log("-------------------------------");
                    break;

                // PROFILE VIEW AND PROFILE SET UP

                case "2":
                    console.log("-------------------------------");

                    obj.profile();

                    console.log("-------------------------------");
                    console.log(" ")
                    console.log("For profile setup press 1 press 2 for not");

                    const c = prompt('Enter: ');

                    // FOR CHOICE OF PROFILE SETUP 

                    switch (c) {
                        case "1":
                            console.log("-------------------------------");

                            console.log(" ")
                            const age = prompt('Enter your age: ');
                            const gender = prompt('Enter your gender: ');
                            const qualification = prompt('Enter qualification: ');
                            const organisation = prompt('Enter your organisation: ');
                            obj.profileSetUp(age, gender, qualification, organisation);

                            console.log("-------------------------------");
                            break;

                        case "2":
                            break;

                        default:
                            console.log("Invalid Choice");
                    }

                    break;

                // LOGOUT CASE

                case "3":
                    console.log("-------------------------------");
                    obj.logOut();
                    console.log("-------------------------------");
                    break;

                // SKILL AND CREDENTIAL SECTION

                case "4":
                    console.log("-------------------------------");
                    console.log(" ")
                    console.log("Skill and Certifications: ")
                    console.log(" ")
                    

                    obj.skill();

                    console.log("-------------------------------");
                    

                    break;

                // POST DISPLAY AND ADD CASE

                case "5":
                    console.log("-------------------------------");
                    console.log(" ")
                    console.log("ALL POSTS")
                    console.log(" ")

                    obj.post();
                    console.log("-------------------------------");
                    break;

                case "6":
                    console.log("-------------------------------");
                    console.log(" ")
                    console.log("ALL CONNECTIONS")
                    console.log(" ")

                    obj.connection();
                    console.log("-------------------------------");
                    break;


                default:
                    console.log('****** IVALID CHOICE ******')
            }

            // CHOICE TO EXIT OR CONTINUE FROM SUB MENU
            console.log("-------------------------------");
            console.log(" FOR CONTINUE PRESS 1 AND FOR MAIN MENU PRESS 2 ");
            const choice1 = prompt('Enter : ');
            if (choice1 == "1") {
                x = true;
            } else {
                x = false;
            }

        } while (x != false);

    }

    // COMPOSITION FUNCTION CALLING

    furtherChoice(obj); // composition

    // CHOICE TO EXIT OR CONTINUE FOR MAIN MENU
    console.log("-------------------------------");
    console.log(" FOR SIGN UP PRESS 1 AND FOR EXIT PRESS 2 ");
    const choice1 = prompt('Enter : ');
    if (choice1 == "1") {
        x = true
    } else {
        x = false
    }


} while (x != false);




