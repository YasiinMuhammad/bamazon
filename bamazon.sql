DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(150) NULL,
  department_name VARCHAR(150) NULL,
  price DECIMAL(10,2) NULL,
  quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Face Wash", "Toiltetries", 2.9, 765);

INSERT INTO products ( product_name, department_name, price, quantity)
VALUES ("Face lotion", "Toiltetries", 4.29, 844);

INSERT INTO products( product_name, department_name, price, quantity)
VALUES ("Body Wash", "Toiltetries", 3.33, 777);

INSERT INTO products ( product_name, department_name, price, quantity)
VALUES ("lotion", "Toiltetries", 6.73, 333);

INSERT INTO products ( product_name, department_name, price, quantity)
VALUES ("Beard Oil", "Toiltetries", 7.28, 611);

INSERT INTO products ( product_name, department_name, price, quantity)
VALUES ("Beard Brush", "Toiltetries", 4.28, 458);

INSERT INTO products ( product_name, department_name, price, quantity)
VALUES ("Tooth Brush", "Toiltetries", 3.50, 180);

INSERT INTO products ( product_name, department_name, price, quantity)
VALUES ("Toothpaste", "Toiltetries", 3.90, 345);