DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Dance with me", "Orleans", "soft rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Rihanna ", "fleetwood mac", "soft rock");

INSERT INTO songs (title, artist, genre)
VALUES ("New Kid in Town", "Eagles", "soft rock");