function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    Moengage.add_unique_user_id(email);

    console.log(" Thank you " + username + " for logging in ")
}
function userdetails()
{
	Moengage.add_first_name("Arnaz");
	Moengage.add_last_name("S");
	Moengage.add_email("arnaz@gmail.com");
	Moengage.add_mobile("+12399999999");
	Moengage.add_user_attribute("Address", ["21","Bangalore","KA"]);
	Moengage.add_unique_user_id("1234");
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
