import http from 'http'
import path from 'path';
import fs from 'fs'

let counter = 0
const PORT = 3001

// const start = Date.now()

// while((Date.now() - start) < 7000){
//      console.log(Date.now() - start);

// }


http.createServer(function (req: http.IncomingMessage, res) {

     console.log(counter);

     if (req.url?.match('/favicon.ico')) {

          const faviconPath = path.join(__dirname, 'favicon.ico');


          fs.readFile(faviconPath, (err, data) => {
               if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Error loading favicon');
               }

               res.statusCode = 200;
               res.setHeader('Content-Type', 'image/x-icon');
               res.end(data);

          })


     }
     else {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');


          switch (req.url) {
               case "/home":
               case "/":
                    counter++
                    res.write(`<h2>Home - ${counter}</h2>`);

                    break;
               case "/about":
                    res.statusCode = 302;
                    res.setHeader("Location", "/newpage");
                    break;
               case "/contact":
                    res.write("<h2>Contacts</h2>");
                    break;
               case '/newpage':
                    res.write(req.url);
                    break;
               default:
                    res.statusCode = 404
                    res.write("<h2>Not found</h2>");
                    break;
          }

          res.end();
     }



}).listen(3001, 'localhost', () => {
     console.log(`Server started listening to http://localhost:${PORT}`)

})