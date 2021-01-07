DROP DATABASE IF EXISTS stock_db;
CREATE DATABASE stock_db;
USE stock_db;

CREATE TABLE user (
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (username)
);
CREATE TABLE saved_stocks (
  id INT AUTO_INCREMENT NOT NULL,
  ticker VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  user_id VARCHAR(30) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(username) ON DELETE CASCADE
);
CREATE TABLE searched_stocks (
  id INT AUTO_INCREMENT NOT NULL,
  ticker VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
