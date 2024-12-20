CREATE DATABASE IF NOT EXISTS blue;
use blue;
CREATE TABLE IF NOT EXISTS Productos(
id int auto_increment primary key,
nombre varchar (100) not null,
descripción varchar (100) not null,
coste_actual decimal (5,2) not null,
precio_listado decimal (5,2) not null,
unidad_de_venta varchar (50) not null,
estado enum ('activo', 'inactivo') not null);


