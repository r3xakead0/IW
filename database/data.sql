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

--

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Ha sufrido desmayos?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Tiene dolores en las articulaciones?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Presenta problemas de rodilla y/o tobillos?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Tuvo problemas cardíacos o cardiovasculares?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Tienes dolores lumbares, en alguna posición en específico?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Está ingiriendo medicaciones?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Trabaja más de 8 horas sentado?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Sufre hemorragias nasales?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Presenta pie plano o similar?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Ha sufrido convulsiones?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Tiene dolores cervicales?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿En la actualidad estas bajo algún tratamiento médico?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Considera que su calidad de sueño es baja?', TRUE, CURRENT_TIMESTAMP);

INSERT INTO backgroundquestions (description, active, createddate)
VALUES ('¿Toma baños de sol?', TRUE, CURRENT_TIMESTAMP);