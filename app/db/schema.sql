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
    groupId INT NOT NULL AUTO_INCREMENT,
    groupName VARCHAR(255) NOT NULL,
    PRIMARY KEY (groupId)
);


ALTER TABLE `todos_db`.`todos` 
ADD COLUMN `groupId` INT NOT NULL AFTER `id`,
ADD INDEX `groupId_idx` (`groupId` ASC);
;
ALTER TABLE `todos_db`.`todos` 
ADD CONSTRAINT `groupId`
  FOREIGN KEY (`groupId`)
  REFERENCES `todos_db`.`groups` (`groupId`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;




CREATE TABLE `todos_db`.`todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `groupId` INT NOT NULL,
  `task` VARCHAR(255) NOT NULL,
  `done` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;
