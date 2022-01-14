// // OS MOGDULE

// const OS = require('os')

// // info about current user 
// const user = OS.userInfo()
// // console.log(user)

// // About system up time in sec
// // console.log(`System up time is: ${OS.uptime()}sec`)

// const currentOS = {
//   name: OS.type(),
//   release: OS.release(),
//   totalMem: OS.totalmem(),
//   freeMem: OS.freemem()
// }

// console.log(currentOS);

// PATH MODULE

// const path = require('path')
// console.log(path.sep)

// // FS MODULe

// const fs = require('fs')

// HTTP MODULE 

// const { read } = require('fs');
// const http = require('http')

// const server = http.createServer((req, res) => {
//   if(req.url === '/') {
//     res.end(`Welcome to home page`)
//   }
//   if(req.url === '/about') {
//     res.end(`Welcome to about page`)
//   }
//   res.end(`<h1>OOPS!</h1>
//     <p>No page found!!</p>
//     <a href='/'>Go Home</a>`)
// })

// server.listen(3000)
