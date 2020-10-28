
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
var cozinha = "";
var quarto = "";
var rele = "";
var banheiro = "";
var geral = "";
var sala = "";
var quintal = "";
var portao = "";
var horariooff = "";
var horarioon = "";
var qtdluzacesacoz = "0";
var qtdluzacesaquarto = "0";
var qtdluzacesaquint = "0";
var qtdluzacesasala = "0";
var qtdluzacesaban = "0";
var qtdluzacesarele = "0";
var horariototal = "";
var horariogeral = "";
var qtdluzacesatotal = "0";
var user1 = "";

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

// --------------- COZINHA ---------------

database.ref().on("value", function(snap) {
    if (snap.val().cozinha == "0") {
        $("#clickCozinha").removeClass("active");
        $("#acendeCozinha").removeClass("acende-cozinha");
        var luz = snap.val().qtdluzacesacoz
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesacoz = somaluzacesa
    } else {
        $("#clickCozinha").addClass("active");
        $("#acendeCozinha").addClass("acende-cozinha");
    }

});

$("#clickCozinha").on("click", function() {
    database.ref().on("value", function(snap) {


      var data = new Date();
      var hora    = data.getHours();          // 0-23
      var min     = data.getMinutes();        // 0-59
      var tz      = data.getTimezoneOffset(); // em minutos

        if (snap.val().cozinha == "0") {
            cozinha = "1"
            $("#clickCozinha").removeClass("active");
            horarioon = min
            qtdluzacesatotal = (parseInt(qtdluzacesacoz) + parseInt(qtdluzacesaquarto) + parseInt(qtdluzacesarele) + parseInt(qtdluzacesaban) + parseInt(qtdluzacesasala) + parseInt(qtdluzacesaquint))-1

        } else {
            $("#clickCozinha").addClass("active");
            cozinha = "0"

    //        horariooff = min
    //       var subtraihorario = parseInt(horariooff)-parseInt(horarioon)
     //      var totalhora = snap.val().horariototal
      //      horariototal = subtraihorario
      //      var somatotal = subtraihorario+parseInt(totalhora)
      //      horariogeral = horariototal+subtraihorario
        }

    });
    database.ref().update({
        cozinha: cozinha,
        horariooff:horariooff,
        horarioon:horarioon,
        qtdluzacesacoz:qtdluzacesacoz,
        horariototal:horariototal,
        horariogeral:horariogeral,
        qtdluzacesatotal:qtdluzacesatotal

    });

    return false;
});


// --------------- QUARTO ---------------

database.ref().on("value", function(snap) {
    if (snap.val().quarto == "0") {
        $("#acendeQuarto").removeClass("acende-quarto");
        $("#clickQuarto").removeClass("active");
        var luz = snap.val().qtdluzacesaquarto
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesaquarto = somaluzacesa

    } else {
        $("#clickQuarto").addClass("active");
        $("#acendeQuarto").addClass("acende-quarto");
    }

});

$("#clickQuarto").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().quarto == "0") {
            quarto = "1"
            $("#clickQuarto").removeClass("active");
            qtdluzacesatotal = (parseInt(qtdluzacesacoz) + parseInt(qtdluzacesaquarto) + parseInt(qtdluzacesarele) + parseInt(qtdluzacesaban) + parseInt(qtdluzacesasala) + parseInt(qtdluzacesaquint))-1
        } else {
            $("#clickQuarto").addClass("active");
            quarto = "0"
        }

    });
    database.ref().update({
        quarto: quarto,
        qtdluzacesaquarto:qtdluzacesaquarto,
        qtdluzacesatotal:qtdluzacesatotal
    });

    return false;
});

// --------------- SALA ---------------
database.ref().on("value", function(snap) {
    if (snap.val().sala == "0") {
        $("#clickSala").removeClass("active");
        $("#acendeSala").removeClass("acende-sala");
        var luz = snap.val().qtdluzacesasala
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesasala = somaluzacesa
    } else {
        $("#clickSala").addClass("active");
        $("#acendeSala").addClass("acende-sala");
    }

});

$("#clickSala").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().sala == "0") {
            sala = "1"
            $("#clickSala").removeClass("active");
            qtdluzacesatotal = (parseInt(qtdluzacesacoz) + parseInt(qtdluzacesaquarto) + parseInt(qtdluzacesarele) + parseInt(qtdluzacesaban) + parseInt(qtdluzacesasala) + parseInt(qtdluzacesaquint))-1

        } else {
            $("#clickSala").addClass("active");
            sala = "0"
        }

    });
    database.ref().update({
        sala: sala,
        qtdluzacesasala:qtdluzacesasala,
        qtdluzacesatotal:qtdluzacesatotal
    });

    return false;
});

// --------------- CHAVE GERAL ---------------
database.ref().on("value", function(snap) {
    if (snap.val().geral == "0") {
        $("#clickGeral").removeClass("active");
    } else {
        $("#clickGeral").addClass("active");
    }

});

$("#clickGeral").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().geral == "0") {
            geral = "1"
            quintal = "1"
            portao = "1"
            sala = "1"
            banheiro = "1"
            rele = "1"
            cozinha = "1"
            quarto = "1"

            $("#clickGeral").removeClass("active");

        } else {
            $("#clickGeral").addClass("active");
            geral = "0"
            quintal = "0"
            portao = "0"
            sala = "0"
            banheiro = "0"
            rele = "0"
            cozinha = "0"
            quarto = "0"
        }

    });
    database.ref().update({
        geral: geral,
        quintal: quintal,
        portao : portao,
        quarto : quarto,
        cozinha : cozinha,
        rele : rele,
        banheiro : banheiro,
        sala : sala
    });

    return false;
});

database.ref().on("value", function(snap) {
    $("#display").html(snap.val().name);
});
