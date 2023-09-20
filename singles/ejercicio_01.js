/* ESCRIBE un programa que solicite al usuario que INGRESE su nombre y
luego lo MUESTRE por pantalla con un mensaje de bienvenida como el siguiente
“Hola <usuario>”. Donde <usuario> es el nombre ingresado. */

import { preguntaStr } from './pregunta.js'

async function saludo () {
  const nombre = await preguntaStr('Ingrese su nombre: ')

  console.log('Hola ' + nombre.toUpperCase())
}

saludo()
