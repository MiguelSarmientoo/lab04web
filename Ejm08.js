// Importando el módulo 'events' de Node.js
const EventEmitter = require('events');

// Creando un nuevo objeto EventEmitter
const myEmitter = new EventEmitter();

// Array de funciones oyentes para el evento 'eventA'
const listenersForEventA = [
  () => console.log('Listener 1 for eventA executed'),
  () => console.log('Listener 2 for eventA executed')
];

// Registrando los listeners para el evento 'eventA' utilizando un bucle
listenersForEventA.forEach(listener => {
  myEmitter.on('eventA', listener);
});

// Emitiendo el evento 'eventA'
myEmitter.emit('eventA');
