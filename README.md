
#Proyecto de prueba de REACT

En principio iba a hacerlo de la siguiente manera


```
<juego>
    <Tablero>
        <Grilla>
            <Celdas></Celdas>
        </Grilla>
    </tablero>
</juego>
```
## Descripcion de la solucion 

El tablero iba a contener los controles del juego, en ese mismo elemento estaria la grilla que recibe un vector y transforma a conjunto de celdas que son en definitiva un elemento de alto nivel con el cual despues se generara la tabla que representa la matriz de 9x9

La idea era que cada celda controlara su propio comportamiento y se pudiera comunicar con su padre (la grilla) para poder hacer controles y renderizar resultados

