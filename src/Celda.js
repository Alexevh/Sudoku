import React, { useState } from 'react'

export const Celda = ({celda}) => {

  const  {indice, columna, fila, valor, seleccionada, error } = celda;

  const [datos, setDatos] = useState();

       /* recibo la posicion en la grilla y el valor */
       const cambiarValor = ( valor)=>{

        setDatos({
            ...datos,
            valor: valor
        })
    }

    return (
        <>
            <td key={`${columna}-${fila}`} 
        
            > {valor} </td>
        </>
    )
}
