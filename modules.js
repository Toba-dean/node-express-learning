// // OS MODULE

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

// FS MODULe

const fs = require('fs');
const { readFileSync, writeFileSync, readFile, writeFile } = fs;

// reading and writing of files synchronously
// const first = readFileSync('./content/first.txt', 'utf-8');

// console.log(first);

// writeFileSync(
//   './content/result-sync.txt',
//   `The result from the sync: ${first}`
// )

// reading file asynchronously leads to a CALLBACK HELL!!
readFile(
  './content/first.txt',
  'utf-8',
  (error, result) => {
    if (error) {
      console.log('there is an error: ' + error);
      return false;
    }
    const first = result

    readFile(
      './content/second.txt',
      'utf-8',
      (error, result) => {
        if (error) {
          console.log('there is an error: ' + error);
          return false;
        }
        const second = result

        writeFile(
          './content/result-async.txt',
          `The result from the async: ${first} and ${second}`,
          (err, result) => {
            if (error) {
              console.log('there is an error: ' + err);
              return false;
            }
            console.log(result);
          }
        )
      }
    )
  }
)

// HTTP MODULE 

// const http = require('http')

// const server = http.createServer((req, res) => {
//   if(req.url === '/') {
//     return res.end(`Welcome to home page`)
//   }
//   if(req.url === '/about') {
//     return res.end(`Welcome to about page`)
//   }
//   return res.end(`<h1>OOPS!</h1>
//     <p>No page found!!</p>
//     <a href='/'>Go Home</a>`)
// })

// server.listen(3000)
