# MySQL-Front 3.2  (Build 13.39)

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='SYSTEM' */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;


# Host: localhost    Database: grailstutorial
# ------------------------------------------------------
# Server version 5.0.22-community-nt

DROP DATABASE IF EXISTS `grailstutorial`;
CREATE DATABASE `grailstutorial` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `grailstutorial`;

#
# Table structure for table computer_management
#

CREATE TABLE `computer_management` (
  `serial_no` varchar(20) NOT NULL default '',
  `brand` varchar(20) NOT NULL default '',
  `model` varchar(50) NOT NULL default '',
  `employee_id` varchar(8) default NULL,
  PRIMARY KEY  (`serial_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Dumping data for table computer_management
#

INSERT INTO `computer_management` VALUES ('123WD4AXW','Apple','1.83 GHz 17\" Intel iMac','janedoe');
INSERT INTO `computer_management` VALUES ('65WRA5002','Commodore','C 64','janedoe');
INSERT INTO `computer_management` VALUES ('H61TER39ZZ','Lenovo','1.86 GHz 15.4\" T43 ThinkPad','jrudolph');
INSERT INTO `computer_management` VALUES ('T085172906','Tandy','TRS-80 Model III',NULL);

#
# Table structure for table employees
#

CREATE TABLE `employees` (
  `employee_id` varchar(8) NOT NULL default '',
  `first_name` varchar(30) NOT NULL default '',
  `last_name` varchar(30) NOT NULL default '',
  `start_date` date NOT NULL default '0000-00-00',
  PRIMARY KEY  (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Dumping data for table employees
#

INSERT INTO `employees` VALUES ('bobsmith','Jon','Smith','1999-06-23');
INSERT INTO `employees` VALUES ('janedoe','Jane','Doe','2006-05-15');
INSERT INTO `employees` VALUES ('jrudolph','Jason','Rudolph','2006-06-04');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
