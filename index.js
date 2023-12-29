const http = require('http')
const { userInfo } = require('os')
const fs = require("fs");
const path = require('path')


http.createServer(function (req, res) {
    if (req.url.match(/favicon.ico/)) {
        return
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (req.method === 'GET') {
        if (req.url === "/home" || req.url === "/") {
            res.write("<h2>Home</h2>");
        }
        else if (req.url == "/about") {
            res.statusCode = 302; // временная переадресация
            // на адрес localhost:3000/newpage
            res.setHeader("Location", "/newpage");
            //res.write("<h2>About</h2>");
        }
        else if (req.url == "/contact") {
            res.write("<h2>Contacts</h2>");
        }
        else if(req.url === '/newpage'){
            res.write(req.url);

        }
        else {
            res.statusCode = 404
            res.write("<h2>Not found</h2>");
        }
    }
    res.end();

}).listen(3001, 'localhost', () => {
    console.log('Server started listening to 3001')
})

//
//
// fs.readFile("./data/hello.txt", function(error,data){
//     if(error) {  // если возникла ошибка
//         return console.log(error, 'fuck!');
//     }
//     console.log(data.toString());   // выводим считанные данные
// });
// console.log("Асинхронное чтение файлов");
//
// const data = "Hello No2de.js\n";
//
// fs.appendFile("./data/hello.txt" ,data, function(error){
//     if(error){  // если ошибка
//         return console.log(error);
//     }
//     console.log("Файл успешно записан");
// });
//
// fs.stat("./data/hello.txt", (error, stats) => {
//     if (error)  return console.error(error);
//     console.log(stats.isFile());        // true
//     console.log(stats.isDirectory());   // false
//     console.log(stats);
// // });
//
// fs.readdir("./data", (error, files) => {
//     if (error) return console.log(error);
//     files.forEach((file) => {
//         console.log(`./data/${file.toString()}`)
//         fs.readFile("./data/" + file, (err, data) => {
//             if (err){
//                 console.log(err)
//             }
//             console.log(data.toString())
//         })
//
//
//
//     });
// });

// const EventEmitter = require("events");
// // определяем эмиттер событий
// const emitter = new EventEmitter();
//
// // имя события, которое будет обрабатываться
// const eventName = "greet";
// // генерируем событие greet
//
// emitter.on(eventName, function(){
//     console.log("Hello World!");
// });
//
//
// emitter.emit(eventName);
