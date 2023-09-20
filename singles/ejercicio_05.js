/* PEDIR al usuario que ingrese una calificación, comprendida entre 0–10,
   el programa deberá RETORNAR, por medio de una función, un mensaje con la
   etiqueta que corresponda según la siguiente tabla:
   ● 0-3 muy deficiente, 3-5 insuficiente, 5-6 suficiente, 6-7 bien,
   7-9 notable, 9-10 sobresaliente */

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function evaluacion () {
  rl.question('Ingrese la calificación: ', (valor) => {
    if ((parseInt(valor) > 0) && (parseInt(valor) <= 3)) {
      console.log('DEFICIENTE')
    }

    if ((parseInt(valor) > 3) && (parseInt(valor) <= 5)) {
      console.log('INSUFICIENTE')
    }

    if ((parseInt(valor) > 5) && (parseInt(valor) <= 6)) {
      console.log('SUFICIENTE')
    }

    if ((parseInt(valor) > 6) && (parseInt(valor) <= 7)) {
      console.log('BIEN')
    }

    if ((parseInt(valor) > 7) && (parseInt(valor) <= 9)) {
      console.log('NOTABLE')
    }

    if ((parseInt(valor) > 9) && (parseInt(valor) <= 10)) {
      console.log('SOBRESALIENTE')
    }
    rl.close()
  })
}

evaluacion()
