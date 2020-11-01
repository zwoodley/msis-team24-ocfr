create table person (
	personID INT not null,
	fname VARCHAR(50) not null,
	lname VARCHAR(50) not null,
	dob DATE not null,
	gender VARCHAR(50) not null,
	addStreet VARCHAR(50) not null,
	addCity VARCHAR(50) not null,
	addState VARCHAR(50) not null,
	addZip VARCHAR(50) not null,
	email VARCHAR(50) not null,
	cellPhone VARCHAR(50),
	workPhone VARCHAR(50),
	homePhone VARCHAR(50),
	startDate DATE not null,
	position VARCHAR(11) not null,
	radioNum INT not null,
	isActive VARCHAR(50) not null,
	mainDepartment INT not null,
	secondaryDepartment INT,
	PRIMARY KEY (personID)
) ENGINE=INNODB;

create table memberCert (
	personID INT not null,
	certificationID INT not null,
FOREIGN KEY (personID) REFERENCES person(personID),
FOREIGN KEY (certificationID) REFERENCES certification(certificationID)
) ENGINE=INNODB;

create table certification (
	certificationID INT not null,
	certName VARCHAR(32) not null,
	certAgency VARCHAR(50) not null,
	certExp INT not null, 
	PRIMARY KEY (certificationID)
) ENGINE=INNODB;

insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (1, 'Brendin', 'MacAllester', '1953-01-29', 'Male', '6920 Arizona Crossing', 'Seattle', 'Washington', '98148', 'bmacallester0@acquirethisname.com', '206-377-2855', null, null, '2003-04-22', 'Lieutenant', 8, true, 10, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (2, 'Jaquelin', 'MacGilrewy', '1958-02-05', 'Female', '80 Fisk Alley', 'Vero Beach', 'Florida', '32969', 'jmacgilrewy1@time.com', '772-566-3468', null, null, '2016-02-28', 'Engineer', 5, true, 10, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (3, 'Thibaud', 'Tarbatt', '1969-10-05', 'Male', '98 Ryan Trail', 'Baltimore', 'Maryland', '21211', 'ttarbatt2@slate.com', '443-847-4256', null, '915-959-7066', '2000-06-15', 'Lieutenant', 14, true, 2, 5);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (4, 'Bat', 'Luke', '1974-08-20', 'Male', '3561 Darwin Center', 'San Francisco', 'California', '94137', 'bluke3@vistaprint.com', '415-259-4008', null, null, '1991-01-21', 'Chief', 5, true, 10, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (5, 'Jobie', 'Beckhurst', '1966-08-10', 'Female', '98 Logan Alley', 'Anniston', 'Alabama', '36205', 'jbeckhurst4@hostgator.com', '256-210-2283', '214-531-1476', null, '2017-02-25', 'Chief', 23, false, 6, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (6, 'Payton', 'Yeates', '1967-06-08', 'Male', '7387 American Ash Crossing', 'Denver', 'Colorado', '80279', 'pyeates5@usgs.gov', '303-361-8744', null, null, '2003-10-20', 'Engineer', 1, true, 1, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (7, 'Mitchael', 'O''Roan', '1980-07-03', 'Male', '29 Roxbury Road', 'Indianapolis', 'Indiana', '46254', 'moroan6@behance.net', '317-231-1693', null, null, '2019-11-13', 'Firefighter', 23, false, 2, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (8, 'Jamaal', 'Mielnik', '1952-04-23', 'Male', '0 Vernon Street', 'Los Angeles', 'California', '90045', 'jmielnik7@sohu.com', '650-635-6839', null, '864-776-8240', '2001-02-15', 'Chief', 18, false, 1, 8);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (9, 'Giustino', 'Kemmish', '1954-02-24', 'Male', '5648 Paget Avenue', 'Alhambra', 'California', '91841', 'gkemmish8@zimbio.com', '626-974-6727', '806-317-8199', null, '2006-11-14', 'Firefighter', 23, true, 3, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (10, 'Marven', 'Pridham', '1960-03-19', 'Male', '45141 Twin Pines Junction', 'Boise', 'Idaho', '83705', 'mpridham9@pagesperso-orange.fr', '208-867-8613', null, '650-455-4217', '1991-02-24', 'Captain', 7, false, 9, 4);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (11, 'Cleavland', 'Stedall', '1953-09-04', 'Male', '0 Melby Drive', 'Bakersfield', 'California', '93305', 'cstedalla@unesco.org', '805-434-9942', null, '540-667-8558', '2019-03-08', 'Captain', 20, true, 10, 6);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (12, 'Christiana', 'Tuttle', '1953-07-02', 'Female', '5 Monica Point', 'Las Cruces', 'New Mexico', '88006', 'ctuttleb@comcast.net', '505-681-7417', null, null, '2002-08-15', 'Lieutenant', 18, false, 4, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (13, 'Hilda', 'Rey', '1959-01-25', 'Female', '1592 Straubel Plaza', 'Milwaukee', 'Wisconsin', '53285', 'hreyc@guardian.co.uk', '414-607-1929', null, '480-282-0427', '1995-06-15', 'Lieutenant', 5, false, 1, 3);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (14, 'Susanna', 'Leftly', '1962-04-06', 'Female', '30 Spenser Plaza', 'Arlington', 'Texas', '76011', 'sleftlyd@virginia.edu', '214-787-4040', null, null, '2011-01-05', 'Captain', 5, true, 2, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (15, 'Hagan', 'Morsey', '1960-09-18', 'Male', '355 Hermina Crossing', 'New York City', 'New York', '10125', 'hmorseye@wp.com', '212-109-0679', null, null, '2010-12-13', 'Chief', 14, false, 8, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (16, 'Louisa', 'Acum', '1960-10-11', 'Female', '62889 Buena Vista Drive', 'Tyler', 'Texas', '75799', 'lacumf@merriam-webster.com', '903-973-2889', null, null, '2014-02-22', 'Lieutenant', 20, true, 6, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (17, 'Celestia', 'Morteo', '1967-07-16', 'Female', '3158 Lien Court', 'Sioux City', 'Iowa', '51110', 'cmorteog@blinklist.com', '712-859-4966', null, null, '2010-04-01', 'Lieutenant', 20, false, 5, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (18, 'Maggie', 'Oddey', '1966-02-25', 'Female', '2601 Hoard Plaza', 'Cleveland', 'Ohio', '44125', 'moddeyh@independent.co.uk', '440-674-5191', null, null, '2014-04-20', 'Captain', 9, false, 9, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (19, 'Isadore', 'Tilne', '1978-01-20', 'Male', '6 Warner Point', 'Fort Lauderdale', 'Florida', '33355', 'itilnei@blogger.com', '754-478-8441', null, null, '1998-03-16', 'Lieutenant', 4, true, 8, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (20, 'Federico', 'Conachy', '1966-01-07', 'Male', '0 Norway Maple Pass', 'Albuquerque', 'New Mexico', '87110', 'fconachyj@mediafire.com', '505-395-3768', null, null, '2002-02-18', 'Lieutenant', 10, false, 6, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (21, 'Aron', 'Armatys', '1965-09-01', 'Male', '47 Mcguire Drive', 'Pinellas Park', 'Florida', '34665', 'aarmatysk@weather.com', '850-586-6899', '513-880-0270', null, '2018-07-30', 'Engineer', 5, true, 5, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (22, 'Klarika', 'Schrei', '1978-10-05', 'Female', '2908 Brickson Park Road', 'Pensacola', 'Florida', '32595', 'kschreil@alexa.com', '850-357-8133', null, '914-594-6594', '2000-12-23', 'Lieutenant', 9, true, 8, 3);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (23, 'Goddard', 'Begent', '1966-02-23', 'Male', '1033 Brickson Park Center', 'San Francisco', 'California', '94142', 'gbegentm@independent.co.uk', '415-474-4849', null, null, '1990-12-07', 'Lieutenant', 5, true, 3, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (24, 'Torie', 'Eate', '1958-10-20', 'Female', '20947 Arizona Parkway', 'Brooklyn', 'New York', '11231', 'teaten@bluehost.com', '917-848-2528', '239-858-1602', null, '2008-09-14', 'Chief', 12, false, 10, null);
insert into person (personID, fname, lname, dob, gender, addStreet, addCity, addState, addZip, email, cellPhone, workPhone, homePhone, startDate, position, radioNum, isActive, mainDepartment, secondaryDepartment) values (25, 'Tait', 'Rosettini', '1973-01-31', 'Male', '45 Bunting Place', 'San Antonio', 'Texas', '78296', 'trosettinio@omniture.com', '210-525-7378', null, null, '1996-03-22', 'Firefighter', 6, false, 6, null);

insert into memberCert (personID, certificationID) values (1, 35);
insert into memberCert (personID, certificationID) values (2, 34);
insert into memberCert (personID, certificationID) values (3, 33);
insert into memberCert (personID, certificationID) values (4, 32);
insert into memberCert (personID, certificationID) values (5, 31);
insert into memberCert (personID, certificationID) values (6, 30);
insert into memberCert (personID, certificationID) values (7, 29);
insert into memberCert (personID, certificationID) values (8, 28);
insert into memberCert (personID, certificationID) values (9, 27);
insert into memberCert (personID, certificationID) values (10, 26);
insert into memberCert (personID, certificationID) values (11, 25);
insert into memberCert (personID, certificationID) values (12, 24);
insert into memberCert (personID, certificationID) values (13, 23);
insert into memberCert (personID, certificationID) values (14, 22);
insert into memberCert (personID, certificationID) values (15, 21);
insert into memberCert (personID, certificationID) values (16, 20);
insert into memberCert (personID, certificationID) values (17, 19);
insert into memberCert (personID, certificationID) values (18, 18);
insert into memberCert (personID, certificationID) values (19, 17);
insert into memberCert (personID, certificationID) values (20, 16);
insert into memberCert (personID, certificationID) values (21, 15);
insert into memberCert (personID, certificationID) values (22, 14);
insert into memberCert (personID, certificationID) values (23, 13);
insert into memberCert (personID, certificationID) values (24, 12);
insert into memberCert (personID, certificationID) values (25, 11);
insert into memberCert (personID, certificationID) values (1, 10);
insert into memberCert (personID, certificationID) values (2, 9);
insert into memberCert (personID, certificationID) values (3, 8);
insert into memberCert (personID, certificationID) values (4, 7);
insert into memberCert (personID, certificationID) values (5, 6);
insert into memberCert (personID, certificationID) values (6, 5);
insert into memberCert (personID, certificationID) values (7, 4);
insert into memberCert (personID, certificationID) values (8, 3);
insert into memberCert (personID, certificationID) values (9, 2);
insert into memberCert (personID, certificationID) values (10, 1);

insert into certification (certificationID, certName, certAgency, certExp) values (1, 'EMT-I', 'Universitas Pattimura', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (2, 'CPR Instructor', 'Russian-Armenian (Slavonic) State University', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (3, 'Firefighter I', 'Pedagogical University of Kielce', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (4, 'NRP', 'Uzhgorod National University', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (5, 'TECC', 'Taipei Physical Education College', 5);
insert into certification (certificationID, certName, certAgency, certExp) values (6, 'EMT-B Instructor', 'Lamar University - Port Arthur', 6);
insert into certification (certificationID, certName, certAgency, certExp) values (7, 'CPR for Healthcare Providers', 'Brigham Young University', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (8, 'EMT-B Instructor', 'Universidad Católica Santa María La Antigua', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (9, 'POST', 'Sultan Abdul Halim Muadzam Shah Polytechnic', 5);
insert into certification (certificationID, certName, certAgency, certExp) values (10, 'TECC', 'Yeungnam University', 5);
insert into certification (certificationID, certName, certAgency, certExp) values (11, 'Firefighter I', 'Mount Olive College', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (12, 'TECC', 'Steinbeis-Hochschule-Berlin', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (13, 'CPR Instructor', 'Royal lnstitute of Technology', 7);
insert into certification (certificationID, certName, certAgency, certExp) values (14, 'TCCC', 'Webb Institute', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (15, 'POST', 'Beijing Foreign Studies University', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (16, 'EMT-B Instructor', 'Qafqaz University', 1);
insert into certification (certificationID, certName, certAgency, certExp) values (17, 'EMT-B', 'Cihan University', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (18, 'ACLS', 'Ludwik Solski State Academy of Theatre in Cracow', 6);
insert into certification (certificationID, certName, certAgency, certExp) values (19, 'EMT-B Instructor', 'Yasuda Women''s University', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (20, 'A-EMT', 'Universidad Monsenor Oscar Arnulfo Romeo', 5);
insert into certification (certificationID, certName, certAgency, certExp) values (21, 'ACLS', 'Western Maryland College', 1);
insert into certification (certificationID, certName, certAgency, certExp) values (22, 'POST', 'Babcock University', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (23, 'EMT-B Instructor', 'Institut d''Etudes Politiques de Bordeaux', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (24, 'EMT-B Instructor', 'Ufa State Petroleum Technological University', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (25, 'EMT-B Instructor', 'Kyoto Bunkyo University', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (26, 'CPR for Healthcare Providers', 'City University College of Science and Technology', 4);
insert into certification (certificationID, certName, certAgency, certExp) values (27, 'CPR for the Professional Rescuer', 'Ballsbridge University ', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (28, 'POST', 'John Cabot University', 1);
insert into certification (certificationID, certName, certAgency, certExp) values (29, 'A-EMT', 'University of Kerala', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (30, 'TECC', 'Ivanovo State University of Chemistry and Technology', 5);
insert into certification (certificationID, certName, certAgency, certExp) values (31, 'EMT-I', 'Aichi University of Education', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (32, 'EMT-I', 'Yunnan Agriculture University', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (33, 'CPR for Healthcare Providers', 'Evangelische Fachhochschule Ludwigshafen Hochschule für Sozial- und Gesundheitswesen', 3);
insert into certification (certificationID, certName, certAgency, certExp) values (34, 'CPR Instructor', 'Florida Memorial College', 2);
insert into certification (certificationID, certName, certAgency, certExp) values (35, 'NRP', 'China University of Mining Technology - Beijing', 4);


