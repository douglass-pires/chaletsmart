var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://34.68.39.254:80/consumptionTime/groupedByDate", requestOptions)
.then(response => response.json())
.then(result => {
    

    Object.keys(result).forEach(function(data) {
        
        var tabela = document.getElementById("tBody")
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(inverterStringDeData((data + "").replaceAll("-", "/"))))
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(("R$ " + (result[data] / 60 * 0.18).toFixed(2)).replaceAll(".", ",")))

        tr.appendChild(td1)
        tr.appendChild(td2)
        
        tabela.appendChild(tr)

    })

    for(var i = 0; i<result.length; i++) {
        var tabela = document.getElementById("tBody")
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode("aaa"))
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode("aaa"))

        tr.appendChild(td1)
        tr.appendChild(td2)
        
        tabela.appendChild(tr)


    }
})
.catch(error => console.log('error', error));

function inverterStringDeData(data) {
    console.log(data)
    var ano = data.substring(0, 4);
    var mes = data.substring(5, 7);
    var dia = data.substring(8, 10);
    return dia + "/" + mes + "/" + ano 
}