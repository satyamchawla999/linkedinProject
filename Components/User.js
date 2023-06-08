
// IMPORTING CREATESESSION CLASS
const createSession = require('./createSession.js')

const prompt = require('prompt-sync')();

// MAIN USE CLASS
// CONTAIN ALL INFO OF USER LIKE : CREDENTIALS , CONNECTIONS , POSTS

module.exports = class User extends createSession {

    // DATA BASE

    static User_info = [];
    static User_email = [];
    static User_name = [];

    // CONSTRUCTOR FOR SETTING UP USER

    constructor(name, email, password, confirmPassword) {

        super(User.User_info, email);

        // AUTHENTICATION CHECKING 

        if (password != confirmPassword) {
            console.log(" ");
            console.log('Password Not Match');
            console.log(" ");
            return;
        }

        // DATABASE FOR STORING ONLY EMAILS OF USERS

        const found = User.User_email.includes(email);

        // TO CHECK IF USER IS ALREADY PRESENT OR NOT

        if (found == true) {
            console.log(" ");
            console.log('User Already Present');
            console.log(" ");
            return;
        }

        // DATABASE FOR STORING ONLY EMAILS OF USERS
        User.User_email.push(email);
        User.User_name.push(name);

        // STORING CREDENTIALS

        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.token = false;

        // MAKEING OBJECTS

        this.info = {
            name: this.name,
            age: '',
            gender: '',
            qualification: '',
            organization: '',
            cUrl: "",
            cId: "",
            skill: "",
            post: [],
            connection: [],
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            token: this.token,
        }

        // ADDING INFO TO DATABASE 

        User.User_info[this.email] = this.info;

        // SIGN UP AFTER SUCCESSFULL LOGIN

        this.signUp();

    }

    // PROFILE PAGE

    profile() {

        if (User.User_info[this.email].token == true) {
            console.log("*** User Profile Page ***");
            console.log("Name ", User.User_info[this.email].name);
            console.log("Email ", User.User_info[this.email].email);
            console.log("age ", User.User_info[this.email].age);
            console.log("gender ", User.User_info[this.email].gender);
            console.log("qualification ", User.User_info[this.email].qualification);
            console.log("organisation ", User.User_info[this.email].organisation);
            console.log(" ")
        } else {
            console.log(" ");
            console.log(" Please Sign In! ");
            console.log(" ");
        }

    }

    // FOR SETTING - UP PROFILE

    profileSetUp(age, gender, qualification, organisation) {
        if (User.User_info[this.email].token == true) {

            User.User_info[this.email].age = age;
            User.User_info[this.email].gender = gender;
            User.User_info[this.email].qualification = qualification;
            User.User_info[this.email].organisation = organisation;

            console.log(" ")
            console.log("*** Profile Set Up Successfull ***");


        } else {
            console.log(" ");
            console.log(" Please Sign In! ");
            console.log(" ");
        }
    }

    // FOR SKILL DISPLAY 

    skill() {
        console.log("skill : ", User.User_info[this.email].skill);
        console.log("Certification Id : ", User.User_info[this.email].cId);
        console.log("Certification Url : ", User.User_info[this.email].cUrl);

        console.log(" ")
                    
        console.log("For skill and certification setup press 1 press 2 for not");

        const c1 = prompt('Enter: ');

        if (c1 == 1) {
            console.log("-------------------------------");
            console.log(" ")
            const skill = prompt('Enter your skill: ');
            const cId = prompt('Enter your certification Id: ');
            const cUrl = prompt('Enter certification URL: ');

            this.skillSection(cId, cUrl, skill);
            console.log("-------------------------------");
        } else {
            return;
        }
    }

    // FOR SET UP CERTIFICATIONS AND SKILLS

    skillSection(cUrl, cId, skill) {

        if (User.User_info[this.email].token == true) {

            User.User_info[this.email].cUrl = cUrl;
            User.User_info[this.email].cId = cId;
            User.User_info[this.email].skill = skill;

            console.log(" ")
            console.log("*** Set Up Successfull ***");


        } else {
            console.log(" ");
            console.log(" Please Sign In! ");
            console.log(" ");
        }

    }

    // FOR DISPLAY AND ADDING POSTS

    post() {
        let i = 1;
        for (let posts of User.User_info[this.email].post) {
            console.log(`post ${i} - ${posts}`);
            console.log(" ");
            i++;
        }

        const c = prompt('For add post press 1 for not press 2 : ');
        if (c == 1) {
            const p = prompt("Add Post : ");
            User.User_info[this.email].post.push(p);
            console.log("Posted Successfully ! ");
            console.log(" ");
        } else {
            return;
        }
    }

    // FOR DISPLAYING CONNECTIONS AND ADDING CONNECTIONS

    connection() {

        let i = 1;
        for (let connection of User.User_info[this.email].connection) {
            console.log(`CONNECTION ${i} - ${connection}`);
            console.log(" ");
            i++;
        }

        const c = prompt('For add connection press 1 for not press 2 : ');
        if (c == 1) {
            const p = prompt("Enter name of user to connect : ");

            const found = User.User_name.includes(p);

            if (found == true) {

                console.log(" ");
                User.User_info[this.email].connection.push(p);
                console.log("Connection Successfully ! ");
                console.log(" ");

            } else {

                console.log(" ");
                console.log("User Not Exists!");
                console.log(" ");

            }

            console.log(" ");

        } else {
            return;
        }
    }
}
