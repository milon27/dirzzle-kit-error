ALTER TABLE `users` ADD CONSTRAINT `uq_id_time` UNIQUE(`full_name`,`created_at`);--> statement-breakpoint
ALTER TABLE `users` ADD `gender` enum('male','female') DEFAULT 'male' NOT NULL;