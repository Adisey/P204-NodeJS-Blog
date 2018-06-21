const express = require ('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser')
const path = require('path');
const postRouter = require(`./routes/post`);
const keys = require('./key');

const host = '127.0.0.1';
const port = process.env.PORT || 5000; // проверяем симтемный параметр, есди не задан используем 5000
const clientPath = path.join(__dirname, 'client');

mongoose.connect(keys.mongoURI)
    .then(() => console.log(`MongoDB - подключена c удалённого сервера.`))
    .catch(err => console.error(err));

const app = express ();
app.use(bodyPaser.json());
app.use(`/api/post`, postRouter);
app.use(express.static(clientPath));

app.listen (port, () => {
    console.log ('Сервер запущен.');
    console.log (`Зайти на него можно по адресу "//${host}:${port}`);
    console.log ('Остановка сервера "Crtl+C"');
});



