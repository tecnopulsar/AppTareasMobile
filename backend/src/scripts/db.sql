CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT not null AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES 
    ('task 1', 'some description'),
    ('task 2','some other description'),
    ('task 3','some other description'),
    ('task 4','some other description');

select * from tasks where id = 1;