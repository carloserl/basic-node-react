-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2019 a las 20:50:59
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdwin`
--


--
-- Estructura de tabla para la tabla `tablaextra1`
--

CREATE TABLE `tablaextra1` (
  `TabID` int(11) UNSIGNED NOT NULL,
  `TabSeleccionado` tinyint(1) NOT NULL,
  `TabCodigo` varchar(50) NOT NULL,
  `TabNombre` varchar(50) NOT NULL,
  `TabCampo1` varchar(50) DEFAULT NULL,
  `TabCampo2` varchar(50) DEFAULT NULL,
  `TabCampo3` varchar(50) DEFAULT NULL,
  `TabCampo4` varchar(50) DEFAULT NULL,
  `TabCampo5` varchar(50) DEFAULT NULL,
  `TabCampoRelacion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablaextra1`
--

INSERT INTO `tablaextra1` (`TabID`, `TabSeleccionado`, `TabCodigo`, `TabNombre`, `TabCampo1`, `TabCampo2`, `TabCampo3`, `TabCampo4`, `TabCampo5`, `TabCampoRelacion`) VALUES
(1, 1, '1', 'Azucar', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(18, 1, '2', 'Sal', NULL, NULL, NULL, NULL, NULL, NULL),
(19, 1, '3', 'Leche', NULL, NULL, NULL, NULL, NULL, NULL),
(20, 1, '0001', 'Cangrejo 1', NULL, NULL, NULL, NULL, NULL, NULL),
(21, 1, '4', 'Huevo', NULL, NULL, NULL, NULL, NULL, NULL),
(22, 1, '5', 'Mantequilla', NULL, NULL, NULL, NULL, NULL, NULL),
(23, 1, '6', 'Vainilla', NULL, NULL, NULL, NULL, NULL, NULL),
(24, 1, '7', 'Avellana', NULL, NULL, NULL, NULL, NULL, NULL),
(25, 1, '8', 'Cangrejo', '', '', '', '', '', ''),
(26, 1, '9', 'Pescado', '', '', '', '', '', ''),
(27, 1, '1', 'Azucar', 'test insertar 12', NULL, NULL, NULL, NULL, NULL),
(28, 1, '2', 'Sal', 'Test Insert 13', NULL, NULL, NULL, NULL, NULL),
(29, 1, '2', 'Sal', 'Test Insert 14', NULL, NULL, NULL, NULL, NULL),
(30, 1, '2', 'Sal', 'Test Insert 15', NULL, NULL, NULL, NULL, NULL),
(31, 1, '1', 'Azucar Morena BVA', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(32, 1, '1', 'Azucar Morena BVA 2', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(33, 1, '1', 'Azucar Morena BVA 3', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(34, 1, '1', 'Azucar Morena BVA 4', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(35, 1, '1', 'Azucar Morena BVA 5', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(36, 1, '1', 'Azucar Morena BVA 6', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(37, 1, '1', 'Azucar Morena BVA 7', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(38, 1, '1', 'Azucar Morena BVA 8', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(39, 1, '1', 'Azucar Morena BVA 9', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(40, 1, '1', 'Azucar Morena BVA 10', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(41, 1, '1', 'Azucar Morena BVA 11', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(42, 1, '1', 'Azucar Morena BVA 12', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(43, 1, '1', 'Azucar Morena BVA 13', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(44, 1, '1', 'Azucar Morena BVA 14', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(45, 1, '1', 'Azucar Morena BVA 15', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(46, 1, '1', 'true', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(47, 1, '1', '0', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(48, 1, '1', 'Azucar Morena BVA 20', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(49, 1, '1', 'Azucar Morena BVA 21', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(50, 1, '1', 'Azucar Morena BVA 23', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(51, 1, '1', 'Azucar Morena BVA 24', 'test insertar', NULL, NULL, NULL, NULL, NULL),
(52, 1, '1', 'Azucar Morena BVA 25', 'test insertar', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaextra2`
--

