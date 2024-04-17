CREATE DATABASE db_tasks;
use db_tasks;
CREATE TABLE taks(
	id INT auto_increment primary key,
    title VARCHAR(255) NOT NULL,
    description varchar(255),
    created_at TIMESTAMP DEFAULT current_timestamp
);
select * from taks;