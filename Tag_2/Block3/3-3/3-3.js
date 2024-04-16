const express = require('express');
const fs = require("fs")
const app = express();
const port = 3000;
const list = ["Bobby Bubbles", "Wacky Wendy", "Silly Sally", "Crazy Carl", "Loopy Larry", "Funky Frank", "Jazzy Janice", "Bonkers Ben", "Zany Zoe", "Whacky Walter", "Dizzy Daisy", "Kooky Kevin", "Nutty Nancy", "Giggles Gary", "Wobble William", "Quirky Quincy", "Spazzy Samantha", "Bouncy Betty", "Goober George", "Fluttering Fred"]


//Aufgabe 1
app.get('/now', (request, response) => {
    response.send(new Date().toLocaleTimeString())
});


//Aufgabe 2
app.get('/zli', (request, response) => {
    response.redirect('https://www.zli.ch/')
});


//Aufgabe 3
app.get('/name', (request, response) => {
    let ranint = Math.floor(Math.random() * 20);
    response.send(`Ihr Name: ${list[ranint]}` )
});


//Aufgabe 4
app.get('/html', (request, response) => {
    response.type('text/html').send(fs.readFileSync('C:/M295/Tag_2/Block3/3-3/indexo.html'));
});


//Aufgabe 5
app.get('/image', (request, response) => {
    response.sendFile(`C:/M295/Tag_2/Block3/3-3/benji.png`)
});


//Aufgabe 6
app.get('/teapot', (request, response) => {
    response.status(418).send('TEAPOT')
});


//Aufgabe 7
app.get('/user-agent', (request, response) => {
    response.send(request.headers['user-agent']);
});


//Aufgabe 8
app.get('/secret', (request, response) => {
    response.status(403).send('Secret...')
});

//Aufgabe 9
app.get('/xml', (request, response) => {
    response.type('text/xml').send(fs.readFileSync('C:/M295/Tag_2/Block3/3-3/test.xml'));
});


//Aufgabe 10
app.get('/me', (request, response) => {
    response.sendFile('C:/M295/Tag_2/Block3/3-3/me.json')
});



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});