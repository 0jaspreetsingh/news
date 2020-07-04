
//Install express server
const express = require('express');
const path = require('path');

const cors = require('cors');

const app = express();

// add this code
const whitelist = ['https://newsapi.org/v2/','http://ip-api.com/json','http://localhost:4201','http://news-anywhere.herokuapp.com/']; // list of allow domain

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            console.log('************');
            console.log(origin);
            console.log('************');
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}

// end 
app.use(cors(corsOptions));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/news'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/news/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4201);


//http://news-anywhere.herokuapp.com/