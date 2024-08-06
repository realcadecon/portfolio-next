-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
DO $$ BEGIN
 CREATE TYPE "public"."ProjType" AS ENUM('ALL', 'GAME', 'WORK', 'SIDE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE SEQUENCE "public"."t3-gallery_image_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "public"."drconner_webContent_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_portfolio_projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image" text NOT NULL,
	"ProjType" "ProjType" DEFAULT 'ALL'
);

*/