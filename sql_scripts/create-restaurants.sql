USE ubereats;
SHOW TABLES;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants(
	primary_key INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_of_stars INT,
    rating_description VARCHAR(100),
    restaurant_title VARCHAR(100),
    restaurant_type VARCHAR(100),
    restaurant_img VARCHAR (100)
);
INSERT INTO restaurants (number_of_stars, rating_description, restaurant_title, restaurant_type, restaurant_img)
VALUES (3, 'this restaurant was average.', 'Pizza Hut', 'Fast Food', 'image link'),
(2, 'this restaurant was below average.', 'McDonalds', 'Fast Food', 'image link'),
(4, 'this restaurant was good.', 'Dominos', 'Fast Food', 'image link'),
(3, 'this restaurant was average.', 'Thai Spice', 'Asian', 'image link'),
(5, 'this restaurant was amazing', 'China Star', 'Asian', 'image link'),
(4, 'this restaurant was good.', 'Izakaya', 'Asian', 'image link'),
(3, 'this restaurant was average.', 'Gringos', 'Mexican', 'image link'),
(4, 'this restaurant was good.', 'El Tiempo Cantina', 'Mexican', 'image link'),
(5, 'this restaurant was amazing.', 'Lupe Tortilla', 'Mexican', 'image link'),
(3, 'this restaurant was average.', 'Salata', 'Healthy', 'image link'),
(4, 'this restaurant was good.', 'Bellagree', 'Healthy', 'image link'),
(5, 'this restaurant was amazing.', 'Smoothie King', 'Healthy', 'image link'),
(2, 'this restaurant was below average.', 'Wing Stop', 'Wings', 'image link'),
(4, 'this restaurant was good.', 'Buffalo Wild Wings', 'Wings', 'image link'),
(3, 'this restaurant was average.', 'Just Wingz','Wings', 'image link');

SELECT * FROM restaurants;
