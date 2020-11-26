var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://localhost:8080/consumptionTime", requestOptions)
.then(response => response.json())
.then(result => {
    for(var i = 0; i<result.length; i++) {
        console.log(result[i].initialDateTime)

        var tabela = document.getElementById("tBody")
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(getTwoFirstWords(formatString(result[i].consumptionType))))
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(formatConsumptionType(result[i].consumptionType)))
        var td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(transformArrayDateToString(result[i].initialDateTime)))
        var td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(transformArrayDateToString(result[i].finalDateTime)))
        var td5 = document.createElement("td");
        td5.appendChild(document.createTextNode(((result[i].totalTime/60).toFixed(2) + " horas").replace(".", ",")))

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)

        tabela.appendChild(tr)


    }
})
.catch(error => console.log('error', error));

function transformArrayDateToString(array) {
    var dateString = "";
    dateString += transformToTwoDigits(array[2]) + "/" + transformToTwoDigits(array[1]) + "/" + array[0] + " - " + transformToTwoDigits(array[3]) 
        + ":" + transformToTwoDigits(array[4]) + ":" + transformToTwoDigits(array[5]);
    return dateString;
}

function transformToTwoDigits(number) {
    var numberString = "" + number
    return numberString.length > 1 ? numberString : "0"+ numberString
}

function getTempoConsumido(dataFinal, dataInicial) {
    var horasDecimalFinal = dataFinal[3] * 60 
}

function getTwoFirstWords(string) {
    var vetorStrings = string.split(" ")
    return vetorStrings[0] + " " + vetorStrings[1]
}

function formatString(string) {
    return titleize(string.replaceAll("_", " ").toLowerCase())
}

function formatConsumptionType(string) {
    var vetorStrings = titleize(string.replaceAll("_", " ").toLowerCase()).split(" ")
    
    var stringFinal = ""

    for(var i=2; i<vetorStrings.length; i++) {
        stringFinal += vetorStrings[i] + " "
    }

    return stringFinal

}

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}