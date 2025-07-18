-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-07-2025 a las 18:25:16
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `c&a`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Descripcion` varchar(255) NOT NULL,
  `Precio` float NOT NULL,
  `Imagen` varchar(255) NOT NULL,
  `Tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`Id`, `Nombre`, `Descripcion`, `Precio`, `Imagen`, `Tipo`) VALUES
(1, 'Playera azul', 'Playera azul de manga larga', 350, 'playera-azul-manga-larga.jpg', 'Hombre'),
(2, 'Vestido negro', 'Vestido negro con corazones', 500, 'vestido-negro.png', 'Mujer'),
(3, 'Pantalón de mezclilla', 'Pantalón de mezclilla recto', 250, 'pantalon-mezclilla.jpg', 'Hombre'),
(4, 'Short de mezclilla', 'Short con bolsas coloridas', 200, 'shorts-mujer.png', 'Mujer'),
(5, 'Bermuda verde', 'Bermuda para hombre de color verde', 200, 'bermuda-de-hombre.jpg', 'Hombre'),
(6, 'Blusa rosa', 'Blusa de flores rosas', 150, 'blusa-rosa.png', 'Mujer'),
(7, 'Botas negras', 'Botas negras militares', 800, 'botas-negras.jpg', 'Unisex'),
(8, 'Camisas a cuadros', 'Camisa a cuadros azul', 200, 'camisa-cuadros.jpg', 'Hombre'),
(9, 'Camisa blanca', 'Camisa blanca formal', 200, 'camisa-formal-mujer.webp', 'Mujer'),
(10, 'Camisa hawaiiana', 'Camisa hawaiiana verde con flores', 150, 'camisa-hawaiana.jpg', 'Hombre'),
(11, 'Camisa polo', 'Camisa polo tinta', 100, 'camisa-polo-mujer.jpg', 'Mujer'),
(12, 'Camisa polo', 'Camisa polo blanca', 100, 'camisa-polo.jpg', 'Hombre'),
(13, 'Playera sin mangas', 'Playera sinmangas negra', 50, 'camisa-sin-mangas.jpg', 'Hombre'),
(14, 'Chmarra de cuero', 'Chamarra de cuero de motociclista', 850, 'chamarra-de-cuero.jpg', 'Unisex'),
(15, 'Falda negra', 'Falda negra lisa', 200, 'falda-negra.jpg', 'Mujer'),
(16, 'Gorra baseball', 'Gorra roja de baseball', 100, 'gorra-baseball.jpg', 'Unisex'),
(17, 'Pantalón cargo', 'Pantalón cargo gris', 400, 'pantalon-cargo-hombre.jpg', 'Hombre'),
(18, 'Pantalón cargo mujer', 'Pantalón cargo azul', 400, 'pantalon-cargo-mujer.jpg', 'Mujer'),
(19, 'Pantalón mezclilla', 'Pantalón mezclilla', 350, 'pantalon-mezclilla-mujer.jpeg', 'Mujer'),
(20, 'Pantalón mezclilla', 'Pantalón mezclilla', 350, 'pantalon-mezclilla.jpg', 'Hombre'),
(21, 'Pantalón Minnie', 'Pantalón de mezclilla de Minnie', 200, 'pantalon-nina.jpg', 'Niño'),
(22, 'Pantalón niño', 'Pantalón de mezclilla para niños', 200, 'pantalon-nino.jpg', 'Niño'),
(23, 'Pantalón formal', 'Pantalón formal gris oscuro', 500, 'pantalon-vestir-hombre.jpg', 'Hombre'),
(24, 'Pantalón formal', 'Pantalón formal negro', 500, 'pantalon-vestir-mujer.png', 'Mujer'),
(25, 'Playera 3/4', 'Playera unisex de 3/4', 150, 'playera-3-4.jpg', 'Unisex'),
(26, 'Playera Elsa Frozen', 'Playera de Elsa de frozen', 150, 'playera-elsa.jpg', 'Niño'),
(27, 'Playera de futbol', 'Playera de LFC de futbol', 200, 'playera-futbol.png', 'Hombre'),
(28, 'Playera rosa', 'Playera rosa con estampado', 150, 'playera-rosa.jpg', 'Mujer'),
(29, 'Playera Spiderman', 'Playera de spiderman', 150, 'playera-spiderman.jpg', 'Niño'),
(30, 'Playera Superman', 'Playera de superman', 150, 'playera-superman.jpg', 'Niño'),
(31, 'Saco formal', 'Saco formal gris', 600, 'saco-hombre.jpg', 'Hombre'),
(32, 'Short niña', 'Short para niña de mezclilla', 200, 'short-nina.jpg', 'Niño'),
(33, 'Short niño', 'Short para niño verde', 200, 'short-verde.jpg', 'Niño'),
(34, 'Sudadera negra', 'Sudadera negra', 200, 'sudadera-negra.jpg', 'Unisex'),
(35, 'Sudadera verde', 'Sudadera verde', 200, 'sudadera-verde.jpg', 'Unisex'),
(36, 'Sueter rayas', 'Sueter gris a rayas negras y roja', 300, 'sueter-rayas-nino.jpg', 'Niño'),
(37, 'Sueter rojo', 'Sueter rojo tejido', 500, 'sueter-rojo.jpg', 'Mujer'),
(38, 'Tacones rojos', 'Tacones altos rojos', 350, 'tacones-rojos.jpg', 'Mujer'),
(39, 'Tenis blancos', 'Tenis blancos casuales', 600, 'tenis-blancos.jpg', 'Mujer'),
(40, 'Tenis negros', 'Tenis negros casuales', 600, 'tenis-negros.png', 'Hombre'),
(41, 'Tenis blancos', 'Tenis blancos con rosa y azul', 750, 'tenis-nina.jpg', 'Niño'),
(42, 'Tenis deportivos', 'Tenis negros con azul', 750, 'tenis-nino.jpg', 'Niño'),
(43, 'Vestido turquesa', 'Vestido turquesa', 500, 'vestido-de-nina.jpg', 'Niño'),
(44, 'Vestido azul de gala', 'Vestido azul largo de gala', 850, 'vestido-gala.png', 'Mujer'),
(45, 'Zapatos formales', 'Zapatos formales negros', 800, 'zapatos-hombre.jpg', 'Hombre');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
