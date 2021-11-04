-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `songsnum` int(11) DEFAULT NULL,
  `copiesnum` int(11) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'Kill ’Em All',1983,10,3000000,1,NULL),(2,'Ride the Lightning',1984,8,6000000,1,'https://upload.wikimedia.org/wikipedia/ru/f/fc/Ride_the_Lightning.jpg'),(3,'Master of Puppets',1986,8,6000000,1,'https://upload.wikimedia.org/wikipedia/ru/a/a4/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%82%D1%80%D0%B5%D1%82%D1%8C%D0%B5%D0%B3%D0%BE_%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%B0_Metallica.jp'),(4,'…And Justice for All',1988,9,8000000,1,'https://upload.wikimedia.org/wikipedia/ru/d/d7/And_Justice_For_All.jpg'),(5,'Metallica',1991,12,31000000,1,'https://upload.wikimedia.org/wikipedia/ru/c/c2/Metallica_Album.jpg'),(6,'Load',1996,14,5000000,1,'https://upload.wikimedia.org/wikipedia/ru/b/b7/Metallica_Load_Hi-Res.jpg'),(7,'ReLoad',1997,13,3000000,1,'https://upload.wikimedia.org/wikipedia/ru/b/b0/Metallica_Reload.jpg'),(8,'St. Anger',2003,11,6000000,1,'https://upload.wikimedia.org/wikipedia/ru/a/a9/St.Anger_cover.jpg'),(9,'Death Magnetic',2008,10,2000000,1,'https://upload.wikimedia.org/wikipedia/ru/0/09/Metallica_Death_Magnetic.jpg'),(10,'Hardwired… To Self-Destruct',2016,14,1000000,1,'https://upload.wikimedia.org/wikipedia/ru/9/93/Metallica_Hardwired..._To_Self-Destruct_2016.jpeg'),(11,'System of a Down',1998,13,1000000,2,'https://upload.wikimedia.org/wikipedia/ru/8/80/System_Of_A_Down_%28%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%29_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg'),(12,'Toxicity',2001,14,12000000,2,'https://upload.wikimedia.org/wikipedia/ru/e/e7/SOAD_Album_02.jpg'),(13,'Steal This Album!',2002,16,1000000,2,'https://upload.wikimedia.org/wikipedia/ru/b/b8/System_Of_A_Down_-_Steal_This_Album%21_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg'),(14,'Mezmerize',2005,11,1000000,2,'https://upload.wikimedia.org/wikipedia/ru/9/97/Mezmerize.jpg'),(15,'Hypnotize',2005,12,1000000,2,'https://upload.wikimedia.org/wikipedia/ru/0/07/System_of_a_Down_-_Hypnotize.jpg');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `composition` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Metallica','4','trash metal','USA',1981),(2,'System of a down','4','nu metal','USA',1995);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `awards` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'James Hetfield','vocalist',1963,'USA','Grammy'),(2,'Lars Ulrich','drummer',1963,'Danmark','Grammy'),(3,'Kirk Hammett','guitarist',1962,'USA','Grammy'),(4,'Roberto Trujillo','bassist',1964,'USA','Grammy'),(5,'Serj Tankian','vocalist',1967,'Lebanon','Grammy'),(6,'John Dolmayan','drummer',1973,'Lebanon','Grammy'),(7,'Daron Malakian','guitarist',1975,'USA','Grammy'),(8,'Shavo Odadjian','bassist',1974,'Armenia','Grammy');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `albumId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-04 15:22:41
