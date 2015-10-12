-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2015 at 07:59 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lab_nodejs01`
--

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE IF NOT EXISTS `topic` (
`id_topic` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `title_topic` text NOT NULL,
  `des_topic` text NOT NULL,
  `pic_topic` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id_topic`, `id_user`, `title_topic`, `des_topic`, `pic_topic`) VALUES
(86, 0, 'How a 3-D-printer changed a 4-year-old''s heart and life', '-แมวตายอนาต', '1310151254201020666.jpg'),
(89, 0, 'How a 3-D-printer changed a 4-year-old''s heart and life', 'Earlier this year, the hospital got a 3-D printer that makes exact replicas of organs that doctors can use to plan surgery, and even do practice operations. The printer uses images from patients'' MRI or CT scan images as a template and lays down layers of rubber or plastic.\r\n\r\nDr. Redmond Burke, director of pediatric cardiovascular surgery at Nicklaus Children''s Hospital, meditated on the model of Mia''s heart for a couple of weeks. He showed it to colleagues for their input and even carried it around in his gym bag for quick reference.\r\n\r\nBurke finally had the "Aha!" insight. Instead of making an incision on the left side for this type of heart defect, called double aortic arch, he should cut into Mia''s chest from the right.', '1310151216391039698.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id_user` int(10) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_pass` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `user_name`, `user_pass`) VALUES
(1, 'sumate', 'dfsdfsdf@hotmail.com'),
(2, 'sdfsdfs', 'aaa3tg'),
(3, 'Hello', 'content Hello'),
(4, 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
 ADD PRIMARY KEY (`id_topic`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
MODIFY `id_topic` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=90;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
