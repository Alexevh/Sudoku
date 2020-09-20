import React from 'react'
import { Celda } from './Celda'

export const Grilla = ( {conjuntoCeldas}) => {


   
    return (
        <>
       
            <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 0){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 1){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 2){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 3){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 4){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 5){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 6){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 7){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             <tr>
                        {
                          conjuntoCeldas.map(celda => {

                            if (celda.columna === 8){
                               return <Celda celda={celda} />                         
                            }
                          })
                        }
             </tr>
             
        </>
    )
}
