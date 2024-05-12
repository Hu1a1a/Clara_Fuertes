-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2024-05-12 20:36:26
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
(9, 'Joan N.', '“¡Voy a estar eternamente agradecida a Clara! En todo momento me ayudó, me guió y lo más importante empatizó conmigo desde el minuto 1. Gracias por tu gran labor te voy a seguir recomendando!”', 5);

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
(1, 1, '2024-03-23', '2024-11-23', '[{\"id\":27},{\"id\":29},{\"id\":24},{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":21},{\"id\":23},{\"id\":30},{\"id\":35},{\"id\":38}]', 2),
(2, 2, '2024-03-24', '2024-12-24', '[{\"id\":30},{\"id\":35},{\"id\":38}]', 2),
(3, 1, '2023-05-08', '2023-09-08', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":40},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58}]', 39),
(4, 1, '2023-04-07', '2024-09-09', '[{\"id\":18},{\"id\":40},{\"id\":19},{\"id\":48}]', 40),
(5, 1, '2023-05-06', '2024-09-06', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24}]', 41),
(6, 1, '2024-05-09', '2024-09-07', '[{\"id\":18},{\"id\":19}]', 42),
(7, 1, '2023-05-10', '2023-09-10', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30}]', 43),
(8, 1, '2023-05-10', '2024-09-10', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24}]', 44);

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
(25, '', '', '', 0, 0, 0),
(26, 'eeeeeeeeeeeeeeeeeeeeeee', '', '', 0, 0, 0),
(27, 'cccccccccccccccccccccc', '', '', 0, 0, 0);

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
('Adrian ', 'Adrianespallargas.yu@gmail.com', '2024-05-07 19:55:32', 'Guia Ensalada'),
('Clara', 'clarafuertes.nutricion@gmail.com', '2024-05-08 08:53:51', 'Guia Ensalada'),
('Ana', 'comacuca07@gmail.com', '2024-05-08 11:15:44', 'Guia Ensalada'),
('Laura Bonet Traverso ', 'laurabonettraverso@gmail.com', '2024-05-08 15:32:46', 'Guia Ensalada'),
('RAQUEL ', 'raquel.g.jimenez@gmail.com', '2024-05-08 16:11:25', 'Guia Ensalada'),
('Thais', 'daypha@hotmail.com', '2024-05-08 18:24:02', 'Guia Ensalada'),
('mònica', 'monicabiosca@gmail.com', '2024-05-08 20:58:54', 'Guia Ensalada'),
('Noelia', 'noeliajnadal@gmail.com', '2024-05-08 21:41:46', 'Contacto'),
('hola', 'adrianespallargas.yu@gmail.com', '2024-05-08 21:51:10', 'Contacto'),
('hola', 'adrianespallargas.yu@gmail.com', '2024-05-08 21:51:28', 'Contacto'),
('Laura', 'Laura.mateos@alumnos.colegioaljarafe.es', '2024-05-08 23:09:56', 'Guia Ensalada'),
('Mayra', 'mayra.daucourt@gmail.com', '2024-05-09 12:02:27', 'Guia Ensalada'),
('Edu', 'edu64reyes@gmail.com', '2024-05-09 15:04:37', 'Guia Ensalada'),
('Bego Giner', 'bginer@hotmail.com', '2024-05-10 09:39:19', 'Contacto'),
('Clemen ', 'clemenmontesguillen@live.com', '2024-05-11 14:56:09', 'Guia Ensalada'),
('Paola Bustos ', 'Buscosmexico@gmail.com', '2024-05-12 05:37:01', 'Contacto'),
('Vanesa', 'Vanekec@gmail.com ', '2024-05-12 19:33:34', 'Guia Ensalada');

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
(40, 'LPG', 'nutricion0', '', 'lauriluux@gmail.com', '629029650', 0),
(41, 'JL', 'sana0', '', 'julielibbrecht90@gmail.com', '671652697', 0),
(42, 'VGV', 'sana1', '', 'vginov23@gmail.com', '626709282', 0),
(43, 'LMC', 'sana0', '', 'lomoca84@gmail.com', '646536817', 0),
(44, 'MGG', 'sana0', '', 'mg03515361@gmail.com', '633275738', 0);

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
(30, 'Video 4. El plato antiinflamatorio ', 'https://www.loom.com/share/f00faf67645d4b4e9070f10bab456e14', '', '', '', 4, 5),
(31, 'video 1. Cómo va a ser el proceso de estas semanas  ', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 0, 22),
(33, 'Video 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 0, 0),
(34, 'Video 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 0, 0),
(35, 'Video 1. Cómo va a ser el proceso de estas semanas', 'https://www.loom.com/share/5a967827fd6842ccb2d18b4532402e6e', '', '', '', 1, 24),
(36, 'Video 2. Explicación ficha de seguimiento ', 'https://www.loom.com/share/ffafbe1c128b4bbfa7250ce9fee8cafa', '', '', '', 2, 24),
(37, 'Video 3. Macronutrientes - Entendiendo la alimentación equilibrada ', 'https://www.loom.com/share/1c811df0cd154bb889907ef9aa11c2f5', '', '', '', 3, 24),
(38, 'Descargable 1. Alternativas de salsas ', '', '', ' Alternativas de ALIÑOS para ensaladas.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGD4H2C4EI&#x2F;yRRqOiYI2gYEv0OUNsuawA&#x2F;view?embed', 4, 24),
(39, 'aaaaaaaaaaaaaaaaaaaa', '', '', '', '', 8, 0),
(40, 'Video 1. Cómo va a ser el proceso de esta fase', 'https://www.loom.com/share/3a1126afe16f4501b3a2ee8a2cfac7b9?sid=536c34ba-9e0a-4124-9736-0a0691fcec59', '', '', '', 1, 6),
(41, 'Video 1. Principios para una buena salud digestiva ', 'https://www.loom.com/share/bf90a469594c45e097e2b4ec99d45128?sid=f7f3e8f1-8da5-40c6-9ec5-66516dabedcf', '', '', '', 1, 7),
(42, 'Video 1. Limpiar la despensa ', 'https://www.loom.com/share/19c385fbf1864ccdad38bdfeca816705?sid=0b72be5b-3977-487a-bf6c-04981f46927e', '', '', '', 1, 12),
(43, 'Video 2. Lectura de etiquetas ', 'https://www.loom.com/share/311d257097d74736a650cc1e5c482dba?sid=48a018ef-e3f1-492e-af87-4a0180ef2c99', '', '', '', 2, 12),
(44, 'Video 1. Entiende el proceso digestivo ', 'https://www.loom.com/share/c67d8505f55c49b483a9ebb6e5be6394?sid=35be2882-9b10-44b2-b9cd-7753c6cd808d', '', '', '', 1, 13),
(46, 'Video Bonus Coaching: Pensamientos saboteadores ', 'https://www.loom.com/share/f74429a537964aa5ac691142b86c6e85?sid=ef3f9e8e-2d83-46ee-975c-ee7164c53a67', '', '', '', 2, 13),
(47, 'Descargable 1. Manual Fase 1 - Listado de alimentos ', '', 'Aquí tienes una guía de lo que se pretende en estas primeras semanas. \nVamos a moderar o eliminar alimentos que no conviene incorporar en nuestra alimentación, pero también otros que, aunque son beneficiosos, en una primera fase nos ayudarán a dar un descanso a nuestras bacterias para poder restablecer su buena funcionalidad. \n\nEn todo caso, como esto es general y las pautas van a ser personalizadas, esta fase será más o menos restrictiva en función de tus necesidades y circunstancias. ', 'Cómo va a ser el proceso de esta fase.pdf', '', 0, 0),
(48, 'Descargable 1. Manual Fase 1 - Listado de alimentos ', '', 'Aquí tienes una guía de lo que se pretende en estas primeras semanas. \nVamos a moderar o eliminar alimentos que no conviene incorporar en nuestra alimentación, pero también otros que, aunque son beneficiosos, en una primera fase nos ayudarán a dar un descanso a nuestras bacterias para poder restablecer su buena funcionalidad. \n\nEn todo caso, como esto es general y las pautas van a ser personalizadas, esta fase será más o menos restrictiva en función de tus necesidades y circunstancias. ', 'Cómo va a ser el proceso de esta fase.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGCej5hTeQ&#x2F;7IDnUbNo-Fiym2zxufebFw&#x2F;view?embed', 2, 6),
(49, 'Descargable 2. Opciones de desayuno ', '', 'Puedes usar las combinaciones que quieras de los alimentos recomendados en el listado para elaborar tus desayunos. \nYo te dejo algunos ejemplos que te pueden servir de idea.\n', 'Opciones desayunos fase 1 y 2.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGB3OzWOFk&#x2F;01NPjcHyA2bPcqhhE5--3w&#x2F;view?embed', 3, 6),
(50, 'Descargable 3. Receta caldo de huesos ', '', 'Te dejo la receta del caldo de huesos.\nEl caldo de huesos es un alimento rico en minerales, nutrientes y aminoácidos que benefician la salud de la digestión, la inmunidad y la inflamación. \nEste caldo es una buenísima idea para reparar nuestra salud intestinal. ', 'Receta caldo de huesos.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGB3KdVuUs&#x2F;_xDPjsP7cXjZIzGLPWk8xw&#x2F;view?embed', 3, 6),
(51, 'Descargable 4. Infusiones digestivas', '', 'Te dejo los ingredientes de algunas infusiones que nos van a servir para calmar y mejorar la digestión. \nAdemás, aprovecha el momento de tomarlas como un ritual para calmar la mente, que tan necesario es y tan olvidado tenemos ', 'Infusiones digestivas.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGB3eVK3HQ&#x2F;wYcPwn1tuaB120VXX3V3aw&#x2F;view?embed', 4, 6),
(52, 'Descargable 5. Smoothies', '', 'Los smoothies son geniales porque en poco volumen nos permiten incorporar gran cantidad de nutrientes. \nAdemás, en estas primeras semanas, que queremos darle un descanso al sistema digestivo, nos van especialmente bien, ya que al ser líquidos hacen que el sistema digestivo trabaje menos. \nSon ejemplos, puedes incluir otros ingredientes de los recomendados o mezclar ingredientes de unas y de otras. ¡Atrévete a probar distintas combinaciones!\n¡Disfruta mientras te cuidas!', 'Smoothies.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGB3TgmOBk&#x2F;BWFyRnzbUqKBpCZY_IopWw&#x2F;view?embed', 5, 6),
(53, 'Descargable 6. Comidas fuera de casa', '', 'Te dejo las bases que deben seguir tus comidas fuera de casa en esta primera fase restrictiva. ', 'Comida fuera de casa.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGETWs7NpY&#x2F;ajbbq2ilSB_DXFYgtLkfjg&#x2F;view?embed', 6, 6),
(54, 'Descargable 1. Principios de una buena salud digestiva ', '', 'En este documento te resumo las claves, los mandamientos a tener en cuenta para disfrutar de una buena salud digestiva. \n\nSeguro que hay muchos de estos principios que no estabas incluyendo en tu día a día. ¡Vamos a por ello! \nTienes un vídeo en el que te explico este documento con más detalle. ', 'Principios de una buena salud digestiva.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGB3aznzQo&#x2F;sH4WGxKrm2LgMfddOwngSQ&#x2F;view?embed', 2, 7),
(55, 'Video Bonus Coaching. No esperes mas para actuar ', 'https://www.loom.com/share/6f1db4bac52c4d5789584e2075d473e8?sid=adbcd5e2-85e3-4e3e-b464-018e1eda0a97', '', '', '', 3, 7),
(56, 'Descargable 1. Limpiando la despensa ', '', 'Te dejo este documento que acompaña al vídeo que se titula igual, para que lo tengas y lo recuerdes. \nEs lógico, pero hay que recordarlo cada vez que vamos a hacer la compra: Si no quiero comer ciertos alimentos, es mejor que no los tenga en casa y que por tanto no los incluya en mi compra. \nSiempre que nos sienten bien podemos comerlos fuera de casa si nos gustan, que será de forma más ocasional que si los tenemos en la despensa. ', 'Limpiando la despensa.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGChN6WeRc&#x2F;JTvrO0kb3YAW1LgvNUG2ng&#x2F;view?embed', 3, 12),
(57, 'Descargable 2. Lectura de etiquetas', '', 'Te dejo este documento que acompaña al vídeo que se titula igual, para que lo tengas y lo recuerdes. \nCuando vayas a comprar piensa en la de recursos que gastan las empresas en hacer productos y cajas que modifican nuestro comportamiento. ¡Con nosotras no podrán! ', 'Lectura de etiquetas.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGChDwbKTo&#x2F;QGoTCTRbeWJs5L97wFmrvg&#x2F;view?embed', 4, 12),
(58, 'Descargable. Check list fase 1', '', '¿Quieres evaluar como llevas lo aprendido en estas semanas? \nTe dejo un resumen de las cosas más importantes que hemos ido incorporando. Es bueno que seas consciente de los avances que hay en ti, del cambio de hábitos que estás haciendo.', 'Descargable - Check List fase 1.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDUz5xb6c&#x2F;GfRcZC6CartbFMEY1MXYXQ&#x2F;view?embed', 3, 13);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `level1`
--
ALTER TABLE `level1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `level2`
--
ALTER TABLE `level2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用表AUTO_INCREMENT `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
