const express = require('express');
const app = express();
const port = 3000;


async function getTemperature(zip) {
    const response = await fetch(`https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${zip}00`)
    const json = await response.json();
    return json.currentWeather.temperature;
}

app.get('/', async (request, response) => {
    const zip = request.query.plz
    const temperature = getTemperature(request.query.plz);
    response.send(`Aktuelle Temperatur bei ${zip}: ${temperature}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});