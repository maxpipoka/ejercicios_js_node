/* PEDIR al usuario que ingrese dos valores enteros, y evalúe si son
iguales o si son diferentes, MOSTRAR el resultado en un mensaje dependiendo del caso.  */

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function pregunta(texto) {
  return new Promise((resolve, reject) => {
    rl.question(texto, (ingreso) => {
      resolve(ingreso)
    })
  })
}

async function comparar () {
  const numero1 = await pregunta('Ingrese el valor A: ')
  const numero2 = await pregunta('Ingrese el valor B: ')

  if (numero1 === numero2) {
    console.log('Los valores A: ' + numero1 + ' y B: ' + numero2 + ' SON iguales.')
  }

  if (numero1 !== numero2) {
    console.log('Los valores A: ' + numero1 + ' y B: ' + numero2 + ' NO son iguales.')
  }
  rl.close()
}

comparar()
