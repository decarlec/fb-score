const httpClient = require('./http-client');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const url = "https://apifootball.com/api/?APIkey=fa2f43a378dad88d4eb81ddc0b755cf9cdcf0230cd5d4cafb01cc07161acc08e&from=2020-01-25&to=2020-01-25&action=get_events";

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    httpClient.makeRequest(url, (data) =>{
        res.send({ express: data });
    });
});