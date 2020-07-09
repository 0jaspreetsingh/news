
//Install express server
const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}


app.get('/top-headlines', (req, res) => {
    // http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-09&sortBy=publishedAt&apiKey=cad9513649d14340a1dc687f643c9dc2', (response) => {
    //     const myJson = response;
    //     console.log(myJson);
    //     res.send(myJson);
    // });
   
  //  console.log($.param(req.query));
    request(`http://newsapi.org/v2/top-headlines${jsonToQueryString(req.query)}&apiKey=cad9513649d14340a1dc687f643c9dc2`, function (error, response, body) {
        console.log(error);
        console.log(body);
        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body)) // Print the google web page.

            const json  = JSON.parse(body);
            res.setHeader("Content-Type", "application/json");
            res.send(json);
        }
    })

   
});
app.get('/everthing', (req, res) => {
    // http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-09&sortBy=publishedAt&apiKey=cad9513649d14340a1dc687f643c9dc2', (response) => {
    //     const myJson = response;
    //     console.log(myJson);
    //     res.send(myJson);
    // });
    //console.log($.param(req.query));
    request(`http://newsapi.org/v2/everthing${jsonToQueryString(req.query)}&apiKey=cad9513649d14340a1dc687f643c9dc2`, function (error, response, body) {
        console.log(body);
        console.log(error);

        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body)) // Print the google web page.
            const json  = JSON.parse(body);
            res.setHeader("Content-Type", "application/json");
            res.send(json);
        }
    })

   
});
app.get('/sources', (req, res) => {
    // http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-09&sortBy=publishedAt&apiKey=cad9513649d14340a1dc687f643c9dc2', (response) => {
    //     const myJson = response;
    //     console.log(myJson);
    //     res.send(myJson);
    // });
   // console.log($.param(req.query));
    request(`http://newsapi.org/v2/sources${jsonToQueryString(req.query)}&apiKey=cad9513649d14340a1dc687f643c9dc2`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body)) // Print the google web page.
            const json  = JSON.parse(body);
            res.setHeader("Content-Type", "application/json");
            res.send(json);
        }
    })

   
});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/news'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/news/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4201);