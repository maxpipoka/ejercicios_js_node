/* PEDIR al usuario un número y CONSTRUIR la tabla de multiplicar
(mensajes por cada renglón) de los valores correspondientes al multiplicar
el valor ingresado por el 1 hasta llegar al 10.
REALIZAR esto empleando la estructura de control WHILE. */

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function multiplicar () {
  rl.question('Ingrese el numero para la tabla: ', (valor) => {
    let i = 0
    while (i <= 10) {
      console.log(valor + ' x ' + i + ' = ' + (valor * i))
      i++
    }
    rl.close()
  })
}

multiplicar()