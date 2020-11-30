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

var quantidadeLuzAcesa = 0;

database.ref().on("value", function(snap) {
  if (snap.val().banheiro == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().cozinha == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().luzchale2 == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().luzchale3 == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().luzchale4 == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().luzchale5 == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().quarto == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().quintal == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().rele == "1") {
      quantidadeLuzAcesa++
  }
  if (snap.val().sala == "1") {
      quantidadeLuzAcesa++
  }        

});

database.ref().on("value", function(snap){
  $("#qtdluzacesatotal").html(quantidadeLuzAcesa)
});

getConsumo()

function getConsumo() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://34.68.39.254:80/consumptionTime/totalSeconds", requestOptions)
    .then(response => response.text())
    .then(result => {
      document.getElementById('consumoTempo').innerHTML = (transformarSegundosParaHoras(result) + " horas").replace(".", ",")
      
      var consumoDiario = "R$ " + getConsumoDiarioEmReais(transformarSegundosParaHoras(result))
      consumoDiario = consumoDiario.replace(".", ",")
      
      document.getElementById('consumoDiario').innerHTML = consumoDiario
    })
    .catch(error => console.log('error', error));
}

function getConsumoDiarioEmReais(horas) {
  return (0.18 * horas).toFixed(2)
}

function transformarSegundosParaHoras(segundos) {
  return (segundos/60/60).toFixed(2);
}
