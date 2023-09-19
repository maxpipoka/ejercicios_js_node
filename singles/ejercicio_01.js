/* ESCRIBE un programa que solicite al usuario que INGRESE su nombre y
luego lo MUESTRE por pantalla con un mensaje de bienvenida como el siguiente
“Hola <usuario>”. Donde <usuario> es el nombre ingresado. */

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function saludo () {
  rl.question('Ingrese su nombre: ', (nombre) => {
    console.log('Hola ' + nombre.toUpperCase())
    rl.close()
  })
}

saludo()
