const https = require('http');
 
const callExternalApiUsingHttp = (url,callback) => {
    https.get(url, (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(null,data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
        return callback(err,null);
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;