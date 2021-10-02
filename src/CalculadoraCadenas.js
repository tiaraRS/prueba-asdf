function calcularCadenas(cadena){
    let caracter ="";
    if(cadena.search("\n")>0){
        caracter = cadena.split("\n")[0];
        cadena = cadena.split("\n")[1]
        caracter = caracter[3]
    }   
    let suma = 0;
    let i=0;
    while(i<cadena.length){
        if(!((cadena[i] == "," || cadena[i] == "-" || cadena[i] == caracter) && i%2!=0))
        {         
            let num = parseInt(cadena[i]);
            if(Number.isNaN(num)) return suma;
            suma += num;            
        }        
        i++;
    }
    return suma;
}

export default calcularCadenas;