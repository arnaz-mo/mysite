function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    Moengage.add_unique_user_id(email);

    console.log(" Thank you " + username + " for logging in ")
}

function logout(){
    console.log("Logged out!")
    Moengage.destroy_session();
}

function updateUser(){
    Moengage.update_unique_user_id(email);
}


function bookNow()
{
	Moengage.track_event("Book_Now",
      {
        "prid": 388303,
        "brand": "Kaya youth",
        "prname": "Face Polishing Scrub |8901088155120",
        "PrMrp": 325,
        "Price": 97,
        "discount": 70,
        "quantity": 1,
        "category": "Dull Skin",
        "category_id": "59754"
       
      });	
}
