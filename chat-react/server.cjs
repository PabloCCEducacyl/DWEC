const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const expressWs = require('express-ws')(app);

app.use(bodyParser.json())
expressWs.par
app.post('/webhook', (req, res) => {
    const payload = req.body;
    console.log('Webhook received: ', payload)


    res.status(200).send('correcto');
})

app.ws('/webhook', (ws, req) => {
    ws.on('message', function(msg){
        console.log(msg);
    })
    console.log('CAGATE ENCIMA JAVIER: ', req);
})

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})