/* voy a recibir una matriz multidimensional de numeros y devuelvo una matriz multidimensional de celdas*/
export const converirGrilla = (vector)=> {

    let resultado =[];

    for(let i=0; i<vector.length; i++) {
        //Bucle que recorre el array que está en la posición i
        for(let j=0; j<vector.length; j++) {

            const celda = {
                indice: i,
                columna: j,
                fila: i, 
                valor: vector[j][i], 
                seleccionada: false,
                error: false
            }
            
            resultado.push(celda);

         

         
        }
    }

    

        

    return  resultado;
}




