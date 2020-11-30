var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://localhost:8080/alarm", requestOptions)
.then(response => response.json())
.then(result => {
    for(var i = 0; i<result.length; i++) {
        console.log(result[i].initialDateTime)

        var tabela = document.getElementById("tBody")
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(result[i].date[2] + "/" + result[i].date[1] + "/" + result[i].date[0]))
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(result[i].date[3] + ":" + result[i].date[4] + ":" + result[i].date[5]))
        
        tr.appendChild(td1)
        tr.appendChild(td2)

        tabela.appendChild(tr)


    }
})
.catch(error => console.log('error', error));