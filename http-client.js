const https = require('https')

function makeRequest(url, callback){
  let data = '';
  let errors;

  const req = https.request(url, res => {
    console.log(`statusCode: ${res.statusCode}`)   
    res.on('data', d => {
      data += d;
    })

    res.on('end', () => {
      console.log("data recieved");
      callback(errors, data)
    })
  })
  
  req.on('error', error => {
    errors.add(error);
  })
  
  req.end();
}

module.exports.makeRequest = makeRequest;

