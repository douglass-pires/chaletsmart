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
var temperatura = "";
var alarme = "";
var luzchale2 = "";
var luzchale3 = "";
var luzchale4 = "";
var luzchale5 = "";

var hostDominio = "http://34.68.39.254:80"

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
        var luz = snap.val().qtdluzacesacoz
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesacoz = somaluzacesa
    } else {
        $("#clickCozinha").addClass("active");
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

    if(cozinha == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_PRINCIPAL_ILUMINACAO_COZINHA', true);
        xhr.send()
        
    } else if(cozinha == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_PRINCIPAL_ILUMINACAO_COZINHA', true);
        xhr.send()
    }
    
    return false;
});


// --------------- QUARTO ---------------
database.ref().on("value", function(snap) {
    if (snap.val().quarto == "0") {
        $("#clickQuarto").removeClass("active");
        var luz = snap.val().qtdluzacesaquarto
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesaquarto = somaluzacesa
    } else {
        $("#clickQuarto").addClass("active");
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

    if(quarto == "1") {
        //Desliga
        console.log("desliga quarto")
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_PRINCIPAL_ILUMINACAO_QUARTO', true);
        xhr.send()
        
    } else if(quarto == "0") {
        console.log("liga quarto")
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_PRINCIPAL_ILUMINACAO_QUARTO', true);
        xhr.send()
    }

    return false;
});

// --------------- RELE ---------------
database.ref().on("value", function(snap) {
    if (snap.val().rele == "0") {
        $("#clickRele").removeClass("active");
        var luz = snap.val().qtdluzacesarele
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesarele = somaluzacesa
    } else {
        $("#clickRele").addClass("active");
    }

});

$("#clickRele").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().rele == "0") {
            rele = "1"
            $("#clickRele").removeClass("active");
            qtdluzacesatotal = (parseInt(qtdluzacesacoz) + parseInt(qtdluzacesaquarto) + parseInt(qtdluzacesarele) + parseInt(qtdluzacesaban) + parseInt(qtdluzacesasala) + parseInt(qtdluzacesaquint))-1
        } else {
            $("#clickRele").addClass("active");
            rele = "0"
        }

    });
    database.ref().update({
        rele: rele,
        qtdluzacesarele:qtdluzacesarele,
        qtdluzacesatotal:qtdluzacesatotal
    });

    if(rele == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_PRINCIPAL_ILUMINACAO_RELE_EXTERNO', true);
        xhr.send()
        
    } else if(rele == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_PRINCIPAL_ILUMINACAO_RELE_EXTERNO', true);
        xhr.send()
    }

    return false;
});

// --------------- TEMPERATURA ---------------
database.ref().on("value", function(snap) {
    if (snap.val().temperatura == "0") {
        $("#clickTemperatura").removeClass("active");
    } else {
        $("#clickTemperatura").addClass("active");
    }

});

$("#clickTemperatura").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().temperatura == "0") {
            temperatura = "1"
            $("#clickTemperatura").removeClass("active");
      } else {
            $("#clickTemperatura").addClass("active");
            temperatura = "0"
        }

    });
    database.ref().update({
        temperatura: temperatura
    });

    return false;
});

// --------------- CHALE 2 ---------------
database.ref().on("value", function(snap) {
    if (snap.val().luzchale2 == "0") {
        $("#clickLuzchale2").removeClass("active");
    } else {
        $("#clickLuzchale2").addClass("active");
    }

});

$("#clickLuzchale2").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().luzchale2 == "0") {
            luzchale2 = "1"
            $("#clickLuzchale2").removeClass("active");
      } else {
            $("#clickLuzchale2").addClass("active");
            luzchale2 = "0"
        }

    });
    database.ref().update({
        luzchale2: luzchale2
    });

    if(luzchale2 == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_2_ILUMINACAO', true);
        xhr.send()
        
    } else if(luzchale2 == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_2_ILUMINACAO', true);
        xhr.send()
    }

    return false;
});

// --------------- CHALE 3 ---------------
database.ref().on("value", function(snap) {
    if (snap.val().luzchale3 == "0") {
        $("#clickLuzchale3").removeClass("active");
    } else {
        $("#clickLuzchale3").addClass("active");
    }

});

$("#clickLuzchale3").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().luzchale3 == "0") {
            luzchale3 = "1"
            $("#clickLuzchale3").removeClass("active");
      } else {
            $("#clickLuzchale3").addClass("active");
            luzchale3 = "0"
        }

    });
    database.ref().update({
        luzchale3: luzchale3
    });

    if(luzchale3 == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_3_ILUMINACAO', true);
        xhr.send()
        
    } else if(luzchale3 == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_3_ILUMINACAO', true);
        xhr.send()
    }

    return false;
});

// --------------- CHALE 4 ---------------
database.ref().on("value", function(snap) {
    if (snap.val().luzchale4 == "0") {
        $("#clickLuzchale4").removeClass("active");
    } else {
        $("#clickLuzchale4").addClass("active");
    }

});

$("#clickLuzchale4").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().luzchale4 == "0") {
            luzchale4 = "1"
            $("#clickLuzchale4").removeClass("active");
      } else {
            $("#clickLuzchale4").addClass("active");
            luzchale4 = "0"
        }

    });
    database.ref().update({
        luzchale4: luzchale4
    });

    if(luzchale4 == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_4_ILUMINACAO', true);
        xhr.send()
        
    } else if(luzchale4 == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_4_ILUMINACAO', true);
        xhr.send()
    }

    return false;
});

// --------------- CHALE 5 ---------------
database.ref().on("value", function(snap) {
    if (snap.val().luzchale5 == "0") {
        $("#clickLuzchale5").removeClass("active");
    } else {
        $("#clickLuzchale5").addClass("active");
    }

});

