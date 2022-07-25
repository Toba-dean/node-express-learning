// MODULES: basically used to encapsulate code i.e sharing what you want.

const name = require('./4-modules');
const func = require('./5-module');

// destructuring the properties from the name object.
const { dean, nigan } = name

console.log(func)

func(dean)
func(nigan)