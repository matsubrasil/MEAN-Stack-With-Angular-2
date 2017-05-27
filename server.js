const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
const path = require ( 'path' );
const config = require( './config/database' );

mongoose.Promise = global.Promise;
mongoose.connect( config.uri, (err) =>{
    if (err) {
        console.log( 'Could NOT connect to databse: ', err );
    } else {
        console.log( 'Connected to databse: ' + config.db );
    }
});

app.use( express.static( __dirname + '/client/dist' ));

app.get( '*', (req, res) => {
    res.sendFile( path.join( __dirname + '/client/dist/index.html' ) );
})

app.listen( 3000, () => {
    console.log( 'Exampless app listening on port 3000!' );
})