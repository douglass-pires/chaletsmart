// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDMPwEkqdvh8Pw5INNcDIm37StOrAkI1c",
  authDomain: "chalet-smart.firebaseapp.com",
  databaseURL: "https://chalet-smart.firebaseio.com",
  projectId: "chalet-smart",
  storageBucket: "chalet-smart.appspot.com",
  messagingSenderId: "159172457127",
  appId: "1:159172457127:web:ce253a0e692d65c739e182"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


		// create variable to reference the database
		var database = firebase.database();
		var mail = "";
		var password = "";
		var user1 = "";
    var mailuser1 = "";
		var passuser1 = "";


				database.ref().on("value", function(snap){

				  if(snap.val().user1 == "online" | snap.val().user2 == "online" | snap.val().user3 == "online"){
				    $(location).attr('href', 'dashboard/index.html');
				  }
				  else{
				    $(location).attr('href', '#');
				  }

				});

		database.ref().on("value", function(snap){

		$("#clickButton").on("click", function(){
			mail = $("#mailinput").val().trim();
			password = $("#passwordinput").val().trim();

				if(snap.val().mailuser1 == mail && snap.val().passuser1 == password){

					$(location).attr('href', 'dashboard/index.html');
				  user1 = "online"

					database.ref().update({
						user1: user1
					});

				}else{
          $(location).attr('href', '#');
					return false;
				}

			});



				return false;
		});
