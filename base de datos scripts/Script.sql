-- Tabla champions
CREATE TABLE champions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  title VARCHAR(255),
  role VARCHAR(255),
  UNIQUE (name)  -- nombre unico
);

-- Tabla stats
CREATE TABLE stats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  champion_id INT,
  health FLOAT,
  armor FLOAT,
  attack_damage FLOAT,
  speed FLOAT,
  UNIQUE (champion_id),  -- Asegura que no haya duplicados por campeónes
  FOREIGN KEY (champion_id) REFERENCES champions(id) 
);

-- estadisticas 2
CREATE TABLE stats2(
id INT AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(255),
Classes VARCHAR(255),
Difficulty VARCHAR(255),
Range_type VARCHAR(255),
UNIQUE (name) -- nombre unico
);

create table usuarios(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null
);



create table items(
id INT auto_increment primary key, 
name varchar(255),
total INT,
image varchar(255)
)

INSERT INTO items (name, total, image)
VALUES ('Health Potion', 50, '../../assets/objetos/2003.png');





CREATE TABLE build_personalizada (
  id INT AUTO_INCREMENT PRIMARY KEY,
  champion_id INT NOT NULL,
  user_id INT NOT NULL,
  item_id INT,
  FOREIGN KEY (champion_id) REFERENCES champions(id),
  FOREIGN KEY (user_id) REFERENCES usuarios(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);



create table objetos(
id INT auto_increment primary key,
nombre varchar(255) not null,
precio INT
)



-- Crear la tabla 'counter_matchups' con los datos de cada campeón
CREATE TABLE counter_matchups (
    id int AUTO_INCREMENT PRIMARY KEY,
    campeon VARCHAR(100),
    winrate DECIMAL(5, 2),  
    numero_partidas INT,
    champion_id INT NOT NULL,
    FOREIGN KEY (champion_id) REFERENCES champions(id)  
);


create table matchup(
    id int AUTO_INCREMENT PRIMARY KEY,
    campeon VARCHAR(100),
    winrate DECIMAL(5, 2), 
    numero_partidas INT,
    champion_id INT NOT NULL,
    FOREIGN KEY (champion_id) REFERENCES champions(id)  
)

create table goodMatchup(
    id int AUTO_INCREMENT PRIMARY KEY,
	campeon VARCHAR(100),
	winrate DECIMAL(5, 2), 
	numero_partidas INT,
	champion_id INT NOT NULL,
	FOREIGN KEY (champion_id) REFERENCES champions(id) 
)


CREATE TABLE CoreItems (
  id INT AUTO_INCREMENT PRIMARY KEY,
  champion_id INT,  
  item1 INT, 
  item2 INT, 
  item3 INT,
  pickRate DECIMAL,
  games INT,
  winRate DECIMAL,
  FOREIGN KEY (champion_id) REFERENCES champions(id),
  FOREIGN KEY (item1) REFERENCES items(id),
  FOREIGN KEY (item2) REFERENCES items(id),
  FOREIGN KEY (item3) REFERENCES items(id)
);


CREATE TABLE ObjetosBuilds (
  id INT AUTO_INCREMENT PRIMARY KEY,
  champion_id INT,  
  item INT,     
  pickRate DECIMAL(5,2),
  games INT,
  winRate DECIMAL(5,2),
  FOREIGN KEY (champion_id) REFERENCES champions(id),
  FOREIGN KEY (item) REFERENCES items(id)
);


CREATE TABLE StarterItems (
  id INT AUTO_INCREMENT PRIMARY KEY,
  champion_id INT,  -- Relacionado con la tabla champions
  item1 INT, 
  item2 INT, 
  item3 INT,  
  pickRate DECIMAL(5,2),
  games INT,
  winRate DECIMAL(5,2),
  FOREIGN KEY (champion_id) REFERENCES champions(id),
  FOREIGN KEY (item1) REFERENCES items(id),
  FOREIGN KEY (item2) REFERENCES items(id),
  FOREIGN KEY (item3) REFERENCES items(id)
);


CREATE TABLE Boots (
  id INT AUTO_INCREMENT PRIMARY KEY,
  champion_id INT, 
  item INT,     
  pickRate DECIMAL(5,2),
  games INT,
  winRate DECIMAL(5,2),
  FOREIGN KEY (champion_id) REFERENCES champions(id),
  FOREIGN KEY (item) REFERENCES items(id)
);






