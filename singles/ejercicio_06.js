/* PEDIR al usuario que ingrese dos valores enteros, y evalúe si son
iguales o si son diferentes, MOSTRAR el resultado en un mensaje dependiendo del caso.  */
/* REHACER el ejercicio número 2 a través de una función que devuelva True o False según corresponda. */

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function pregunta(texto) {
  return new Promise((resolve, reject) => {
    rl.question(texto, (ingreso) => {
      resolve(parseInt(ingreso))
    })
  })
}

async function comparar () {
  const numero1 = await pregunta('Ingrese el valor A: ')
  const numero2 = await pregunta('Ingrese el valor B: ')

  if (numero1 === numero2) {
    console.log('TRUE')
  }

  if (numero1 !== numero2) {
    console.log('FALSE')
  }
  rl.close()
}

comparar()
