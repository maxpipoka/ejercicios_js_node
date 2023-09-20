/* El área de liquidación de sueldos de una empresa REQUIERE modernizar sus procesos,
   para ello necesita un programa que ante la categoría de un empleado y su antigüedad
   en la empresa pueda CALCULAR su sueldo a pagar en función de las siguientes restricciones:
   (módulo ReadLine optativo)
    ● Básico por categoría: Cat. 1: $20.000, Cat. 2: $27.000, Cat. 3: $35.000
    ● Si la antigüedad es entre 0 y 5 años una bonificación del 5% sobre el básico, si es
    entre 6 y 12 años una bonificación del 7%, si está entre 13 y 20 años la bonificación es
    del 15% y si es mayor a 20 años la bonificación es el 25%.
    ● Los importes por obra social y por jubilaciones se calculan sobre el sueldo bruto
    (basico + bonificaciones) y constan de los siguientes porcentajes: 7% y 11% respectivamente.
    ● El sueldo neto se obtiene a partir del sueldo bruto menos los descuentos descritos en
    el punto anterior. La función a desarrollar debe recibir los datos de un empleado (categoría
    y antigüedad), informar todos los conceptos del recibo de sueldo y devolver el valor del sueldo neto a cobrar */

import { preguntaInt } from './pregunta.js'

const calcBonificacion = (antiguedad, basico) => {
  if (antiguedad <= 5) {
    return ((basico * 5) / 100)
  }
  if ((antiguedad >= 6) && (antiguedad <= 12)) {
    return ((basico * 7) / 100)
  }
  if ((antiguedad >= 13) && (antiguedad <= 20)) {
    return ((basico * 15) / 100)
  }
  if (antiguedad > 20) {
    return ((basico * 25) / 100)
  }
}

const calcBasico = (categoria) => {
  if (categoria === 1) {
    return 20000
  }
  if (categoria === 2) {
    return 27000
  }
  if (categoria === 3) {
    return 35000
  }
}

async function liquidacionSueldos () {
  const categoria = await preguntaInt('Ingrese la categoria (1, 2, 3): ')
  const antiguedad = await preguntaInt('Ingrese la antiguedad en años: ')
  const basico = calcBasico(categoria)
  const bonificacion = calcBonificacion(antiguedad, basico)
  const oSocial = 7
  const jubilacion = 11

  console.log('================================')
  console.log('======RECIBO DE SUELDO==========')
  console.log('Sueldo Básico: $' + basico)
  console.log('Bonificaciones: $' + bonificacion)
  console.log('Sueldo Bruto: $' + (basico + bonificacion))
  console.log('Obra social: -$' + (((basico + bonificacion) * oSocial) / 100))
  console.log('Jubilación: -$' + (((basico + bonificacion) * jubilacion) / 100))
  console.log('Neto a cobrar: $' + ((basico + bonificacion) - ((((basico + bonificacion) * oSocial) / 100) + (((basico + bonificacion) * jubilacion) / 100))))
}

liquidacionSueldos()
