DROP DATABASE IF EXISTS nodedb;

CREATE DATABASE nodedb;

USE nodedb;

DROP TABLE IF EXISTS people;

CREATE TABLE people (
  id int NOT NULL auto_increment,
  name varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO people (name) VALUES ('Muryllo Tiraza');