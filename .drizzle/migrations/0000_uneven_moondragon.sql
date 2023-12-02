CREATE TABLE `roles` (
	`slug` varchar(50) NOT NULL,
	`title` varchar(50) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`created_by_id` varchar(50) NOT NULL,
	CONSTRAINT `roles_slug` PRIMARY KEY(`slug`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(50) NOT NULL,
	`full_name` varchar(100) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `roles` ADD CONSTRAINT `roles_created_by_id_users_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE cascade;