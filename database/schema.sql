CREATE DATABASE ironwarriors
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Peru.1252'
    LC_CTYPE = 'Spanish_Peru.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

USE ironwarriors;

CREATE TABLE IF NOT EXISTS profiles(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
	description text,
	active boolean NOT NULL DEFAULT FALSE,
   	updateddate timestamp,
    createddate timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS users(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
	password text NOT NULL CHECK (password <> ''),
	fullname text NOT NULL CHECK (fullname <> ''),
	email text NOT NULL CHECK (email <> ''),
    profileId integer NOT NULL REFERENCES profiles(id),
	active boolean NOT NULL DEFAULT FALSE,
   	updateddate timestamp,
    createddate timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS backgroundquestions(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	description varchar(100) NOT NULL CHECK (description <> ''),
	active boolean NOT NULL DEFAULT FALSE,
   	updateddate timestamp,
    createddate timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS athletes(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    firstname varchar(50) NOT NULL CHECK (firstname <> ''),
	lastname varchar(50) NOT NULL CHECK (lastname <> ''),
	birthdate date NOT NULL,
	phonenumber varchar(20),
	running boolean NOT NULL DEFAULT FALSE,
	cycling boolean NOT NULL DEFAULT FALSE,
	swimming boolean NOT NULL DEFAULT FALSE,
	conditioning boolean NOT NULL DEFAULT FALSE,
	strength boolean NOT NULL DEFAULT FALSE,
	otherobjectives text,
	size integer,
	weight integer,
	bloodtype varchar(10),
	fatpercentage numeric(5,2),
	waistcircumference integer,
	middlethighcircumference integer,
	injuries text,
	otheractivities text,
	backgrounddescription text,
	objectives text,
	nutritiondescription text,
	active boolean NOT NULL DEFAULT FALSE,
   	updateddate timestamp,
    createddate timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS athletesbackground(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	athleteid integer NOT NULL REFERENCES athletes(id),
	backgroundquestionid integer NOT NULL REFERENCES backgroundquestions(id)
);