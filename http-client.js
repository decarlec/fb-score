const https = require('https')

function makeRequest(url, cb){

  let data = '';

  const req = https.request(url, res => {
    console.log(`statusCode: ${res.statusCode}`)   
    res.on('data', d => {
      data += d;
    })

    res.on('end', () => {
      console.log("data recieved");
      cb(data)
    })
  })
  
  req.on('error', error => {
    console.error(error);
  })
  
  req.end();
}

module.exports.makeRequest = makeRequest;

