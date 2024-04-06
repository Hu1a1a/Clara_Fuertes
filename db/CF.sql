-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2024-04-06 18:21:03
-- 服务器版本： 10.6.16-MariaDB-0ubuntu0.22.04.1
-- PHP 版本： 8.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `CF`
--

-- --------------------------------------------------------

--
-- 表的结构 `Course`
--

CREATE TABLE `Course` (
  `id` int(11) NOT NULL,
  `CourseName` varchar(255) NOT NULL,
  `CourseSrc` int(11) NOT NULL,
  `CoursePrice` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- 表的结构 `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `User` varchar(255) NOT NULL,
  `Pass` varchar(255) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `Expiration` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- 转存表中的数据 `User`
--

INSERT INTO `User` (`id`, `User`, `Pass`, `Token`, `Name`, `Email`, `Phone`, `Expiration`) VALUES
(1, 'ClaraFuertes', 'Nutricionista80', '', 'Clara Fuertes', 'clarafuertes.nutricion@gmail.com', '', '2024-04-10');

-- --------------------------------------------------------

--
-- 表的结构 `UserPay`
--

CREATE TABLE `UserPay` (
  `id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  `Price` float(10,2) NOT NULL,
  `BuyTime` date NOT NULL,
  `Expiration` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- 转储表的索引
--

--
-- 表的索引 `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `UserPay`
--
ALTER TABLE `UserPay`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
