USE ironwarriors;

-- Profiles

INSERT INTO profiles (name, description, active, createddate)
VALUES ('Administrador', 'Administrador del Sistema', TRUE, CURRENT_TIMESTAMP);

INSERT INTO profiles (name, description, active, createddate)
VALUES ('Entrenador', 'Perfil del Entrenador', TRUE, CURRENT_TIMESTAMP);

INSERT INTO profiles (name, description, active, createddate)
VALUES ('Atleta', 'Perfil del Atleta', TRUE, CURRENT_TIMESTAMP);

-- Users

INSERT INTO users (name, password, fullname, email, profileid, active, createddate)
VALUES ('admin', '$2a$10$RtmjRYFJkMkY3HpfK9UkNuu/6S9aKkP0t4vYDVP/0ZSekDgjhg61C', 'Administrador', 'admin@mail.com', 1, TRUE, CURRENT_TIMESTAMP);
