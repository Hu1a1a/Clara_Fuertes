-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2024-05-04 20:47:21
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
-- 表的结构 `comentario`
--

CREATE TABLE `comentario` (
  `id` int(11) NOT NULL,
  `Name` varchar(25) NOT NULL,
  `Description` longtext NOT NULL,
  `Start` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- 转存表中的数据 `comentario`
--

INSERT INTO `comentario` (`id`, `Name`, `Description`, `Start`) VALUES
(1, 'Leni N.', '“Es una gran profesional que desde el principio abordó mi problema digestivo dando soluciones y consiguiendo que en poco tiempo mejorase de forma abismal.”', 5),
(2, 'Ariadna F.', '“Es muy cercana. Sabe lo que necesitas y te anima en todo momento a alcanzar los objetivos. ¡Muy profesional! ¡La recomiendo 100%!”', 5),
(3, 'Carmen G.', '“El trabajo de Clara conmigo ha sido excepcional. He aprendido a comer y ahora me siento mejor con mi cuerpo.”', 5),
(4, 'Lorena P.', '“Clara me ha acompañado en mi proceso para conseguir mis objetivos personales enseñándome hábitos alimenticios con disciplina. ¡Super contenta con los resultados conseguidos!”', 5),
(5, 'Sara P.', '“Una gran profesional que se preocupa mucho por tus necesidades. El trato es inmejorable. Atenta, respetuosa y dedicada. Estoy encantada desde visito con ella y sigo sus dietas y pautas”', 5),
(6, 'Joan N.', '“El mejor método para mejorar la alimentación. Seguimiento constante y acompañamiento en todo el proceso”', 5),
(7, 'Oscar L.', '“Clara es mi dietista desde hace unos años, puedo decir que mi experiencia con ella es inmejorable. He tenido un seguimiento exhaustivo de la evolución. La recomiendo 100%.”', 5),
(8, 'Vinyet P.', '“Me ha ayudado con la dieta baja en FODMAPS para recuperarme del SIBO y otras intolerancias que sufro.Siempre dispuesta a despejar todo tipo de dudas, soy muy preguntona :). ¡La recomiendo sin lugar a dudas!”', 5),
(9, 'Joan N.', '“¡Voy a estar eternamente agradecida a Clara! En todo momento me ayudó, me guió y lo más importante empatizó conmigo desde el minuto 1. Gracias por tu gran labor te voy a seguir recomendando siempre!”', 5);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `User`, `Pass`, `Token`, `Email`, `Phone`, `Admin`) VALUES
(1, 'ClaraFuertes', 'Nutricionista80', 'd44693f32b0c8b14f46f5fb8a6de26f5e19bfb9ff2af8a9210de7b3c291f47b1c98e25cc6ab6fd826956951c9f8b73fb4784204a7aa593611f4f629b876eabfa', 'clarafuertes.nutricion@gmail.com', '  b341', 1),
(2, 'YYZ', '123', 'ef047a798db653fb7f03acab30533f16d895357056fbd90b8959a54f228ebb3eee5d51bfd6061e9b945936cb69f0d6a31633bba43f87200609c704bbaa01bd46', 'yang.ye.1@hotmail.com', '', 0);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

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
  `Canva` longtext NOT NULL,
  `level2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- 转存表中的数据 `video`
--

INSERT INTO `video` (`id`, `Name`, `Src`, `Description`, `Adjunt`, `Canva`, `level2`) VALUES
(17, 'Vídeos semana 0', '', 'Vídeos semana 0', '', '', 5),
(18, 'Vídeo 1. Titulo: Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/f9e1da2977504d89b2c5b3e45e49d0e5?sid=3bec5954-2728-4a26-b9df-5578a9544eb0', 'Vídeo 1. Titulo: Cómo va a ser el proceso de estas semanas', '', '', 5),
(19, 'Vídeo 2. explicación ficha de seguimiento', 'https://www.loom.com/share/1680ec4aec1343ec8233947e33815a3e?sid=f15a07b7-d395-4da9-9207-18dd1d39cfdd', 'Vídeo 2. explicación ficha de seguimiento', '', '', 5),
(20, 'Vídeo 3. Entendiendo la alimentación equilibrada. Macronutrientes y plato saludable\r\n', 'https://www.loom.com/share/1c811df0cd154bb889907ef9aa11c2f5?sid=48385f51-57d4-4788-a57d-0aa5fc1ec745', 'Vídeo 3. Entendiendo la alimentación equilibrada. Macronutrientes y plato saludable', '', '', 5),
(21, 'Vídeo 4. Coaching: Establece tu objetivo y tus Paraqués', 'https://www.loom.com/share/a7ff642150894acc8037f8673d6e00c9?sid=5544da95-6297-455e-8ebd-1f2537650810', 'Vídeo 4. Coaching: Establece tu objetivo y tus Paraqués', '', '', 5),
(22, 'Descargables semana 0', '', 'Descargables semana 0', '', '', 5),
(23, 'Descargable 1. La prueba del bicarbonato', '', 'La prueba del bicarbonato es una prueba casera muy sencilla que puede orientarnos sobre la acidez del estómago, aspecto fundamental a tener en cuenta para el buen manejo de las digestiones.  Realiza esta prueba tal como se indica en el documento y envíame los resultados cuando los tengas. Repítela 3-4 días para confirmar los resultados. ', ' Prueba del bicarbonoato.pdf', '', 5),
(24, 'Descargable 2. Ejercicio de Coaching ', '', 'En este documento encontrarás las plantillas de todos los ejercicios de Coaching que te voy proponiendo en estas semanas.  Simplemente descárgala para tenerla a mano y que puedas visualizar mejor los ejercicios que se irán planteando. ', 'Ejercicios prácticos de Coaching (4).pdf', '', 5),
(26, 'comidaaaaaaaaaaaaaa', '', '', '', '', 0);

--
-- 转储表的索引
--

--
-- 表的索引 `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`);

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
-- 使用表AUTO_INCREMENT `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- 使用表AUTO_INCREMENT `userpay`
--
ALTER TABLE `userpay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
