DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name VARCHAR(50) not null,
    devoured boolean not null DEFAULT false,
    primary key (id)
);