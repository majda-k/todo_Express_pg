/* Replace with your SQL commands */


CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    "isDone" BOOLEAN DEFAULT false,
    priority VARCHAR(50)
);

TABLESPACE pg_default; ALTER TABLE public . "tasks" OWNER to postgres;