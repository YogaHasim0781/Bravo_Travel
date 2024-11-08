CREATE DATABASE IF NOT EXISTS auth_db;
USE auth_db;
 
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    refresh_token TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ticketings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama varchar(255) NOT NULL,
  nik varchar(255) NOT NULL,
  gender enum('male','female','other') NOT NULL,
  tanggal_pemesanan datetime NOT NULL,
  keberangkatan varchar(255) NOT NULL,
  tiba varchar(255) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL
)