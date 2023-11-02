DROP DATABASE IF EXISTS traveler_db;

CREATE DATABASE traveler_db;
USE traveler_db;


CREATE TABLE traveller (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL
    );
    
    CREATE TABLE location (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    );
    
	CREATE TABLE trip (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    trip_budget INT,
    traveller_amount INT,
    location_id INT,
    FOREIGN KEY (traveller_id) REFERENCES traveller(id),
	FOREIGN KEY (location_id) REFERENCES location(id)
    );