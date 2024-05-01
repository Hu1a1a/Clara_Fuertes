-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2024-05-01 21:44:25
-- 服务器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `cf`
--

-- --------------------------------------------------------

--
-- 表的结构 `level1`
--

CREATE TABLE `level1` (
  `id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` longtext NOT NULL,
  `Price` int(11) NOT NULL,
  `Img` longtext NOT NULL,
  `StripeId` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `level1`
--

INSERT INTO `level1` (`id`, `Name`, `Description`, `Price`, `Img`, `StripeId`) VALUES
(1, 'SANA TUS DIGESTIONES', 'Acompañamiento 1:1', 100, 'https://img.freepik.com/foto-gratis/rodajas-fruta-dispuestas-patron_23-2148145068.jpg', 'price_1PBg6hAIJEmvKbBUMgw551Sy'),
(2, 'PÉRDIDA DE GRASA', 'Acompañamiento 1:1', 100, 'https://img.freepik.com/foto-gratis/hilera-uvas-pomelo-melon-platano-uvas-pina-sobre-fondo-pastel_23-2148103640.jpg', 'price_1PBg70AIJEmvKbBUpoVZqRp7');

-- --------------------------------------------------------

--
-- 表的结构 `level2`
--

CREATE TABLE `level2` (
  `id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` longtext NOT NULL,
  `Img` longtext NOT NULL,
  `Duracion` int(11) NOT NULL,
  `level1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `level2`
--

INSERT INTO `level2` (`id`, `Name`, `Description`, `Img`, `Duracion`, `level1`) VALUES
(5, 'Semana 0  ', 'Bienvenida', '', 7, 1),
(6, 'Fase 1. Semana 1', 'Renovación', '', 7, 1),
(7, 'Fase 1. Semana 2', 'Renovación', '', 7, 1),
(12, 'Fase 1. Semana 3', 'Renovación', '', 7, 1),
(13, 'Fase 1. Semana 4', 'Renovación', '', 7, 1),
(14, 'Fase 1. Semana 5', 'Renovación', '', 7, 1),
(15, 'Fase 1. Semana 6', 'Renovación', '', 7, 1),
(16, 'Fase 1. Semana 7', 'Renovación', '', 7, 1),
(17, 'Fase 1. Semana 8', 'Renovación', '', 7, 1),
(18, 'Fase 1. Semana 9', 'Renovación', '', 7, 1),
(19, 'Fase 1. Semana 10', 'Renovación', '', 7, 1),
(20, 'Fase 1. Semana 11', 'Renovación', '', 7, 1),
(21, 'Fase 1. Semana 12', 'Renovación', '', 7, 1);

-- --------------------------------------------------------

--
-- 表的结构 `regemail`
--

CREATE TABLE `regemail` (
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Date` datetime NOT NULL,
  `Tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `regemail`
--

INSERT INTO `regemail` (`Name`, `Email`, `Date`, `Tipo`) VALUES
('yang', 'yang.ye.1@hotmail.com', '2024-04-07 18:33:53', 'Guia Ensalada');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `User` varchar(255) NOT NULL,
  `Pass` varchar(255) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `User`, `Pass`, `Token`, `Email`, `Phone`, `Admin`) VALUES
(1, 'ClaraFuertes', 'Nutricionista80', 'd44693f32b0c8b14f46f5fb8a6de26f5e19bfb9ff2af8a9210de7b3c291f47b1c98e25cc6ab6fd826956951c9f8b73fb4784204a7aa593611f4f629b876eabfa', 'clarafuertes.nutricion@gmail.com', '  b341', 1),
(2, 'YYZ', '123', 'ef047a798db653fb7f03acab30533f16d895357056fbd90b8959a54f228ebb3eee5d51bfd6061e9b945936cb69f0d6a31633bba43f87200609c704bbaa01bd46', 'yang.ye.1@hotmail.com', '', 0),
(3, 'adrian', 'Yang1231111', '', 'sfasdfda', '', 0),
(4, '5464564646', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(16, '546456464616', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(17, '546456464617', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(18, '546456464618', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(19, '546456464619', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(20, '546456464620', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(21, '546456464621', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(22, '546456464622', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(23, '546456464623', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(24, '546456464624', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(25, '546456464625', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(26, '546456464626', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(27, '546456464627', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(28, '546456464628', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(29, '546456464629', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(30, '546456464630', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(31, '546456464631', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(32, '546456464632', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(33, '546456464633', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(34, '546456464634', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(35, '546456464635', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(36, '546456464636', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0),
(37, '546456464637', 'Nutricion', '31d985ca7ce9e2db334fb0261774c10f3e36b2dd63fccb4d64629c5f72e81fc0d0dc1ca35cb1e44091db9eedead5d60b5a7329e5e2c3e91dd46f8eac3059bd47', 'yang.ye@e-bcsystems.com', '+34663571733', 0);

-- --------------------------------------------------------

--
-- 表的结构 `userpay`
--

CREATE TABLE `userpay` (
  `id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  `Price` float(10,2) NOT NULL,
  `BuyTime` date NOT NULL,
  `Expiration` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 表的结构 `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Src` text NOT NULL,
  `Description` longtext NOT NULL,
  `Adjunt` text NOT NULL,
  `level2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `video`
--

INSERT INTO `video` (`id`, `Name`, `Src`, `Description`, `Adjunt`, `level2`) VALUES
(17, 'Vídeos semana 0', '', 'Vídeos semana 0', '', 5),
(18, 'Vídeo 1. Titulo: Cómo va a ser el proceso de estas semanas', '', 'Vídeo 1. Titulo: Cómo va a ser el proceso de estas semanas', '', 5),
(19, 'Vídeo 2. explicación ficha de seguimiento', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=bf133da0-8040-4b5b-ae3f-f83cadcabc72', 'Vídeo 2. explicación ficha de seguimiento', '', 5),
(20, 'Vídeo 3. Entendiendo la alimentación equilibrada. Macronutrientes y plato saludable\r\n', '', 'Vídeo 3. Entendiendo la alimentación equilibrada. Macronutrientes y plato saludable', '', 5),
(21, 'Vídeo 4. Coaching: Establece tu objetivo y tus Paraqués', '', 'Vídeo 4. Coaching: Establece tu objetivo y tus Paraqués', '', 5),
(22, 'Descargables semana 0', '', 'Descargables semana 0', '', 5),
(23, 'Descargable 1. La prueba del bicarbonato', '', 'Descargable 1. La prueba del bicarbonato', '', 5),
(24, 'Descargable 2. Ejercicio de Coaching ', '', 'Descargable 2. Ejercicio de Coaching ', '', 5);

--
-- 转储表的索引
--

--
-- 表的索引 `level1`
--
ALTER TABLE `level1`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `level2`
--
ALTER TABLE `level2`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `userpay`
--
ALTER TABLE `userpay`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `level1`
--
ALTER TABLE `level1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `level2`
--
ALTER TABLE `level2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- 使用表AUTO_INCREMENT `userpay`
--
ALTER TABLE `userpay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
