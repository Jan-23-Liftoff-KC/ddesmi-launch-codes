INSERT INTO dywaboh.realtors (id, agency, email, first_name, last_name, mls_number, profile_image_path)
VALUES
(1, 'Marx Agency', 'jenny.bilson@gmail.com', 'Jenny', 'Bilson', 'mls99934', '/images/0000001.png'), 
(2, 'Buy a House, Man!', 'dave.epperson@bahm.ninja', 'Dave', 'Epperson', 'mls084698', '/images/0540622.jpg'), 
(3, 'Hou Hou HOUSE', 'imrbt@notarobot.gov', 'R Daneel', 'Olivaw', 'mls1010001', '/images/robot.jpg'), 
(12, 'Properties, Inc.', 'name@business.com', 'Person', 'Family', 'mls333123', '/images/picture.png');

INSERT INTO dywaboh.properties (id, address, bathrooms, bedrooms, central_cooling, central_heating, city, garage, listing_date, price, school_area, square_footage, state, status, zip, latitude, longitude, realtors_id)
VALUES
(1, '7711 N Troost Ave', 1.5, 2.0, true, true, 'Kansas City', true, '2021-07-15', 215000.00, 'Area 1', 1704, 'MO', 'For Sale', 64118, 39.2348156, -94.5664927, 2),
(2, '5807 Olive St', 3.0, 2.5, false, true, 'Kansas City', false, '2021-02-03', 145000.00, 'Catholic', 2500, 'MO', 'Sold', 64130, 39.0208755, -94.5575869, 3),
(3, '1304 Cooper Dr', 4.0, 3.0, true, true, 'Raymore', true, '2020-11-29', 449950.00, 'Treadmoor', 4500, 'MO', 'For Sale', 64083, 38.8075628, -94.4777027, 1),
(4, '1021 N Parker Ter', 3.5, 2.5, false, false, 'Olathe', true, '2020-12-21', 312000.00, 'N/A', 2001, 'KS', 'For Sale', 66061, 38.8971371, -94.8338828, 1),
(5, '25053 W 112th St', 1, 1, true, true, 'Olathe', false, '2018-10-21', 720000.00, 'Trivial', 8999, 'KS', 'For Sale', 66061, 38.925749, -94.875698, 1),
(120, '1825 Rankin Dr', 2, 2, true, false, 'Independence', false, '2019-08-12', 235000.00, 'North School', 300, 'MO', 'For Sale', 64055, 39.068458, -94.4113972, 3),
(1400, '712 SW 36th Street Ter', 10, 15, true, true, 'Blue Springs', true, '2020-08-10', 1500000.00, 'All of them', 20000, 'MO', 'For Sale', 64015, 39.0121428, -94.3059162, 3);


INSERT INTO dywaboh.price_history (id, change_date, price, properties_id)
VALUES
(1, '2021-08-15', 250000.00, 1), 
(2, '2021-04-01', 300000.00, 1), 
(3, '2022-05-29', 900000.00, 5), 
(4, '2020-07-10', 350000.00, 1), 
(5, '2023-01-01', 250000.00, 120);

INSERT INTO dywaboh.images (id, image_file_path, upload_date, properties_id)
VALUES
(1, '/images/458479840.png', '2021-07-15', 1), 
(2, '/images/0987987ddd.jpg', '2021-07-15', 1), 
(3, '/images/87087098frefr.png', '2022-08-23', 2), 
(4, '/images/133131.jpg', '2020-01-18', 3), 
(5, '/images/325345235.jpg', '2020-01-19', 4), 
(6, '/images/2w3453252.png', '2020-02-20', 5), 
(7, '/images/87489405.png', '2020-02-20', 120), 
(11, '/images/780974.jpg', '2023-02-03', 1400), 
(23, '/images/58984069584.png', '2022-06-23', 3);

