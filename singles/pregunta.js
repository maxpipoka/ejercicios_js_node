import readline from 'node:readline'

export function preguntaInt (texto) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve, reject) => {
    rl.question(texto, (ingreso) => {
      resolve(parseInt(ingreso))
      rl.close()
    })
  })
}

export function preguntaStr (texto) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve, reject) => {
    rl.question(texto, (ingreso) => {
      resolve(ingreso)
      rl.close()
    })
  })
}
