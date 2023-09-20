/* Un software para la facturación de la venta de combustibles debe REALIZAR el
   cálculo del valor a cobrar al cliente a partir de la cantidad de litros
   suministrada y el precio por litro del combustible seleccionado.
   ● Una vez realizado este cálculo, para fines administrativos, SE REQUIERE liquidar
   sobre el importe total de la venta los impuestos (IVA 21% e Ingresos Brutos 3.5%).
   ● IMPLEMENTAR una función que tome el precio por litro, la cantidad de litros e
  informe (imprima) los valores a registrar para la contabilidad de la empresa (impuestos)
  y DEVUELVA el valor a cobrar al cliente. */

import { preguntaInt, preguntaStr } from './pregunta.js'

async function estacion () {
  const litros = await preguntaInt('Cantidad de litros cargados?: ')
  const tipoCombustible = await preguntaStr('Tipo de combustible cargado?: ')

  if (tipoCombustible === 'super') {
    console.log(litros * 240.5)
  } else if (tipoCombustible === 'premium') {
    console.log(litros * 308.7)
  } else {
    console.log(litros * 258.4)
  }
}

estacion()
