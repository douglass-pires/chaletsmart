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
var temp = "";
var qtdluzacesatotal = "";
var user1 = "";
var nameuser1 = "";

// -------------- SESSÃO USUÁRIO ---------------
database.ref().on("value", function(snap){

 $("#clickSair").on("click", function(){
    user1 = "offline",
    $(location).attr('href', '../index.html');

   database.ref().update({
     user1: user1
   });
});

  if(snap.val().user1 == "online" | snap.val().user2 == "online" | snap.val().user3 == "online"){
    $(location).attr('href', '#');
  }
  else{
    $(location).attr('href', '../index.html');
  }

});


// TEMPERATURA
database.ref().on("value", function(snap){
  $("#temp").html((snap.val().temp)+"º")
});

// QUANTIDADE LUZ ACESA
database.ref().on("value", function(snap){
  $("#qtdluzacesatotal").html((snap.val().qtdluzacesatotal))
});
