/* PEDIR al usuario que ingrese una calificación, comprendida entre 0–10,
   el programa deberá RETORNAR, por medio de una función, un mensaje con la
   etiqueta que corresponda según la siguiente tabla:
   ● 0-3 muy deficiente, 3-5 insuficiente, 5-6 suficiente, 6-7 bien,
   7-9 notable, 9-10 sobresaliente */

import { preguntaInt } from './pregunta.js'

async function evaluacion () {
  const valor = await preguntaInt('Ingrese la calificación: ')

  if ((valor > 0) && (valor <= 3)) {
    console.log('DEFICIENTE')
  }

  if ((valor > 3) && (valor <= 5)) {
    console.log('INSUFICIENTE')
  }

  if ((valor > 5) && (valor <= 6)) {
    console.log('SUFICIENTE')
  }

  if ((valor > 6) && (valor <= 7)) {
    console.log('BIEN')
  }

  if ((valor > 7) && (valor <= 9)) {
    console.log('NOTABLE')
  }

  if ((valor > 9) && (valor <= 10)) {
    console.log('SOBRESALIENTE')
  }
}

evaluacion()
