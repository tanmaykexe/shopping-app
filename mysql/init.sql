CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    quantity INT
);

INSERT INTO products(name, price, quantity)
VALUES
('Laptop',65000,10),
('Keyboard',1200,50),
('Mouse',700,100);
