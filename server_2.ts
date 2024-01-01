import http from 'http'
import path from 'path';
import fs from 'fs'

const PORT = 3001


const delay = (ms: number) => {
     return new Promise((res, rej) => {
          setTimeout(() => {
               res(true)
          }, ms)
     })
}

const readFile = (path: string): Promise<Buffer> => {
     return new Promise((res, rej) => {
          fs.readFile(path, (err, data) => {
               if (err) {
                    rej(err)
               }
               else {
                    res(data)

               }


          })
     })
}

http.createServer(async function (req: http.IncomingMessage, res) {
   
     switch (req.url) {
          case '/home': {

               console.log(req.method, req.url);
               

               try {
                    const data = await readFile('pages/home.html')
                    res.write(data)
                    res.end()

               }
               catch (e) {
                    res.statusCode = 500
                    console.log(e);
                    res.end(`Server Error ${res.statusCode}`)

               }

               break;
          }
          case '/about': {

               await delay(3000)
               res.write(`function a(){return 2 + 2};a()`)
               res.end()

               break;
          }
          default: {
               res.statusCode = 404;
               res.write('Not found page!');
               res.end()
          }
     }




}).listen(3001, 'localhost', () => {
     console.log(`Server started listening to http://localhost:${PORT}`)

})