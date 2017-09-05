'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
var config = require('./config.js');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
mongoose.connect(config.db.uri);
var ls = require('./listings.json');
var listings = ls.entries;

for(var i in listings){
  console.log(i);
  var thing = new Listing({
    code: listings[i].code,
    name: listings[i].name,
    coordinates: listings[i].coordinates,
    address: listings[i].address
  });
  thing.save(function(err){
    if(err) throw err;
  });
  //console.log(listings[i]);
}

mongoose.connection.close()

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */