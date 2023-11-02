const Traveller = require('./traveller');
const Location = require('./location');
const Trips = require('./trips');

Traveller.hasOne(License, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Traveller.hasMany(Car, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Trips.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

module.exports = { Traveller, Location, Trips };
