function Representar() {
    let vl_iNumero = parseInt(document.getElementById("Numero").value);
    let vl_iBase = parseInt(document.getElementById("Base").value);
    let vl_iCociente = vl_iNumero;
    let vl_oTabla = document.getElementById("Contenido");
    vl_oTabla.innerHTML ="";
    if (isNaN(vl_iNumero) || isNaN(vl_iBase)) {
        alert("Por favor ingrese un número valido")
    } else {
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(parseInt(vl_iCociente) +":" +vl_iBase );
        celda.appendChild(textoCelda);   
        hilera.appendChild(celda);     
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(parseInt(vl_iCociente / vl_iBase ) );
        celda.appendChild(textoCelda);     
        hilera.appendChild(celda);   
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(parseInt(vl_iCociente % vl_iBase ) );
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        vl_oTabla.appendChild(hilera);         
                            
        while (parseInt(vl_iCociente / vl_iBase) > 1) {
            vl_iCociente =vl_iCociente / vl_iBase ;
            var hilera = document.createElement("tr");            
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(parseInt(vl_iCociente) +":" +vl_iBase );
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);       
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(parseInt(vl_iCociente / 4));
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);     
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(parseInt(vl_iCociente % vl_iBase ));
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);     
            vl_oTabla.appendChild(hilera);            
        }        
    }
}