CREATE TABLE `tablaextra2` (
  `TabID` int(11) UNSIGNED NOT NULL,
  `TabSeleccionado` tinyint(1) NOT NULL,
  `TabCodigo` varchar(50) NOT NULL,
  `TabNombre` varchar(50) NOT NULL,
  `TabCampo1` varchar(50) DEFAULT NULL,
  `TabCampo2` varchar(50) DEFAULT NULL,
  `TabCampo3` varchar(50) DEFAULT NULL,
  `TabCampo4` varchar(50) DEFAULT NULL,
  `TabCampo5` varchar(50) DEFAULT NULL,
  `TabCampoRelacion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablaextra2`
--

INSERT INTO `tablaextra2` (`TabID`, `TabSeleccionado`, `TabCodigo`, `TabNombre`, `TabCampo1`, `TabCampo2`, `TabCampo3`, `TabCampo4`, `TabCampo5`, `TabCampoRelacion`) VALUES
(4, 1, '1', 'Galpon A update', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, '2', 'Galpon B', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 1, '3', 'Producto Terminado', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 1, '4', 'Almacen de recepcion', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 1, '5', 'Puerto A', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaextra3`
--

CREATE TABLE `tablaextra3` (
  `TabID` int(11) NOT NULL,
  `TabSeleccionado` tinyint(1) NOT NULL,
  `TabCodigo` varchar(50) NOT NULL,
  `TabNombre` varchar(50) NOT NULL,
  `TabCampo1` varchar(50) DEFAULT NULL,
  `TabCampo2` varchar(50) DEFAULT NULL,
  `TabCampo3` varchar(50) DEFAULT NULL,
  `TabCampo4` varchar(50) DEFAULT NULL,
  `TabCampo5` varchar(50) DEFAULT NULL,
  `TabCampoRelacion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablaextra3`
--

INSERT INTO `tablaextra3` (`TabID`, `TabSeleccionado`, `TabCodigo`, `TabNombre`, `TabCampo1`, `TabCampo2`, `TabCampo3`, `TabCampo4`, `TabCampo5`, `TabCampoRelacion`) VALUES
(1, 1, '0001', 'Cangrejo 1', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 1, '1', 'ATTA', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 1, '2', 'Savoy', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 1, '3', 'Parmalat', NULL, NULL, NULL, NULL, NULL, NULL),
(10, 1, '4', 'Casa', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 1, '5', 'Juan Perez', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaextra4`
--

CREATE TABLE `tablaextra4` (
  `TabID` int(11) UNSIGNED NOT NULL,
  `TabSeleccionado` tinyint(1) NOT NULL,
  `TabCodigo` varchar(50) NOT NULL,
  `TabNombre` varchar(50) NOT NULL,
  `TabCampo1` varchar(50) DEFAULT NULL,
  `TabCampo2` varchar(50) DEFAULT NULL,
  `TabCampo3` varchar(50) DEFAULT NULL,
  `TabCampo4` varchar(50) DEFAULT NULL,
  `TabCampo5` varchar(50) DEFAULT NULL,
  `TabCampoRelacion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablaextra4`
--

INSERT INTO `tablaextra4` (`TabID`, `TabSeleccionado`, `TabCodigo`, `TabNombre`, `TabCampo1`, `TabCampo2`, `TabCampo3`, `TabCampo4`, `TabCampo5`, `TabCampoRelacion`) VALUES
(6, 1, '001', 'Tara 100', '100', '', '', '', '', ''),
(7, 1, '002', 'Tara 200', '200', '', '', '', '', ''),
(8, 1, '003', 'Tara 300', '300', '', '', '', '', ''),
(9, 1, '004', 'Tara 400', '400', '', '', '', '', ''),
(10, 1, '005', 'Tara 500', '500', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaextra5`
--

CREATE TABLE `tablaextra5` (
  `TabID` int(11) UNSIGNED NOT NULL,
  `TabSeleccionado` tinyint(1) NOT NULL,
  `TabCodigo` varchar(50) NOT NULL,
  `TabNombre` varchar(50) NOT NULL,
  `TabCampo1` varchar(50) DEFAULT NULL,
  `TabCampo2` varchar(50) DEFAULT NULL,
  `TabCampo3` varchar(50) DEFAULT NULL,
  `TabCampo4` varchar(50) DEFAULT NULL,
  `TabCampo5` varchar(50) DEFAULT NULL,
  `TabCampoRelacion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablaextra5`
--

INSERT INTO `tablaextra5` (`TabID`, `TabSeleccionado`, `TabCodigo`, `TabNombre`, `TabCampo1`, `TabCampo2`, `TabCampo3`, `TabCampo4`, `TabCampo5`, `TabCampoRelacion`) VALUES
(1, 1, '1', 'Cuello1', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, '2', 'Cuello2', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, '3', 'Cuello3', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, '4', 'Cuello4', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, '5', 'Cuello5', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 1, '6', 'Cuello6', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 1, '7', 'Cuello7', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 1, '8', 'Cuello8', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 1, '9', 'Cuello9', NULL, NULL, NULL, NULL, NULL, NULL),
(10, 1, '10', 'Cuello10', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 1, '11', 'Cuello11', NULL, NULL, NULL, NULL, NULL, NULL);


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `UsuUsuario` varchar(50) NOT NULL,
  `UsuNombre` varchar(50) NOT NULL,
  `UsuClave` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`UsuUsuario`, `UsuNombre`, `UsuClave`) VALUES
('admin', 'admin', 'admin'),
('admin1', 'admin1', 'admin1'),
('adminPost', 'adminPost', 'adminPost'),
('carlos', 'carlos', 'carlos'),
('luis', 'luis', 'luis'),
('PADINI', 'PADINI', '7052'),
('user1', 'user1', '1234');

--
-- Índices para tablas volcadas
--


--
-- Indices de la tabla `tablaextra1`
--
ALTER TABLE `tablaextra1`
  ADD PRIMARY KEY (`TabID`);

--
-- Indices de la tabla `tablaextra2`
--
ALTER TABLE `tablaextra2`
  ADD PRIMARY KEY (`TabID`);

--
-- Indices de la tabla `tablaextra3`
--
ALTER TABLE `tablaextra3`
  ADD PRIMARY KEY (`TabID`);

--
-- Indices de la tabla `tablaextra4`
--
ALTER TABLE `tablaextra4`
  ADD PRIMARY KEY (`TabID`);

--
-- Indices de la tabla `tablaextra5`
--
ALTER TABLE `tablaextra5`
  ADD PRIMARY KEY (`TabID`);

--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`UsuUsuario`);

--
ALTER TABLE `tablaextra1`
  MODIFY `TabID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
