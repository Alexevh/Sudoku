import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import { Celda } from './Celda';
import { Grilla } from './Grilla';
import { converirGrilla } from './helpers/Utiles';
import './index.css';
import { celdaReducer } from './helpers/CeldaReducer';

export const Tablero = () => {

    /* Este tablero inicial contiene los datos de inicio, en teoria podriamos tener un metodo que genera aleatoriamente un tablero */
    const tableroInicial = [
        [0, 0, 0, 4, 0, 7, 0, 0, 0],
        [9, 0, 1, 6, 8, 3, 0, 0, 0],
        [0, 2, 0, 0, 0, 5, 0, 7, 0],
        [0, 0, 0, 8, 0, 1, 0, 5, 0],
        [0, 1, 0, 0, 0, 9, 7, 6, 2],
        [7, 3, 4, 0, 5, 6, 0, 0, 0],
        [1, 0, 0, 7, 0, 4, 0, 8, 3],
        [3, 4, 7, 5, 9, 8, 1, 2, 6],
        [0, 5, 6, 1, 0, 0, 0, 0, 0],
    ];

    /* Esta variable es una referencia al sector que actualmente esta en foco, un sector activo es una matriz de 3x3 que es un subconjunto
    del tablero principal*/
    let sectorACtivo = [];


    let grillaRef = useRef();

    useEffect(() => {

        activarSector(1);

    });


    /* Este metodo tiene por objetivo detectar que celda se selecciono y poder operar con esto
    La idea es que se llame a cambiar el sector, en este momento solo hay un metodo de prueba
    por que no consegui hacer andar la funcion referenciada en el hijo (celda)
    */
    const handleClick = (evento) => {

       // grillaRef.current.grillaRef.n.cambiarValor([0, 1], 5);

    }


    /* ConvertirGrilla es un helper que recibe una matriz de 9x9 y retorna un conjunto de celdas */
    const juego = converirGrilla(tableroInicial);

    /* Utilizo un reducer para poder disparar cambios en el conjunto de celdas, la idea es poder cambiar cosas como el atributo
    selected, el valor, etc */
    const [conjuntoCeldas, dispatch] = useReducer(celdaReducer, juego);



    const handleCambiar = (nuevoDato) => {
        console.log('llamo al dispatch', nuevoDato);

        dispatch({
            type: 'cambiar',
            payload: nuevoDato
        });
    }

    /*  Metodo de prueba, la idea era probar la comunicacion, recibe la posicion que esa matriz de 2 numeros del estilo [0,1]
        y un valor, hice este metodo de pruebas debido a que no estaba logrando esa comunicacion bidireccional entre los componentes
        y de esa manera probar donde estaba el error
    */
    const test = (posicion, valor) => {
        console.log('voy a cambiar el valor de', posicion);
        const fila = posicion[1];
        const columna = posicion[0];

        const nuevoDato = {
            indice: 0,
            columna: columna,
            fila: fila,
            valor: valor,
            seleccionada: false,
            error: false
        }

        handleCambiar(nuevoDato);
        console.log('ahora jeugos esta', conjuntoCeldas)

    };



    /* Este metodo iria ser el que de acuerdo a la celda que se seleccione en la grilla no editable (la matriz principal) se genera
    una una matriz de 3x3 que es la que termina mostrando los datos a editar en la interfaz del usuario */
    const activarSector = (numero) => {
        sectorACtivo = [];

        let vector1 = [];
        let vector2 = [];
        let vector3 = [];

                conjuntoCeldas.map((celda, i) => {

                    if (celda.fila === 0 && celda.columna > 2) {
                        vector1.push(celda)
                    }
                    if (celda.fila === 1 && celda.columna > 2) {
                        vector2.push(celda)
                    }
                    if (celda.fila === 2 && celda.columna > 2) {
                        vector3.push(celda)
                    }
                })
          
        

        sectorACtivo.push(vector1, vector2, vector3);
        console.log('el sector activo es', sectorACtivo[0][0])

    }


    return (
        <>
            { activarSector(1)}

            <h1>Sudoku Tablero 1</h1>

            <div className="row">
                <div className="col-7">
                    <table className="table table-bordered col-12">
                        <tbody>
                            <tr >
                               
                                {
                                     /* Esto deberia estar en otro componente <Grilla /> pero me daba problemas de comunicacion
                                        por eso termine iterando el conjunto de celdas  y construyendo cada td
                                    */
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 0) {
                                            return <Celda
                                                onClick={() => console.log('sarasa')}
                                                celda={celda}
                                                ref={grillaRef}
                                            />
                                        }
                                    })
                                }


                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 1) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 2) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 3) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 4) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 5) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 6) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 7) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    conjuntoCeldas.map(celda => {

                                        if (celda.columna === 8) {
                                            return <Celda celda={celda} />
                                        }
                                    })
                                }
                            </tr>



                        </tbody>
                    </table>


                </div>
                <div className="col-3">

                    { /* Si el sector activo no es null significa que el usuario hizo clic en alguna celda y se activa el mismo, entonces
                    se muestra el formulario de cambio que se carga con los datos de dicha variable */
                        (sectorACtivo) &&
                        <div>
                            <form>
                                <h4> Modificar</h4>

                                <table className="table table-bordered col-12">
                                    <tbody>
                                        <tr><td>{sectorACtivo[0][0].valor}</td><td>{sectorACtivo[1][0].valor}</td><td>{sectorACtivo[2][0].valor}</td></tr>
                                        <tr><td>{sectorACtivo[0][1].valor}</td><td>{sectorACtivo[1][1].valor}</td><td>{sectorACtivo[2][1].valor}</td></tr>
                                        <tr><td>{sectorACtivo[0][2].valor}</td><td>{sectorACtivo[1][2].valor}</td><td>{sectorACtivo[2][2].valor}</td></tr>
                                    </tbody>

                                </table>


                            </form>
                            <button
                                className="btn btn-blovk btn-primary"
                                onClick={() => { test([0, 1], 5) }}> prueba cambiarvalor</button>
                                 <button
                                className="btn btn-blovk btn-primary"
                                 onClick={()=> activarSector(2)}> prueba cambiarSector</button>
                        </div>



                    }

                </div>



            </div>


        </>
    )
}