$("#clickLuzchale5").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().luzchale5 == "0") {
            luzchale5 = "1"
            $("#clickLuzchale5").removeClass("active");
      } else {
            $("#clickLuzchale5").addClass("active");
            luzchale5 = "0"
        }

    });
    database.ref().update({
        luzchale5: luzchale5
    });

    if(luzchale5 == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_5_ILUMINACAO', true);
        xhr.send()
        
    } else if(luzchale5 == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_5_ILUMINACAO', true);
        xhr.send()
    }

    return false;
});

// --------------- ALARME ---------------
database.ref().on("value", function(snap) {
    if (snap.val().alarme == "0") {
        $("#clickAlarme").removeClass("active");
    } else {
        $("#clickAlarme").addClass("active");
    }

});

$("#clickAlarme").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().alarme == "0") {
            alarme = "1"
            $("#clickAlarme").removeClass("active");
      } else {
            $("#clickAlarme").addClass("active");
            alarme = "0"
        }

    });
    database.ref().update({
        alarme: alarme
    });

    return false;
});

// --------------- BANHEIRO ---------------
database.ref().on("value", function(snap) {
    if (snap.val().banheiro == "0") {
        $("#clickBanheiro").removeClass("active");
        var luz = snap.val().qtdluzacesaban
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesaban = somaluzacesa
    } else {
        $("#clickBanheiro").addClass("active");
    }

});

$("#clickBanheiro").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().banheiro == "0") {
            banheiro = "1"
            $("#clickBanheiro").removeClass("active");
            qtdluzacesatotal = (parseInt(qtdluzacesacoz) + parseInt(qtdluzacesaquarto) + parseInt(qtdluzacesarele) + parseInt(qtdluzacesaban) + parseInt(qtdluzacesasala) + parseInt(qtdluzacesaquint))-1

        } else {
            $("#clickBanheiro").addClass("active");
            banheiro = "0"
        }

    });
    database.ref().update({
        banheiro: banheiro,
        qtdluzacesaban:qtdluzacesaban,
        qtdluzacesatotal:qtdluzacesatotal
    });

    if(banheiro == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_PRINCIPAL_ILUMINACAO_BANHEIRO', true);
        xhr.send()
        
    } else if(banheiro == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_PRINCIPAL_ILUMINACAO_BANHEIRO', true);
        xhr.send()
    }

    return false;
});

// --------------- SALA ---------------
database.ref().on("value", function(snap) {
    if (snap.val().sala == "0") {
        $("#clickSala").removeClass("active");
        var luz = snap.val().qtdluzacesasala
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesasala = somaluzacesa
    } else {
        $("#clickSala").addClass("active");
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

    if(sala == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_PRINCIPAL_ILUMINACAO_SALA', true);
        xhr.send()
        
    } else if(sala == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_PRINCIPAL_ILUMINACAO_SALA', true);
        xhr.send()
    }

    return false;
});

// --------------- QUINTAL ---------------
database.ref().on("value", function(snap) {
    if (snap.val().quintal == "0") {
        $("#clickQuintal").removeClass("active");
        var luz = snap.val().qtdluzacesaquint
        var somaluzacesa = parseInt(luz) + 1
        qtdluzacesaquint = somaluzacesa
    } else {
        $("#clickQuintal").addClass("active");
    }

});

$("#clickQuintal").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().quintal == "0") {
            quintal = "1"
            $("#clickQuintal").removeClass("active");
            qtdluzacesatotal = (parseInt(qtdluzacesacoz) + parseInt(qtdluzacesaquarto) + parseInt(qtdluzacesarele) + parseInt(qtdluzacesaban) + parseInt(qtdluzacesasala) + parseInt(qtdluzacesaquint))-1
        } else {
            $("#clickQuintal").addClass("active");
            quintal = "0"
        }

    });
    database.ref().update({
        quintal: quintal,
        qtdluzacesaquint:qtdluzacesaquint,
        qtdluzacesatotal:qtdluzacesatotal
    });

    if(quintal == "1") {
        //Desliga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOff/CHALET_PRINCIPAL_ILUMINACAO_QUINTAL', true);
        xhr.send()
        
    } else if(quintal == "0") {
        //Liga
        const xhr = new XMLHttpRequest();
        xhr.open('POST', hostDominio + '/consumptionTime/turnOn/CHALET_PRINCIPAL_ILUMINACAO_QUINTAL', true);
        xhr.send()
    }

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
            alarme = "1"
            temperatura = "1"
            luzchale2 = "1"
            luzchale3 = "1"
            luzchale4 = "1"
            luzchale5 = "1"

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
            alarme = "0"
            temperatura = "0"
            luzchale2 = "0"
            luzchale3 = "0"
            luzchale4 = "0"
            luzchale5 = "0"
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
        sala : sala,
        alarme : alarme,
        luzchale2 : luzchale2,
        luzchale3 : luzchale3,
        luzchale4 : luzchale4,
        luzchale5 : luzchale5,
        temperatura : temperatura
    });

    return false;
});



// --------------- PORTAO ---------------
database.ref().on("value", function(snap) {
    if (snap.val().portao == "0") {
        $("#clickPortao").removeClass("active");
    } else {
        $("#clickPortao").addClass("active");
    }

});

$("#clickPortao").on("click", function() {
    database.ref().on("value", function(snap) {
        if (snap.val().portao == "0") {
            portao = "1"
            $("#clickPortao").removeClass("active");
        } else {
            $("#clickPortao").addClass("active");
            portao = "0"
        }

    });
    database.ref().update({
        portao: portao
    });

    return false;
});




database.ref().on("value", function(snap) {
    $("#display").html(snap.val().name);
});
