//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://172.17.0.3/mydb';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var RentalSchema = new Schema({
  _id : Number
});

var RentalModel = mongoose.model('RentalModel', RentalSchema );


var Rental = mongoose.model('Rental', RentalSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Rental.find({'Street Name': 'STONE PARK'}, '_id', function (err, rentals) {
  if (err) return handleError(err);
})
