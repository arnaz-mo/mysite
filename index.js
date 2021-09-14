function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    Moengage.add_unique_user_id(UNIQUE_ID);

    console.log(" Thank you " + username + " for logging in ")
}

function logout(){
    console.log("Logged out!")
    Moengage.destroy_session();
}

function updateUser(){
    Moengage.update_unique_user_id(NEW_UNIQUE_ID);
}

Moengage.add_first_name("Dominick");
Moengage.add_last_name("Cobb");
Moengage.add_email("dom@level5.com");
Moengage.add_mobile("+12399999999");
Moengage.add_user_name("Dominick (Dom) Cobb"); // Full name for user
Moengage.add_gender("M");
Moengage.add_birthday(new Date(1980, 2, 31));

Moengage.track_event("Login Actions", {
    "name": "Arnaz", // string value
    "Password": 0, // numeric value
    "email id": "arnazshaikh@gmail.com", // numeric value
    "date": new Date(2017, 0, 31), // datetime value. Example value represents 31 January, 2017.
    });