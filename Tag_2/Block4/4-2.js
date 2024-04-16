const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const port = 3000;
const list = ["Bobby Bubbles", "Wacky Wendy", "Silly Sally", "Crazy Carl", "Loopy Larry", "Funky Frank", "Jazzy Janice", "Bonkers Ben", "Zany Zoe", "Whacky Walter", "Dizzy Daisy", "Kooky Kevin", "Nutty Nancy", "Giggles Gary", "Wobble William", "Quirky Quincy", "Spazzy Samantha", "Bouncy Betty", "Goober George", "Fluttering Fred"]

app.use(bodyparser.urlencoded({
    extended:true
}))

//1
app.get('/now', (request, response) => {
    response.send(new Date().toLocaleTimeString("de-CH", {timezone: request.query.tz}));
});

app.get('/names', (request, response) => {
    response.send(list)
})

//2
app.post('/names', (request, response) => {
    const name = request.body.name;
    list.push(name)
    response.send(`name added ${name}`)
})

//3
app.delete('/names', (request, response) => {
    const name = request.query.name
    const nameindex = list.indexOf(name)
    list.splice(nameindex, 1)
    response.send(list)
    response.status(204)
})

//4
app.get('/secret2', (request, response) => {
    const header = request.header('authorization')
    if (header === 'Basic aGFja2VyOjEyMzQ=') {
        response.status(200).send('Status 200')
    } else {
        response.status(401).send('Status 401')
    }
})

//5
app.get('/chuck', async (request, response) => {
    const name = request.query.name;

    const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random')
    const jokeJson = await jokeResponse.json()
    response.send(jokeJson.value.replace("Chuck Norris", name))

})

const about = {
    forename: 'Adam',
    surname: 'Laib',
    age: 18
}

app.get('/me', (req, res) => {
    res.send(about)
})

app.patch('/me', (req, res) =>{
    console.log(req.body);
    res.send(...about, ...req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});