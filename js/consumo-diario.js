var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://localhost:8080/consumptionTime/groupedByDate", requestOptions)
.then(response => response.json())
.then(result => {
    console.log(result)

    Object.keys(result).forEach(function(data) {
        console.log(result[data])

        var tabela = document.getElementById("tBody")
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode((data + "").replaceAll("-", "/").split('').reverse().join('')))
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