DROP DATABASE IF EXISTS todos_db;
CREATE DATABASE todos_db;

USE todos_db;

CREATE TABLE todos(
    id INT NOT NULL primary key AUTO_INCREMENT,
    groupId INT NOT NULL,
    task VARCHAR(255) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT 0,
    foreign KEY(groupId) references groups(groupId)
);

CREATE TABLE groups
(
    groupId INT NOT NULL primary key AUTO_INCREMENT,
    groupName VARCHAR(255) NOT NULL
);