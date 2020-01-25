const https = require('https')

var url = "https://apifootball.com/api/?APIkey=fa2f43a378dad88d4eb81ddc0b755cf9cdcf0230cd5d4cafb01cc07161acc08e&from=2020-01-25&to=2020-01-25&action=get_events"

const req = https.request(url, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()