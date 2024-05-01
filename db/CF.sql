-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2024-05-01 17:56:40
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
  `Img` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `level1`
--

INSERT INTO `level1` (`id`, `Name`, `Description`, `Price`, `Img`) VALUES
(1, 'curso nutricionx111', 'sajfhdasikfjahs\r\nsfafasdfdassfds\r\ndfasfdasffsfdsfda\r\nfasfassfsadfdfdsf\r\nfassafsdfdsaasfsdfd\r\nfdsafasfdsfdas', 60, 'https://img.freepik.com/foto-gratis/rodajas-fruta-dispuestas-patron_23-2148145068.jpg'),
(2, 'curso patologia', 'fsdafdasfdasjklfhasdklfdhajfdaskfasfasdfafsadfasdfdsafdasfdasfdiasugfuaifdafasdfdasfdsafdasfuyasdgfadsffsdafasfdsfasfadsfdasfas', 100, 'https://img.freepik.com/foto-gratis/hilera-uvas-pomelo-melon-platano-uvas-pina-sobre-fondo-pastel_23-2148103640.jpg'),
(3, '12313', '31231', 12321, 'https://img.freepik.com/vector-gratis/fondo-frutas-verduras_23-2148485148.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `level2`
--

CREATE TABLE `level2` (
  `id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` longtext NOT NULL,
  `Img` varchar(255) NOT NULL,
  `level1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `level2`
--

INSERT INTO `level2` (`id`, `Name`, `Description`, `Img`, `level1`) VALUES
(1, 'fdsafsfdasfds', 'sdafasfdsfdasdfsss', 'https://img.freepik.com/foto-gratis/rodajas-fruta-dispuestas-patron_23-2148145068.jpg', 1),
(2, 'dfasfdas', 'afdasfas', 'https://img.freepik.com/foto-gratis/rodajas-fruta-dispuestas-patron_23-2148145068.jpg', 1),
(3, 'fqwwqerq', 'eqwrqwre', 'https://img.freepik.com/foto-gratis/rodajas-fruta-dispuestas-patron_23-2148145068.jpg', 2),
(4, 'wqrwqer', 'rwqerqwrw', 'https://img.freepik.com/foto-gratis/rodajas-fruta-dispuestas-patron_23-2148145068.jpg', 2);

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
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `Expiration` date NOT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `User`, `Pass`, `Token`, `Name`, `Email`, `Phone`, `Expiration`, `Admin`) VALUES
(1, 'ClaraFuertes', 'Nutricionista80', '3c2a19317303f5f41db92a70f4aff7a203f3cd96fc5ec23da300de1bb11b10be0756857ee63ef0c2ac88a35b478ac0ac9d59eccd64fa5259c170d46af1a39094', 'Clara Fuertes', 'clarafuertes.nutricion@gmail.com', '', '2024-12-10', 1),
(2, 'YYZ', 'Bcs@24', '1792ac8709ced4d3618d3a83b21a8e1a04d5c5257b70623ca385e175b52979bc68f9454e30cf8925c276ccb19384103af391abb66bfc9d83d46e4fed7a144c4f', 'Clara Fuertes', 'clarafuertes.nutricion@gmail.com', '', '2024-12-10', 0);

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
(1, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 1),
(2, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 2),
(3, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 3),
(4, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 4),
(5, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 1),
(6, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 2),
(7, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 3),
(8, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 4),
(9, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 1),
(10, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 2),
(11, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 3),
(12, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 4),
(13, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 1),
(14, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 7),
(15, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 6),
(16, 'trewqtewtwretwetwe', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=0a8ca224-3094-4c38-9115-a3e357c888b4', 'ewtrewtrwe', 'twetrwetrwete', 5);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `userpay`
--
ALTER TABLE `userpay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
