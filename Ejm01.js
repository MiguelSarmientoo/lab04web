const fs = require('node:fs/promises')

fs.writeFile('./archivo2b.txt', 'línea 1\nLínea 2\n creado con promesas.\n')
    .then(() => {
        console.log('Archivo creado exitosamente');
    })
    .catch(error => {
        console.log(error)
    })

console.log('Última línea del programa')