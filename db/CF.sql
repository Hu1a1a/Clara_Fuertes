-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2024-05-08 08:01:28
-- 服务器版本： 10.3.39-MariaDB-0ubuntu0.20.04.2
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
  `Star` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `comentario`
--

INSERT INTO `comentario` (`id`, `Name`, `Description`, `Star`) VALUES
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
-- 表的结构 `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `cursoId` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `expiro` date NOT NULL,
  `progreso` longtext NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `curso`
--

INSERT INTO `curso` (`id`, `cursoId`, `inicio`, `expiro`, `progreso`, `userId`) VALUES
(1, 1, '2024-03-24', '2024-11-23', '[{\"id\":27},{\"id\":29},{\"id\":24},{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":21},{\"id\":23},{\"id\":30}]', 2),
(2, 2, '2024-03-24', '2024-12-24', '[{\"id\":30}]', 2),
(3, 2, '2024-05-08', '2024-09-08', '', 39),
(4, 2, '2024-04-07', '2024-09-09', '', 40);

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
  `level1` int(11) NOT NULL,
  `depId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `level2`
--

INSERT INTO `level2` (`id`, `Name`, `Description`, `Img`, `Duracion`, `level1`, `depId`) VALUES
(5, 'Semana 0  ', 'Bienvenida', '', 0, 1, 0),
(6, 'Fase 1. Semana 1', 'Renovación', '', 0, 1, 0),
(7, 'Fase 1. Semana 2', 'Renovación', '', 7, 1, 6),
(12, 'Fase 1. Semana 3', 'Renovación', '', 14, 1, 7),
(13, 'Fase 1. Semana 4', 'Renovación', '', 21, 1, 12),
(14, 'Fase 2. Semana 5', 'Reparación', '', 28, 1, 13),
(15, 'Fase 2. Semana 6', 'Reparación', '', 35, 1, 14),
(16, 'Fase 2. Semana 7', 'Reparación', '', 42, 1, 15),
(17, 'Fase 2. Semana 8', 'Reparación', '', 49, 1, 16),
(18, 'Fase 2. Semana 9', 'Reparación', '', 56, 1, 17),
(19, 'Fase 2. Semana 10', 'Reparación', '', 63, 1, 18),
(20, 'Fase 3. Semana 11', 'Mantenimiento', '', 70, 1, 19),
(21, 'Fase 3. Semana 12', 'Mantenimiento', '', 77, 1, 20),
(24, 'Semana 0', 'Bienvenida ', '', 7, 2, 0),
(25, '', '', '', 0, 0, 0);

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
('yang', 'yang.ye.1@hotmail.com', '2024-04-07 18:33:53', 'Guia Ensalada'),
('rewqrwq', 'yang.ye.1@hotmail.com', '2024-05-07 17:45:39', 'Guia Ensalada'),
('dsfsafda', 'yang.ye.1@hotmail.com', '2024-05-07 19:48:38', 'Guia Ensalada'),
('Adrian ', 'Adrianespallargas.yu@gmail.com', '2024-05-07 19:55:32', 'Guia Ensalada');

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
(1, 'ClaraFuertes', 'Nutricionista80', '84bf584a38ebb28dd9adc1c3cf8c492f5f78dd41e6975f1b3194d77c73779364564703ec5edde298c92b0aee91e299135c69a1f9b4ea849eb40e6c57068eb8c6', 'clarafuertes.nutricion@gmail.com', '  b341', 1),
(2, 'YYZ', '123', 'c9c0fc68cad441fdff4cd3de4766c472ef2d48c32bdc71ec241c17c0bee4a8a352444e0ccc49de44dee458748ae90fc6d3ac74bbd59211436683f15253eb4624', 'yang.ye.1@hotmail.com', '', 0),
(39, 'AEY', 'hola ', '', 'adrianespallargas.yu@gmail.com', '627738237', 0),
(40, 'LPG', 'nutricion0', '', 'lauriluux@gmail.com', '629029650', 0);

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
  `Orden` int(11) NOT NULL,
  `level2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `video`
--

INSERT INTO `video` (`id`, `Name`, `Src`, `Description`, `Adjunt`, `Canva`, `Orden`, `level2`) VALUES
(18, 'Vídeo 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/f9e1da2977504d89b2c5b3e45e49d0e5?sid=3bec5954-2728-4a26-b9df-5578a9544eb0', 'Vídeo 1. Titulo: Cómo va a ser el proceso de estas semanas', '', '', 1, 5),
(19, 'Vídeo 2. explicación ficha de seguimiento', 'https://www.loom.com/share/b885afb79ce74d4188a4b7ad29aa3bc5?sid=30119bd0-6f6e-4af5-8a2f-f428f3250043', 'Vídeo 2. explicación ficha de seguimiento', '', '', 2, 5),
(20, 'Vídeo 3. Entendiendo la alimentación equilibrada. Macronutrientes y plato saludable\r\n', 'https://www.loom.com/share/1c811df0cd154bb889907ef9aa11c2f5?sid=48385f51-57d4-4788-a57d-0aa5fc1ec745', 'Vídeo 3. Entendiendo la alimentación equilibrada. Macronutrientes y plato saludable', '', '', 3, 5),
(21, 'Vídeo 5. Bonus Coaching: Establece tu objetivo y tus Paraqués', 'https://www.loom.com/share/a7ff642150894acc8037f8673d6e00c9?sid=5544da95-6297-455e-8ebd-1f2537650810', 'Vídeo 4. Coaching: Establece tu objetivo y tus Paraqués', '', '', 5, 5),
(23, 'Descargable 1. La prueba del bicarbonato', '', 'La prueba del bicarbonato es una prueba casera muy sencilla que puede orientarnos sobre la acidez del estómago, aspecto fundamental a tener en cuenta para el buen manejo de las digestiones.  Realiza esta prueba tal como se indica en el documento y envíame los resultados cuando los tengas. Repítela 3-4 días para confirmar los resultados. ', 'Prueba del bicarbonoato.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDE_yicHc&#x2F;hShER4P1781tsR2TUNyuMA&#x2F;view?embed', 6, 5),
(24, 'Descargable 2. Ejercicio de Coaching ', '', 'En este documento encontrarás las plantillas de todos los ejercicios de Coaching que te voy proponiendo en estas semanas.  Simplemente descárgala para tenerla a mano y que puedas visualizar mejor los ejercicios que se irán planteando. ', 'Ejercicios prácticos de Coaching (4).pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF8BwgABZM&#x2F;IxC-A0DmUjfsuNs-033rQA&#x2F;view?embed', 7, 5),
(27, 'prueba semana 0', '', '', '', '', 0, 6),
(28, 'prueba semana 1', '', '', '', '', 0, 7),
(29, 'vvv', '', '', '', '', 0, 6),
(30, 'Video 4. El plato antiinflamatorio ', 'https://www.loom.com/share/f00faf67645d4b4e9070f10bab456e14', '', '', '', 4, 5),
(31, 'video 1. Cómo va a ser el proceso de estas semanas  ', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 0, 22),
(33, 'Video 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 0, 0),
(34, 'Video 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 0, 0),
(35, 'Video 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 1, 24),
(36, 'Video 2. Explicación ficha de seguimiento ', 'https://www.loom.com/share/ffafbe1c128b4bbfa7250ce9fee8cafa', '', '', '', 2, 24),
(37, 'Video 3. Macronutrientes - Entendiendo la alimentación equilibrada ', 'https://www.loom.com/share/1c811df0cd154bb889907ef9aa11c2f5', '', '', '', 3, 24),
(38, 'Descargable 1. Alternativas de salsas ', '', '', '', 'https://www.canva.com/design/DAGD4H2C4EI/jbIw-9Qq_ZkiufSh2ReNew/view?embed', 4, 24);

--
-- 转储表的索引
--

--
-- 表的索引 `curso`
--
ALTER TABLE `curso`
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
-- 表的索引 `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `level1`
--
ALTER TABLE `level1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `level2`
--
ALTER TABLE `level2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- 使用表AUTO_INCREMENT `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
