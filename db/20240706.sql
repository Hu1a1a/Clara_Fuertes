-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2024-07-06 12:30:44
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
  `Star` int(11) NOT NULL,
  `Type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `comentario`
--

INSERT INTO `comentario` (`id`, `Name`, `Description`, `Star`, `Type`) VALUES
(1, 'Leni N.', '“Es una gran profesional que desde el principio abordó mi problema digestivo dando soluciones y consiguiendo que en poco tiempo mejorase de forma abismal.”', 5, ''),
(2, 'Ariadna F.', '“Es muy cercana. Sabe lo que necesitas y te anima en todo momento a alcanzar los objetivos. ¡Muy profesional! ¡La recomiendo 100%!”', 5, ''),
(3, 'Carmen G.', '“El trabajo de Clara conmigo ha sido excepcional. He aprendido a comer y ahora me siento mejor con mi cuerpo.”', 5, ''),
(4, 'Lorena P.', '“Clara me ha acompañado en mi proceso para conseguir mis objetivos personales enseñándome hábitos alimenticios con disciplina. ¡Super contenta con los resultados conseguidos!”', 5, ''),
(5, 'Sara P.', '“Una gran profesional que se preocupa mucho por tus necesidades. El trato es inmejorable. Atenta, respetuosa y dedicada. Estoy encantada desde visito con ella y sigo sus dietas y pautas”', 5, ''),
(6, 'Joan N.', '“El mejor método para mejorar la alimentación. Seguimiento constante y acompañamiento en todo el proceso”', 5, ''),
(7, 'Oscar L.', '“Clara es mi dietista desde hace unos años, puedo decir que mi experiencia con ella es inmejorable. He tenido un seguimiento exhaustivo de la evolución. La recomiendo 100%.”', 5, ''),
(8, 'Vinyet P.', '“Me ha ayudado con la dieta baja en FODMAPS para recuperarme del SIBO y otras intolerancias que sufro.Siempre dispuesta a despejar todo tipo de dudas, soy muy preguntona :). ¡La recomiendo sin lugar a dudas!”', 5, ''),
(9, 'Joan N.', '“¡Voy a estar eternamente agradecida a Clara! En todo momento me ayudó, me guió y lo más importante empatizó conmigo desde el minuto 1. Gracias por tu gran labor te voy a seguir recomendando!”', 5, ''),
(0, 'Alba F.', '\"Acudí a Clara porque llevaba un tiempo con problemas digestivos y me habían diagnosticado SIBO. Es increíble como en cuestión de meses ha cambiado mi vida por completo, no solo me he recuperado del SIBO siguiendo sus pautas sino que he aprendido a comer gracias a ella. Te acompaña en todo el proceso, te da muchísimas herramientas\"', 5, '');

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
(1, 1, '2024-03-23', '2024-11-23', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":40},{\"id\":52},{\"id\":51},{\"id\":50},{\"id\":49},{\"id\":48},{\"id\":53},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":57},{\"id\":56},{\"id\":43},{\"id\":42},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":59},{\"id\":60},{\"id\":61},{\"id\":62},{\"id\":64},{\"id\":63},{\"id\":65},{\"id\":66},{\"id\":67},{\"id\":68},{\"id\":69},{\"id\":70},{\"id\":71},{\"id\":72},{\"id\":73},{\"id\":74},{\"id\":75},{\"id\":76},{\"id\":77},{\"id\":78},{\"id\":79},{\"id\":80},{\"id\":81},{\"id\":82}]', 2),
(2, 2, '2024-03-24', '2024-12-24', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":40},{\"id\":52},{\"id\":51},{\"id\":50},{\"id\":49},{\"id\":48},{\"id\":53},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":57},{\"id\":56},{\"id\":43},{\"id\":42},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":59},{\"id\":60},{\"id\":61},{\"id\":62},{\"id\":64},{\"id\":63},{\"id\":65},{\"id\":66},{\"id\":67},{\"id\":68},{\"id\":69},{\"id\":70},{\"id\":71},{\"id\":72},{\"id\":73},{\"id\":74},{\"id\":75},{\"id\":76},{\"id\":77},{\"id\":78},{\"id\":79},{\"id\":80},{\"id\":81},{\"id\":82}]', 2),
(3, 1, '2023-05-08', '2023-09-08', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":40},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":59},{\"id\":60},{\"id\":61},{\"id\":63},{\"id\":64},{\"id\":62}]', 39),
(4, 1, '2023-04-07', '2024-09-09', '[{\"id\":18},{\"id\":40},{\"id\":19},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":54},{\"id\":41},{\"id\":24},{\"id\":55},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":60},{\"id\":61}]', 40),
(5, 1, '2023-05-06', '2024-09-06', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":40},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":55},{\"id\":41},{\"id\":54},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":59},{\"id\":60},{\"id\":61},{\"id\":62},{\"id\":64},{\"id\":63},{\"id\":65},{\"id\":66},{\"id\":67},{\"id\":68},{\"id\":69}]', 41),
(6, 1, '2024-05-09', '2024-09-07', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":52},{\"id\":51},{\"id\":50},{\"id\":49},{\"id\":48},{\"id\":40},{\"id\":53},{\"id\":55},{\"id\":54},{\"id\":41},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":59},{\"id\":60},{\"id\":61},{\"id\":62},{\"id\":64},{\"id\":63},{\"id\":65},{\"id\":66},{\"id\":67},{\"id\":68},{\"id\":70},{\"id\":69}]', 42),
(7, 1, '2023-05-10', '2023-09-10', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":40},{\"id\":48},{\"id\":49},{\"id\":53},{\"id\":52},{\"id\":51},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":50},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":58},{\"id\":44},{\"id\":46},{\"id\":61},{\"id\":60},{\"id\":59},{\"id\":62},{\"id\":64},{\"id\":63},{\"id\":65},{\"id\":66},{\"id\":68},{\"id\":67}]', 43),
(8, 1, '2023-05-10', '2024-09-10', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":48},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":49}]', 44),
(9, 1, '2023-04-07', '2024-09-07', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":40},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":59},{\"id\":60},{\"id\":61}]', 45),
(10, 1, '2023-04-07', '2024-09-07', '[{\"id\":18},{\"id\":19},{\"id\":20},{\"id\":24},{\"id\":23},{\"id\":30},{\"id\":21},{\"id\":40},{\"id\":48},{\"id\":48},{\"id\":48},{\"id\":48},{\"id\":48},{\"id\":48},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":54},{\"id\":41},{\"id\":55},{\"id\":42},{\"id\":43},{\"id\":56},{\"id\":57},{\"id\":44},{\"id\":46},{\"id\":58},{\"id\":60},{\"id\":61}]', 46),
(11, 1, '2023-04-07', '2024-09-07', '[{\"id\":51},{\"id\":18},{\"id\":40},{\"id\":48},{\"id\":49},{\"id\":52},{\"id\":50},{\"id\":53},{\"id\":23},{\"id\":55},{\"id\":41}]', 47),
(12, 1, '2023-05-20', '2024-09-07', '[{\"id\":18},{\"id\":40},{\"id\":19},{\"id\":20},{\"id\":30},{\"id\":21},{\"id\":23},{\"id\":24},{\"id\":48},{\"id\":49},{\"id\":50},{\"id\":51},{\"id\":52},{\"id\":53},{\"id\":41},{\"id\":54},{\"id\":55},{\"id\":56},{\"id\":57},{\"id\":42},{\"id\":43},{\"id\":58}]', 48);

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
(7, 'Fase 1. Semana 2', 'Renovación', '', 0, 1, 6),
(12, 'Fase 1. Semana 3', 'Renovación', '', 0, 1, 7),
(13, 'Fase 1. Semana 4', 'Renovación', '', 0, 1, 12),
(14, 'Fase 2. Semana 5', 'Reparación', '', 0, 1, 13),
(15, 'Fase 2. Semana 6', 'Reparación', '', 0, 1, 14),
(16, 'Fase 2. Semana 7', 'Reparación', '', 0, 1, 15),
(17, 'Fase 2. Semana 8', 'Reparación', '', 0, 1, 16),
(18, 'Fase 2. Semana 9', 'Reparación', '', 0, 1, 17),
(19, 'Fase 2. Semana 10', 'Reparación', '', 0, 1, 18),
(20, 'Fase 3. Semana 11', 'Mantenimiento', '', 0, 1, 19),
(21, 'Fase 3. Semana 12', 'Mantenimiento', '', 0, 1, 20),
(24, 'Semana 0', 'Bienvenida ', '', 7, 2, 0);

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
('Vanesa', 'Vanekec@gmail.com ', '2024-05-12 19:33:34', 'Guia Ensalada'),
('Mónica Navarrete', 'monica.navarrete@live.com', '2024-05-14 11:46:41', 'Guia Ensalada'),
('Leyre ', 'leyreperfecta@gmail.com', '2024-05-15 21:18:24', 'Contacto'),
('Aurora ', 'aurora.reyeros@gmail.com', '2024-05-15 22:32:18', 'Contacto'),
('Aurora', 'aurora.reyeros@gmail.com', '2024-05-15 22:42:08', 'Guia Ensalada'),
('Adrian ', 'Adrianespallargas.yu@gmail.com', '2024-05-16 17:20:34', 'Guia Ensalada'),
('Tamara', 'angulotamara32@gmail.com', '2024-05-16 21:00:04', 'Guia Ensalada'),
('Lluïsa', 'llui1970@gmail.com', '2024-05-16 21:16:28', 'Guia Ensalada'),
('Montse ', 'montserogiber@gmail.com', '2024-05-17 06:19:39', 'Guia Ensalada'),
('Elena', 'earranzlopez@gmail.com', '2024-05-19 08:37:39', 'Guia Ensalada'),
('Maria', 'psi.fernandalopez@gmail.com', '2024-05-20 08:52:36', 'Guia Ensalada'),
('María ', 'msmp72@gmail.com', '2024-05-20 17:57:03', 'Guia Ensalada'),
('Elisabet', 'emaronas@gmail.com', '2024-05-20 19:10:25', 'Contacto'),
('Catalina ', 'Cossaerrazuriz@gmail.com', '2024-05-20 19:25:43', 'Guia Ensalada'),
('Estrella.cortes.colado@gmail.com ', 'estrella.cortes.colado@gmail.com', '2024-05-22 12:11:16', 'Contacto'),
('Fina', 'finacarpintero@gmail.com', '2024-05-22 18:50:29', 'Contacto'),
('Cristina ', 'cristinamuga@outlook.com ', '2024-05-22 21:29:19', 'Contacto'),
('Silvana', 'costantinosilvana@gmail.com', '2024-05-23 12:16:43', 'Contacto'),
('Silvana', 'costantinosilvana@gmail.com', '2024-05-23 12:18:10', 'Contacto'),
('Dagmara', 'Dagmarakolan@gmail.com', '2024-05-23 14:03:55', 'Contacto'),
('Dagmara', 'Dagmarakolan@gmail.com', '2024-05-23 14:05:00', 'Guia Ensalada'),
('calala', 'calala.nutricion@gmail.com', '2024-05-23 19:01:48', 'Guia Ensalada'),
('Silvana', 'costantinosilvana@gmail.com', '2024-05-23 21:26:04', 'Contacto'),
('Sofia', 'sofia_conde@hotmail.com', '2024-05-25 13:56:39', 'Guia Ensalada'),
('Sofia', 'sofia_conde@hotmail.com', '2024-05-25 13:56:51', 'Guia Ensalada'),
('Amor', 'amorpazmundo123@gmail.com', '2024-05-26 09:14:55', 'Guia Ensalada'),
('Norma De Santis ', 'normadesantis01@gmail.com', '2024-05-26 12:11:18', 'Guia Ensalada'),
('Norma De Santis ', 'normadesantis01@gmail.com', '2024-05-26 12:11:24', 'Guia Ensalada'),
('Norma De Santis ', 'normadesantis01@gmail.com', '2024-05-26 12:11:34', 'Guia Ensalada'),
('Norma De Santis ', 'normadesantis01@gmail.com', '2024-05-26 12:11:41', 'Guia Ensalada'),
('Elisabet ', 'elisabetmontijano@yahoo.es', '2024-05-26 17:04:55', 'Guia Ensalada'),
('ester', 'al316129@uji.es', '2024-05-27 10:11:29', 'Guia Ensalada'),
('Nimia ', 'nimiacampos37@gmail.com', '2024-05-27 10:20:00', 'Guia Ensalada'),
('Fátima ', 'fatima.ghailan@gmail.com', '2024-05-27 18:43:31', 'Contacto'),
('Soraya ', 'sorayina23@gmail.com', '2024-05-27 21:19:40', 'Contacto'),
('Mia', 'maria_aris@hotmail.com', '2024-05-28 13:49:36', 'Guia Ensalada'),
('Mia', 'maria_aris@hotmail.com', '2024-05-28 14:00:42', 'Contacto'),
('Almudena', 'almudena.gonzalez.suarez@gmail.com', '2024-05-28 15:47:12', 'Guia Ensalada'),
('Elizabeth ', 'lmmey1@hotmail.com', '2024-05-28 18:39:35', 'Guia Ensalada'),
('Lomi', 'v92gasap@gmail.com', '2024-05-29 14:54:34', 'Contacto'),
('Alba', 'alba.curto@gmail.com', '2024-05-29 20:24:28', 'Guia Ensalada'),
('Agata', 'agatalauman00@gmail.com', '2024-05-30 23:01:14', 'Guia Ensalada'),
('Mary', 'montoya03@hotmail.com', '2024-06-01 14:26:32', 'Guia Ensalada'),
('Ana', 'Asuarezf84@gmail.com', '2024-06-02 11:38:24', 'Contacto'),
('Xavier ', 'xaseni@hotmail.com', '2024-06-02 17:22:52', 'Guia Ensalada'),
('Maitén ', 'maitencor@yahoo.com.ar', '2024-06-03 11:19:29', 'Guia Ensalada'),
('Zaida ', 'zaidalpz@hotmail.com', '2024-06-03 21:23:46', 'Guia Ensalada'),
('Liseth ', 'lisethvielmavillar@gmail.com', '2024-06-04 12:44:30', 'Guia Ensalada'),
('Liseth ', 'lisethvielmavillar@gmail.com', '2024-06-04 12:44:40', 'Guia Ensalada'),
('Helena', 'helena.agrafojo@gmail.com', '2024-06-04 14:36:31', 'Contacto'),
('Beatriz ', 'Beatrizreyes539@gmail.com', '2024-06-04 14:45:53', 'Guia Ensalada'),
('Beatriz ', 'Beatrizreyes539@gmail.com', '2024-06-04 14:45:56', 'Guia Ensalada'),
('Barbara', 'brhm88@hotmail.com', '2024-06-05 13:22:28', 'Guia Ensalada'),
('Nadhia Fernández ', 'nadhia.fernandez@gmail.com', '2024-06-05 15:17:40', 'Contacto'),
('Ana Ruiz ', 'anafoto1971@gmail.com', '2024-06-05 19:38:42', 'Guia Ensalada'),
('Ana Gonzalez', 'anabelen.gy@hotmail.com', '2024-06-05 19:43:20', 'Asesoramiento pagado'),
('Sonia ', 'soniaramonfuentes@gmail.com', '2024-06-06 11:02:34', 'Guia Ensalada'),
('Laura ', 'Lauramateoshidalgo@gmail.com', '2024-06-07 12:12:34', 'Contacto'),
('Laura ', 'Lauramateoshidalgo@gmail.com ', '2024-06-07 12:13:33', 'Contacto'),
('Soraya', 'Srequelmemerino@gmail.com ', '2024-06-07 12:22:02', 'Guia Ensalada'),
('Joana', 'jou70@hotmail.es', '2024-06-07 16:24:13', 'Guia Ensalada'),
('Joana', 'jou70@hotmail.es', '2024-06-07 16:24:26', 'Guia Ensalada'),
('María amparo ', 'mariantorro@gmail.com', '2024-06-07 20:51:08', 'Guia Ensalada'),
('Sergi', 'sergistk@hotmail.com', '2024-06-07 21:20:31', 'Guia Ensalada'),
('Maria', 'mantolin95@gmail.com', '2024-06-08 07:11:06', 'Guia Ensalada'),
('Danae aravena', 'Danae.aravena@gmail.com', '2024-06-08 10:32:14', 'Guia Ensalada'),
('Paola', 'paola_yahif@hotmil.com ', '2024-06-09 02:12:08', 'Contacto'),
('Paola', 'paola_yahif@hotmail.com', '2024-06-09 02:13:49', 'Guia Ensalada'),
('Paula ', 'logopedia.paula@gmail.com', '2024-06-09 09:39:46', 'Contacto'),
('MDolores López Marín', 'md.lopezmarin@gmail.com', '2024-06-09 17:05:51', 'Contacto'),
('Sandra ', 'sandrabacarisas2@gmail.com', '2024-06-09 19:55:41', 'Guia Ensalada'),
('Camila ', 'camibtaverna@gmail.com', '2024-06-10 02:59:07', 'Contacto'),
('Alexandra', 'Alexandravc0105@gmail.com', '2024-06-11 07:59:29', 'Guia Ensalada'),
('Sandra', 'sandretanr23@hotmail.com', '2024-06-12 07:16:49', 'Guia Ensalada'),
('Nancy ', 'nalome08@hotmail.com', '2024-06-13 02:42:00', 'Guia Ensalada'),
('Sofia ', 'ureadin1984@gmail.com', '2024-06-13 14:40:34', 'Guia Ensalada'),
('Dhara', 'Dharacalderony@gmail.com', '2024-06-14 11:19:44', 'Contacto'),
('Roser', 'roso.pauls@gmail.com', '2024-06-18 14:05:25', 'Guia Ensalada'),
('Patricia ', 'patricia_estefano@yahoo.com.ar', '2024-06-18 14:06:48', 'Guia Ensalada'),
('Laia', 'laiallaurado83@gmail.com', '2024-06-18 14:31:50', 'Guia Ensalada'),
('Chari', 'chari.msanchez@gmail.com', '2024-06-18 16:18:12', 'Guia Ensalada'),
('Noelia ', 'noesaezmartin@gmail.com', '2024-06-18 19:16:05', 'Guia Ensalada'),
('Roxana ', 'casasroxana19@gmail.com ', '2024-06-18 23:44:42', 'Guia Ensalada'),
('Patricia', 'patriciaperalredondo@hotmail.com', '2024-06-19 09:47:40', 'Contacto'),
('Mirta Fernandinho ', 'mirtafer56@gmail.com', '2024-06-19 11:22:43', 'Guia Ensalada'),
('Carmina', 'carminaminus.123@gmail.com', '2024-06-19 18:20:10', 'Guia Ensalada'),
('Sonia', 'soniaplanelles@hotmail.com', '2024-06-21 06:05:12', 'Contacto'),
('Isa', 'Isabel.y.julia@gmail.com', '2024-06-21 19:25:55', 'Guia Ensalada'),
('Kinaferreiro@hotmail.com', 'kinaferreiro@hotmail.com', '2024-06-21 20:49:03', 'Guia Ensalada'),
('Mercedes Torres Hipólito ', 'metohi9@hotmail.com', '2024-06-23 10:47:51', 'Contacto'),
('Jessica ', 'jessymiel23_1@hotmail.com', '2024-06-23 16:24:19', 'Contacto'),
('Tania', 'Tania_villar91@hotmail.com', '2024-06-25 19:04:53', 'Guia Ensalada'),
('Natalia', 'Nati-corbo@hotmail.com', '2024-06-26 03:56:13', 'Contacto'),
('Natalia', 'Nati-corbo@hotmail.com', '2024-06-26 03:56:45', 'Guia Ensalada'),
('Aina Bosch Codina', 'ainaboschcodina@gmail.com', '2024-06-26 07:35:19', 'Asesoramiento pagado'),
('Baltasar Romero', 'barome5170@cutxsew.com', '2024-06-27 18:29:02', 'Guia Ensalada'),
('Patricia ', 'patriciabenitezgrande@gmail.com', '2024-06-27 18:45:31', 'Contacto'),
('Verónica ', 'Verogoas35@gmail.com', '2024-06-28 22:01:35', 'Contacto'),
('Fina', 'finacarpintero@gmail.com', '2024-06-29 17:18:24', 'Contacto'),
('Sara', 'sarabriones1407@gmail.com', '2024-06-30 16:32:30', 'Contacto'),
('Sara', 'sarabriones1407@gmail.com', '2024-06-30 16:32:33', 'Contacto'),
('Verónica ', 'Verogoas35@gmail.com', '2024-07-03 19:18:45', 'Guia Ensalada'),
('Gemma', 'gtrillasj@gmail.com', '2024-07-03 19:29:17', 'Guia Ensalada'),
('yolanda ', 'yolanda.aybar@hotmail.com', '2024-07-03 19:56:26', 'Guia Ensalada'),
('Regli', 'mreglalopezm@gmail.com', '2024-07-03 20:08:21', 'Guia Ensalada'),
('Andrea ', 'andrea.villa10@hotmail.com', '2024-07-03 20:18:16', 'Guia Ensalada'),
('Marta', 'martalvamakeup@hotmail.com', '2024-07-03 21:34:09', 'Guia Ensalada'),
('María José ', 'magilgar1@hotmail.com', '2024-07-03 21:37:05', 'Guia Ensalada'),
('marina', 'marina.rp73@hotmail.com', '2024-07-04 01:06:08', 'Guia Ensalada'),
('andrea.villa10@hotmail.com', 'andrea.villa10@hotmail.com', '2024-07-04 12:59:16', 'Guia Ensalada'),
('andrea.villa10@hotmail.com', 'andrea.villa10@hotmail.com', '2024-07-04 12:59:37', 'Guia Ensalada'),
('Carme Gasulla Blanco', 'Cgasulla@xtec.cat', '2024-07-04 18:02:52', 'Guia Ensalada'),
('Noemí', 'noemi_zgzg_7@hotmail.com', '2024-07-05 20:28:02', 'Contacto'),
('Maria Jose', 'maria.bernal.osio94@gmail.com', '2024-07-06 03:35:56', 'Contacto'),
('Africa', 'Africavillagilmartin@gmail.com', '2024-07-06 09:37:01', 'Guia Ensalada');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `User` varchar(255) NOT NULL,
  `Pass` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `User`, `Pass`, `Email`, `Phone`, `Admin`) VALUES
(1, 'ClaraFuertes', 'Nutricionista80', 'clarafuertes.nutricion@gmail.com', '  b341', 1),
(2, 'YYZ', '123', 'yang.ye.1@hotmail.com', '', 0),
(39, 'AEY', 'hola ', 'adrianespallargas.yu@gmail.com', '627738237', 0),
(40, 'LPG', 'nutricion0', 'lauriluux@gmail.com', '629029650', 0),
(41, 'JL', 'sana0', 'julielibbrecht90@gmail.com', '671652697', 0),
(42, 'VGV', 'sana1', 'vginov23@gmail.com', '626709282', 0),
(43, 'LMC', 'sana0', 'lomoca84@gmail.com', '646536817', 0),
(44, 'MGG', 'sana0', 'mg03515361@gmail.com', '633275738', 0),
(45, 'AER', 'sana0', 'escandellribasadriangmail.com', '611464640', 0),
(46, 'AAF', 'sana0', 'andrea.abafonta@gmail.com', '649542753', 0),
(47, 'CLP', 'sana0', 'carla.llamasp@gmail.com', '677306024', 0),
(48, 'RLM', 'sana0', 'mreglalopezm@gmail.com', '625542281', 0);

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
(58, 'Descargable. Check list fase 1', '', '¿Quieres evaluar como llevas lo aprendido en estas semanas? \nTe dejo un resumen de las cosas más importantes que hemos ido incorporando. Es bueno que seas consciente de los avances que hay en ti, del cambio de hábitos que estás haciendo.', 'Descargable - Check List fase 1.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDUz5xb6c&#x2F;GfRcZC6CartbFMEY1MXYXQ&#x2F;view?embed', 3, 13),
(59, 'Video 1. Cómo va a ser el proceso de esta fase 2', 'https://www.loom.com/share/b619396f7a7f41b3bb7747dd56ef5896?sid=f0258853-5b87-4f3c-b381-50bee15d4ad0', '', '', '', 1, 14),
(60, 'Descargable 1. Manual Fase 2 - Reintroducción', '', 'En esta fase vamos a repoblar nuestro intestino.\nAquí te dejo una guía de lo que vamos a ir haciendo estas semanas. Recuerda que esta guía es general y hay cosas que pueden cambiar si tu evolución lo requiere.', 'Manual Fase 2.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGC_HcgIak&#x2F;BgS7LtxcfUsVl8n_nEQ5qg&#x2F;view?embed', 2, 14),
(61, 'Descargable 2. Diario de síntomas', '', 'Para poder valorar tu evolución, te dejo un registro de alimentos y síntomas para que puedas valorar como vas tolerando los alimentos que vamos reincorporando en esta fase. \nEn las revisiones tendrás una pestaña de tu hoja compartida en Google Drive con estos mismos ítems para que te sea más sencillo compartírmelo, pero puedes anotarlo aquí para luego traspasarlo a la hoja y que yo pueda verlo.', 'Diario de sintomas.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDE-pNeVI&#x2F;27Qm812YyOX3r_1IYbcUQA&#x2F;view?embed', 3, 14),
(62, 'Video 1. Contexto. ¿De dónde venimos?', 'https://www.loom.com/share/207fad62d0f64c2898faaea1da70950a?sid=deda03ac-ede5-428b-8e9e-3f2af0cdff16', '', '', '', 1, 15),
(63, 'Descargable 1. La importancia de una buena respiración', '', 'Una buena respiración es clave y he hecho este documento para que le demos el valor y la importancia que esta tiene. Espero que aprendas acerca de este mecanismo involuntario, pero que tenemos la capacidad de modificar. ', 'Una buena respiración.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDEuacjJI&#x2F;w25DyEfYztpSM0Qmh7bY-w&#x2F;view?embed', 3, 15),
(64, 'Vídeo Bonus Coaching: ¿Hambre real o hambre emocional?', 'https://www.loom.com/share/a7bfbf43aee54611adc477f148008a14?sid=d04a7cf8-5db6-4da3-9fb5-981709d3ceb6', '', '', '', 2, 15),
(65, 'Video 1. ¿Qué es la inflamación?', 'https://www.loom.com/share/74d0c592d1744a6fb786b00e9ebfc56e?sid=c0394557-89e2-4479-a506-5aede84c0530', '', '', '', 1, 16),
(66, 'Vídeo Bonus Coaching: ¿Qué afecta mi conducta? ', 'https://www.loom.com/share/1d7bfdecdfc5432fb82a567dd3d5bd14?sid=85fea367-84bb-4e60-a12a-47b864591eab', '', '', '', 2, 16),
(67, 'Video 1. Alimentos proinflamatorios ', 'https://www.loom.com/share/e8cf4ca1a98e4dfd9bdbfddec172af07?sid=ee5cc44c-63a6-4615-bf10-2b7596ec7c52', '', '', '', 1, 17),
(68, 'Video Bonus Coaching: ¿Qué hago cuando estoy fuera de casa? ', 'https://www.loom.com/share/728bb6d7e62848d2a0d15be555f06b5e?sid=a044a775-f6cc-4c75-ae9c-ce33b932c61f', '', '', '', 2, 17),
(69, 'Video 1. Alimentación antiinflamatoria ', 'https://www.loom.com/share/2b2b20088a9d4dc49b041d4436f6f6ff?sid=d844fc24-2591-40e3-8b0e-0dedabe7c7f4', '', '', '', 1, 18),
(70, 'Descargable 1. La lista de la compra antiinflamatoria ', '', 'Te dejo este resumen que acompaña al vídeo de alimentación antiinflamatoria que tienes en esta fase. \nEspero que tus compras de ahora en adelante estén llenas de estos productos :)  ', 'La lista de la compra antiinflamatoria.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDOjnd0ao&#x2F;5eVljHIPGFKje6Dur_mvMw&#x2F;view?embed', 2, 18),
(71, 'Video 1. Estrés y digestión ', 'https://www.loom.com/share/9c5c090eb5904302b5a05c31566feb1e?sid=d5520caf-e19c-49d8-9122-a899b626d267', '', '', '', 1, 19),
(72, 'Video Bonus Coaching: Conoce tus valores ', 'https://www.loom.com/share/88dff1a5f39146f4b92996bcea1ebe0e?sid=04a743e8-d8ab-4257-aecf-d5e8de7d8732', '', '', '', 2, 19),
(73, 'Descargable 1. Importancia de la gestión del estrés para el sistema digestivo  ', '', 'El estrés juega un papel crucial en nuestras digestiones. Tanto que a menudo no es posible mejorar, por mucho foco que se le ponga a la alimentación, o a la suplementación si esta pata queda sin resolver. \nDale la importancia que merece, que es muchísima. \nEn este documento te hablo sobre ello. ', ' La importancia de la gestión del estrés.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEXngPrBE&#x2F;u3M9pJ_KKkmmORdkG2EyOQ&#x2F;view?embed', 3, 19),
(74, 'Descargable 2. Checklist ', '', '¿Quieres evaluar como llevas lo aprendido en estas semanas? \nTe dejo un resumen de las cosas más importantes que hemos ido incorporando. Es bueno que seas consciente de los avances que hay en ti, del cambio de hábitos que estás haciendo.', 'Descargable FASE 2.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDOrXPxSo&#x2F;u__YlswbH9im4kZrkrA5dQ&#x2F;view?embed', 4, 19),
(75, 'Video 1. Otras ideas clave', 'https://www.loom.com/share/51339133472e4c80b4228d7dd4e93987?sid=811b32ca-69e7-438e-b45d-cfdf9fc79bf9', '', '', '', 1, 20),
(76, 'Video Bonus coaching: Los hábitos', 'https://www.loom.com/share/3344e3592a7c47b0af3b530e47acd372?sid=1a4de17f-d6c0-4cf1-9d73-f35120466535', '', '', '', 2, 20),
(77, 'Descargable 1. Especies ', '', 'En este documento te resumo las especies y hierbas aromáticas para que te familiarices con ellas y las vayas incorporando en tu alimentación. ¡Atrévete a incluirlas y probar nuevos sabores y combinaciones! ', 'ESPECIES.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDOmQ6QeY&#x2F;htuYHzgbEjk28q1axEQRaA&#x2F;view?embed', 2, 20),
(78, 'Descargable 2. Opciones de desayunos saludables', '', 'Puedes usar las combinaciones que quieras de alimentos saludables que ya toleras\nYo te dejo algunos ejemplos que te pueden servir de idea para que no te aburras', 'Opciones desayunos saludables.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGBhuTz--0&#x2F;ZNZuu2EYxeFhRGunyy7H-Q&#x2F;view?embed', 3, 20),
(79, 'Video 1. Un día ideal antiinflamatorio. ¿Cómo sería? ', 'https://www.loom.com/share/9d4c50f5c445439fad234321914575b8?sid=6c8eca7b-12af-478e-8cfb-09b50271a425', '', '', '', 1, 21),
(80, 'Video Bonus Coaching: Las claves del éxito ', 'https://www.loom.com/share/4f8648ec1214476193b4e2f95127d102?sid=c89e05c9-0f69-48d2-b1e3-5285f6a0ff14', '', '', '', 2, 21),
(81, 'Descargable 1. Un día antiinflamatorio ', '', '¿Te imaginas cómo sería un día antiinflamatorio con todo lo que hemos visto? Vamos a crear nuestro día ideal ;) \nSé que llevar a cabo todo esto no es sencillo, pero vamos a pensar en el ideal para ser conscientes de lo cerca o lejos que estamos de esto, y valorar qué podríamos mejorar para acercarnos un poco más a esta situación.', 'Un día ideal antiinflamatorio.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEfBxRJ3s&#x2F;vCJroMSXTZ7RjppyGaG9fg&#x2F;view?embed', 3, 21),
(82, 'Descargable 2. Checklist Fase 3', '', '¿Quieres evaluar qué has incorporado en esta fase?\nEspero que seas consciente de todo los nuevos hábitos y conocimientos nuevos que ahora tienes. Y espero que tu salud haya mejorado sustancialmente. \nEnhorabuena por haber llegado hasta aquí y haberte regalado esta experiencia llena de salud. ', 'Lista de verificación FASE 3.pdf', 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDU6QQfmw&#x2F;PFljL91C9-zw7UZ9kEEAXA&#x2F;view?embed', 4, 21);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用表AUTO_INCREMENT `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
