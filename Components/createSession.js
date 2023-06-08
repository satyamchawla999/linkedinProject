
// CLASS FOR CREATING SESSION FOR USER

// IT INCLUDES :-

// ACTION FOR SIGN IN 
// ACTION FOR SIGN UP
// ACTION FOR LOGOUT



module.exports =  class createSession {
    
    constructor(User_info,email) {
        this.User_info = User_info
        this.email = email
    }


    // ACTION FOR SIGN IN 

    signIn(email,password) {
        if(this.User_info[this.email].email == email && this.User_info[this.email].password == password ){

            if(this.User_info[this.email].token == true) {
                console.log(" ");
                console.log(' Already Signed In');
                console.log(" ");
            } else {
                this.User_info[this.email].token = true;
                console.log(" ");
                console.log(' Sign In Successfull');
                console.log(" ");
            }
            
            
        } else {
            console.log(" ");
            console.log(' Invalid Credentials');
            console.log(" ");
        }
    }

    // ACTION FOR SIGN UP

    signUp() {

        if(this.User_info[this.email].token == false){
            this.User_info[this.email].token = true
        } else {
            console.log(" ");
            console.log('Already Signed Up');
            console.log(" ");
            return;
        }
        console.log(" ")

        console.log("*** SIGN UP PAGE ***");
        
        console.log(" Welcome! ",this.User_info[this.email].name);

        console.log(" ")
    }

    // ACTION FOR LOGOUT

    logOut() {
        if(this.User_info[this.email].token == true){
            this.User_info[this.email].token = false;
            console.log(" ");
        
            console.log(" LogOut Successfully !");

            console.log(" ")
        }
    }
}