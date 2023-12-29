const http = require('http')
const { userInfo } = require('os')
const fs = require("fs");
const path = require('path')


let counter = 0
http.createServer(function (req:  any, res: any) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url.match(/favicon.ico/)) {
        return
    }

        switch (req.url) {
            case "/home":
            case "/":
                counter++
                res.write(`<h2>Home - ${counter}</h2>`);
                res.write('<title>😊</title>');

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
