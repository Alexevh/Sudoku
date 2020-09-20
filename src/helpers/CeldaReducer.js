 export const celdaReducer = ( juego, action='?')=>{

    console.log('me llega de payload ', action.payload)

    if (action.type==='cambiar'){

       
        return juego.map( celda => {
           
            if (celda.columna===action.payload.columna && celda.fila===action.payload.fila){
                console.log('encontre el item es ', celda);
                return {

                    ...celda,
                     valor: action.payload.valor
                }
            } else {
                return celda;
            }
        });

    }

   

    return juego;
}