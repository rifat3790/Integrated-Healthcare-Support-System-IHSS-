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

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doctor_name VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    appointment_date DATETIME NOT NULL,
    status ENUM('upcoming', 'past', 'cancelled') DEFAULT 'upcoming',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM appointments;

