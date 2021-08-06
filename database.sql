
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
    
CREATE TABLE "overlays" (
	"ID" SERIAL PRIMARY KEY,
	"user_id" VARCHAR (100) UNIQUE NOT NULL,
	"lat" numeric,
	"long" numeric,
	"notes" text,
	"mountain_id" numeric);

CREATE TABLE "mountain" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar);

INSERT INTO "overlays" ("ID", "user_id", "lat", "long", "notes", "mountain_id");
