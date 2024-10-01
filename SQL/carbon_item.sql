CREATE DATABASE  IF NOT EXISTS `carbon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `carbon`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: carbon
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `item_name` varchar(255) NOT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `carbon_emission` float DEFAULT NULL,
  `level` varchar(50) DEFAULT NULL,
  `source` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,8,'咖啡菇','公克',0.000003,'運算後具誤差資料','產品碳足跡資訊網'),(2,8,'斤耳','公克',0.00000278,'運算後具誤差資料','產品碳足跡資訊網'),(3,8,'冬雪菇','公克',0.00000286,'運算後具誤差資料','產品碳足跡資訊網'),(4,8,'杏鮑菇','公克',0.00000339,'運算後具誤差資料','產品碳足跡資訊網'),(5,8,'秀珍菇','公克',0.00000288,'運算後具誤差資料','產品碳足跡資訊網'),(6,8,'柳松菇','公克',0.00000322,'運算後具誤差資料','產品碳足跡資訊網'),(7,8,'珊瑚菇','公克',0.00000282,'運算後具誤差資料','產品碳足跡資訊網'),(8,8,'夏雪菇','公克',0.00000287,'運算後具誤差資料','產品碳足跡資訊網'),(9,8,'猴頭菇','公克',0.00000341,'運算後具誤差資料','產品碳足跡資訊網'),(10,8,'黑木耳','公克',0.00000279,'運算後具誤差資料','產品碳足跡資訊網'),(11,8,'豬肚菇','公克',0.00000309,'運算後具誤差資料','產品碳足跡資訊網'),(12,8,'鮑魚菇','公克',0.0000032,'運算後具誤差資料','產品碳足跡資訊網'),(13,8,'食用玉熟黍','公克',0.0003,'準確資料','產品碳足跡資訊網'),(14,9,'新竹貢丸','公克',0.0017,'準確資料','產品碳足跡資訊網'),(15,9,'鰹魚柴魚花','公克',0.00382,'準確資料','產品碳足跡資訊網'),(16,9,'鯖魚柴魚花','公克',0.00363,'準確資料','產品碳足跡資訊網'),(17,10,'養殖冷凍白蝦','公克',0.00937,'準確資料','產品碳足跡資訊網'),(18,10,'養殖文蛤','公克',0.00487,'準確資料','產品碳足跡資訊網'),(19,10,'台灣鯛','公克',0.00229,'準確資料','產品碳足跡資訊網'),(20,10,'七星鱸','公克',0.00487,'準確資料','產品碳足跡資訊網'),(21,10,'去殼牡蠣','公克',0.0011,'準確資料','產品碳足跡資訊網'),(22,5,'豬油','公克',0.000785,'準確資料','產品碳足跡資訊網'),(23,5,'牛油','公克',0.000694,'準確資料','產品碳足跡資訊網'),(24,8,'高麗菜','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(25,8,'空心菜','公克',0.00005,'推廣用試算資料','推廣用試算資料'),(26,8,'豆芽菜','公克',0.0005,'推廣用試算資料','推廣用試算資料'),(27,8,'胡蘿蔔','公克',0.00015,'推廣用試算資料','推廣用試算資料'),(28,8,'茄子','公克',0.00015,'推廣用試算資料','推廣用試算資料'),(29,8,'絲瓜','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(30,8,'番茄','公克',0.0004,'推廣用試算資料','推廣用試算資料'),(31,8,'菠菜','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(32,8,'青江菜','公克',0.00005,'推廣用試算資料','推廣用試算資料'),(33,8,'青椒','公克',0.0002,'推廣用試算資料','推廣用試算資料'),(34,8,'芥藍菜','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(35,8,'白蘿蔔','公克',0.0002,'推廣用試算資料','推廣用試算資料'),(36,8,'小黃瓜','公克',0.00002,'推廣用試算資料','推廣用試算資料'),(37,8,'南瓜','公克',0.00015,'推廣用試算資料','推廣用試算資料'),(38,8,'秋葵','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(39,8,'白菜','公克',0.00005,'推廣用試算資料','推廣用試算資料'),(40,8,'芋頭','公克',0.0002,'推廣用試算資料','推廣用試算資料'),(41,8,'韭菜','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(42,8,'青蔥','公克',0.0001,'推廣用試算資料','推廣用試算資料'),(43,1,'小型汽車1.5L','公里',0.2044,'準確資料','產品碳足跡資訊網'),(44,1,'中型汽車2.0L','公里',0.2628,'準確資料','產品碳足跡資訊網'),(45,1,'大型汽車或SUV2.5L','公里',0.365,'準確資料','產品碳足跡資訊網'),(46,1,'機車','公里',0.0876,'準確資料','產品碳足跡資訊網'),(47,1,'柴油卡車','公里',0.415,'準確資料','產品碳足跡資訊網'),(48,2,'芋香米','公克',0.0017,'準確資料','產品碳足跡資訊網'),(49,2,'有機越光米','公克',0.00159,'準確資料','產品碳足跡資訊網'),(50,2,'馬鈴薯','公克',0.00011,'準確資料','產品碳足跡資訊網'),(51,2,'麵粉','公克',0.000531,'準確資料','產品碳足跡資訊網'),(52,3,'豬肉(不帶骨)','公克',0.0371,'準確資料','產品碳足跡資訊網'),(53,3,'豬肋排','公克',0.0367,'準確資料','產品碳足跡資訊網'),(54,3,'牛肉','公克',0.155,'運算後具誤差資料','願景工程推廣網站'),(55,3,'羊肉','公克',0.0584,'運算後具誤差資料','願景工程推廣網站'),(56,3,'雞肉','公克',0.0182,'運算後具誤差資料','願景工程推廣網站'),(57,10,'魚肉','公克',0.0134,'運算後具誤差資料','願景工程推廣網站'),(58,10,'蝦','公克',0.0093,'運算後具誤差資料','願景工程推廣網站'),(59,4,'雞蛋','顆',0.0032,'準確資料','產品碳足跡資訊網'),(60,4,'鮮蛋','顆',0.0018,'準確資料','產品碳足跡資訊網'),(61,4,'豆腐','公克',0.0008,'運算後具誤差資料','願景工程推廣網站'),(62,5,'大豆沙拉油','毫升',1.7,'準確資料','產品碳足跡資訊網'),(63,5,'食用烤酥油','毫升',3.75,'準確資料','產品碳足跡資訊網'),(64,5,'葵花油','毫升',5.78,'準確資料','產品碳足跡資訊網'),(65,6,'豆漿','毫升',0.84,'準確資料','產品碳足跡資訊網'),(66,6,'奶茶','毫升',0.52,'準確資料','產品碳足跡資訊網'),(67,6,'紅茶','毫升',0.4,'準確資料','產品碳足跡資訊網'),(68,6,'綠茶','毫升',0.44,'準確資料','產品碳足跡資訊網'),(69,6,'黑咖啡','毫升',0.304,'準確資料','產品碳足跡資訊網'),(70,6,'柳橙汁','毫升',0.56,'準確資料','產品碳足跡資訊網'),(71,6,'鮮乳','毫升',2.48,'準確資料','產品碳足跡資訊網'),(72,7,'液化石油氣','分鐘',2.21,'運算後具誤差資料','產品碳足跡資訊網'),(73,7,'自來水','毫升',0.000233,'運算後具誤差資料','產品碳足跡資訊網'),(74,7,'700W電鍋','分鐘',0.00707,'運算後具誤差資料','產品碳足跡資訊網'),(75,7,'1950W飯鍋','分鐘',0.0197,'運算後具誤差資料','產品碳足跡資訊網'),(76,7,'1400W微波爐','分鐘',0.0141,'運算後具誤差資料','產品碳足跡資訊網'),(77,3,'澳洲牛肉','公克',0.027,'推廣用試算資料','推廣用試算資料'),(78,3,'美國牛肉','公克',0.027,'推廣用試算資料','推廣用試算資料'),(79,10,'挪威鮭魚','公克',0.011,'推廣用試算資料','推廣用試算資料'),(80,10,'智利鮭魚','公克',0.011,'推廣用試算資料','推廣用試算資料'),(81,6,'中南美洲咖啡豆','公克',0.016,'推廣用試算資料','推廣用試算資料'),(82,6,'歐洲牛奶','公升',0.002,'推廣用試算資料','推廣用試算資料'),(83,6,'澳洲牛奶','公升',0.002,'推廣用試算資料','推廣用試算資料'),(84,8,'南美香蕉','公克',0.0012,'推廣用試算資料','推廣用試算資料'),(85,2,'泰國香米','公克',0.0035,'推廣用試算資料','推廣用試算資料'),(86,6,'法國葡萄酒','公升',0.0026,'推廣用試算資料','推廣用試算資料'),(87,6,'澳洲葡萄酒','公升',0.0026,'推廣用試算資料','推廣用試算資料'),(88,8,'中南美洲鳳梨','公克',0.0014,'推廣用試算資料','推廣用試算資料'),(89,3,'歐洲豬肉','公克',0.006,'推廣用試算資料','推廣用試算資料'),(90,3,'美國豬肉','公克',0.006,'推廣用試算資料','推廣用試算資料'),(91,3,'巴西雞肉','公克',0.005,'推廣用試算資料','推廣用試算資料'),(92,3,'泰國雞肉','公克',0.005,'推廣用試算資料','推廣用試算資料'),(93,3,'紐西蘭羊肉','公克',0.024,'推廣用試算資料','推廣用試算資料'),(94,3,'澳洲羊肉','公克',0.024,'推廣用試算資料','推廣用試算資料'),(95,3,'美國火雞肉','公克',0.0101,'推廣用試算資料','推廣用試算資料'),(96,3,'法國鴨肉','公克',0.007,'推廣用試算資料','推廣用試算資料'),(97,10,'法國生蠔','公克',0.000915,'推廣用試算資料','推廣用試算資料'),(98,10,'加拿大龍蝦','公克',0.00515,'推廣用試算資料','推廣用試算資料'),(99,10,'冰島鱈魚','公克',0.0061575,'推廣用試算資料','推廣用試算資料'),(100,10,'澳洲鮑魚','公克',0.008105,'推廣用試算資料','推廣用試算資料');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-26 22:27:27