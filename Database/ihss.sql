CREATE DATABASE ihss;
USE ihss;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    userType ENUM('patient', 'doctor') NOT NULL,
    specialty VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- To see the table data, you can use the following SQL query:
SELECT * FROM users;


use ihss;

SHOW DATABASES;

show TABLES;
DESCRIBE users;

