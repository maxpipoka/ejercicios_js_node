/* PEDIR al usuario un número y CONSTRUIR la tabla de multiplicar
(mensajes por cada renglón) de los valores correspondientes al multiplicar
el valor ingresado por el 1 hasta llegar al 10.
REALIZAR esto empleando la estructura de control WHILE. */

import { preguntaInt } from './pregunta.js'

async function multiplicar () {
  const valor = await preguntaInt('Ingrese un número para generar la tabla: ')

  let i = 0
  while (i <= 10) {
    console.log(valor + ' x ' + i + ' = ' + (valor * i))
    i++
  }
}

multiplicar()
