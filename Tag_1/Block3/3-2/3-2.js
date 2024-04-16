const request = require('request');
const express = require('express')
const app = express();
const port = 3000;


app.get('/temperature/:plz', (request, response, res) => {
    const plz = req.params.plz
    let url =`https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`;

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
}, (err, response, data) => {
    if (err) {
        console.log('Error:', err);
    } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
    } else {
        const temp = data.currentWeather.temperature
        res.send(temp)
    }
});
})

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});