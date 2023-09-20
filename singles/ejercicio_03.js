/* PEDIR al usuario un número y CONSTRUIR la tabla de multiplicar
   (mensajes por cada renglón) de los valores correspondientes al
   multiplicar el valor ingresado por el 1 hasta llegar al 10.
   REALIZAR esto empleando la estructura de control FOR */

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function multiplicar () {
  rl.question('Ingrese un número para generar la tabla: ', (valor) => {
    for (let i = 0; i <= 10; i++) {
      console.log(valor + ' x ' + i + ' = ' + (valor * i))
      rl.close()
    }
  })
}

multiplicar()
