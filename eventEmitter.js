const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data fetched, for ${name} with id number ${id} `);
})
customEmitter.on('response', (name) => {
  console.log(`fetching other data, ${name} `);
})


customEmitter.emit('response', 'Dean', 596)