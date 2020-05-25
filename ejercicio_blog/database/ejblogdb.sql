CREATE DATABASE  IF NOT EXISTS `ejblogdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ejblogdb`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: ejblogdb
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` bigint NOT NULL,
  `titulo` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenido` varchar(3000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` bigint NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Como ganar la loteria','Compre un boleto. Si tiene un poco de suerte, lo ganara. Confie en mi. Esoooo, va pa i sabia\r\nke ahi','https://cdn11.bigcommerce.com/s-7o9yy05/images/stencil/1200x1800/products/264/637/samson_large__92098.1376333929.jpg?c=2',1,'2020-05-13 13:20:38','2020-05-14 04:36:18'),(2,'Loreal ipsum?','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel elit nec odio iaculis suscipit vitae nec augue. Integer porta at nisl vitae pretium. Quisque cursus viverra porta. In sed vestibulum odio, vel dignissim tortor. Cras lobortis efficitur quam id aliquam. Ut bibendum est sapien, ut scelerisque nunc vestibulum id. Integer felis nisl, rhoncus a ornare nec, lacinia quis metus. Fusce sit amet turpis sed ipsum ultrices pharetra. Curabitur tempor vitae orci in aliquam. Donec quis consequat lectus. Nam ornare commodo volutpat. Cras eros eros, dictum quis molestie in, elementum auctor velit.\r\n\r\nsape','https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg',1,'2020-05-13 13:20:38','2020-05-14 04:35:42'),(3,'Elon Musk Autobiography ','Born and raised in Pretoria, South Africa, Musk briefly attended the University of Pretoria before moving to Canada when he was 17 to attend Queen\'s University. He transferred to the University of Pennsylvania two years later, where he received a bachelor\'s degree in economics from the Wharton School and a bachelor\'s degree in physics from the College of Arts and Sciences. He began a Ph.D. in applied physics and material sciences at Stanford University in 1995 but dropped out after two days to pursue a business career. He subsequently co-founded (with his brother Kimbal) Zip2, a web software company, which was acquired by Compaq for $340 million in 1999. Musk then founded X.com, an online bank. It merged with Confinity in 2000, which had launched PayPal the previous year and was subsequently bought by eBay for $1.5 billion in October 2002.[8][18][19][20]\r\nsabe','https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',21,'2020-05-13 13:20:38','2020-05-20 14:08:21'),(4,'Steve Jobs Autobiography ','Steven Paul Jobs (/dʒɒbz/; February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc., the chairman and majority shareholder of Pixar, a member of The Walt Disney Company\'s board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak.','https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5536592a70a1ae8d775df6a3/portada.jpg',5,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(5,'Bill Gates Autobiography ','William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He is one of the best-known entrepreneurs and pioneers of the microcomputer revolution of the 1970s and 1980s. Born and raised in Seattle, Washington, Gates co-founded Microsoft with childhood friend Paul Allen in 1975, in Albuquerque, New Mexico; it went on to become the world\'s largest personal computer software company.[4][a] Gates led the company as chairman and CEO until stepping down as CEO in January 2000, but he remained chairman and became chief software architect.[7] During the late 1990s, Gates had been criticized for his business tactics, which have been considered anti-competitive. This opinion has been upheld by numerous court rulings.[8] In June 2006, Gates announced that he would be transitioning to a part-time role at Microsoft and full-time work at the Bill & Melinda Gates Foundation, the private charitable foundation that he and his wife, Melinda Gates, established in 2000.[9] He gradually transferred his duties to Ray Ozzie and Craig Mundie.[10] He stepped down as chairman of Microsoft in February 2014 and assumed a new post as technology adviser to support the newly appointed CEO Satya Nadella.[11]','https://i.insider.com/5e86f171d5873a0d6a6616d3?width=1136&format=jpeg',2,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(6,'Paco Casal Autobiography ','In the middle of the 2000s, Casal announced that he would gradually leave the representation of players to focus fully on his television projects: Tenfield, and especially to GolTV, a channel based in Miami to be broadcast to all Latin America.[5] The world of the representation of footballers in Uruguay was now open for new entrepreneurs.Nowadays, the power of Casal attempts to cross borders as he tried entering the Argentine football where struck against the figure of Julio Grondona.[6] However, in 2011, he managed to get the rights of the international tournament organized by Conmebol, which Grondona has much interference.','https://pbs.twimg.com/profile_images/1134773964209827840/uRl2eQ27_400x400.jpg',1,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(7,'NWoW - New Ways of Working','Things tend to work in cycles. What was once new and shiny, soon becomes old when something newer and shinier comes along. Take the iPod. Once it was the most groundbreaking piece of technology in the music consumption world. Now it is almost forgotten, a relic of a pre-smartphone age where the iPod Nano ruled the word, and you needed a separate digital camera to take a decent picture. Soon the smartphone will go the same way. The world keeps on turning. However, the modern workplace does not seem to be on this cycle. The iPod equivalent, the Baby Boomers and Millennials, are hanging on, and are in fact still having a discernible impact on business success. Meanwhile the new and shiny Generation Z are entering the workplace, but they are not replacing the older generations. Not yet anyway. Instead they are all making up a multigenerational workforce. This has meant there has been a major shift in management and operations.','https://businessday.ng/wp-content/uploads/2020/04/Untitled-design-52-1.png',3,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(8,'Node.js Tutorial For Absolute Beginners','You\'ll learn how asynchronous code works in Node and the Node event loop, as well as how to use the event emitter, streams, buffers, pipes, and work with files. We\'ll see how that leads to building a web server in Node. We\'ll dive into web sites, web apps and APIs with Express and learn how Express can save us time as Node developers. During it all you\'ll gain a deep understanding of the JavaScript concepts and other computer science concepts that power Node.','https://pbs.twimg.com/profile_images/687369266421698565/gATINhvZ_400x400.png',5,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(9,'THE BEST HOMEMADE TACOS','Traditional Mexican beef tacos are made with marinated sliced or shredded beef on soft corn tortillas.  Those are great!  But, that’s not what most Americans think of when we think of classic tacos. Lean ground beef is the best beef to use for making tacos because you don’t need to drain off any fat after cooking it. There is just enough fat in the beef to make it super flavorful, but not so much to make it greasy.  Skipping the step to drain the fat makes this a quick and easy taco recipe.','https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg',4,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(10,'Call of Duty Modern Warfare update','Call of Duty Modern Warfare players have seen a brand new Warzone and MW update get released today by Infinity Ward. The new Call of Duty Modern Warfare and Warzone update is available across all platforms, so it is available to download on the PS4, Xbox One and PCs. The latest Call of Duty update includes fixes, gameplay fine tuning as well as addressing a balance issue with the .357 Snake Shot.','https://cdn.vox-cdn.com/thumbor/91QqlYsAi5Om4cChEhZ3bH4-0mc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19821236/AGB_WZ_Strategy_Guide_Personalized.jpg',21,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(11,'Pac-Man','esde que Pac-Man fue lanzado el 21 de mayo de 1980, fue un éxito. Se convirtió en un fenómeno mundial en la industria de los videojuegos, llegó a tener el récord Guiness del videojuego de arcade más exitoso de todos los tiempos con un total de 293 822 máquinas vendidas desde 1981 hasta 1987 y acabó con el dominio de Space Invaders, donde la acción predominante era shoot \'em up (disparar a todos) para reemplazarla por un formato único, más humorístico y poco violento que gustó a muchísimas personas. \"Todos los juegos que estaban disponibles en ese entonces -fines de los 70- eran de tipo violento, de guerra o como el Space Invaders\", recordó en una entrevista Iwatani, agregando que \"no había juegos que todos pudieran disfrutar, y especialmente no había ninguno para mujeres. Quería hacer un juego \'cómico\' que las mujeres pudiesen disfrutar\".[1]','https://as01.epimg.net/meristation/imagenes/2004/08/30/album/1093823820_823820_000001_album_normal.jpg',2,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(12,'Pac-Man2','esde que Pac-Man fue lanzado el 21 de mayo de 1980, fue un éxito. Se convirtió en un fenómeno mundial en la industria de los videojuegos, llegó a tener el récord Guiness del videojuego de arcade más exitoso de todos los tiempos con un total de 293 822 máquinas vendidas desde 1981 hasta 1987 y acabó con el dominio de Space Invaders, donde la acción predominante era shoot \'em up (disparar a todos) para reemplazarla por un formato único, más humorístico y poco violento que gustó a muchísimas personas. \"Todos los juegos que estaban disponibles en ese entonces -fines de los 70- eran de tipo violento, de guerra o como el Space Invaders\", recordó en una entrevista Iwatani, agregando que \"no había juegos que todos pudieran disfrutar, y especialmente no había ninguno para mujeres. Quería hacer un juego \'cómico\' que las mujeres pudiesen disfrutar\".[1]','https://as01.epimg.net/meristation/imagenes/2004/08/30/album/1093823820_823820_000001_album_normal.jpg',2,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(13,'Pac-Man3','esde que Pac-Man fue lanzado el 21 de mayo de 1980, fue un éxito. Se convirtió en un fenómeno mundial en la industria de los videojuegos, llegó a tener el récord Guiness del videojuego de arcade más exitoso de todos los tiempos con un total de 293 822 máquinas vendidas desde 1981 hasta 1987 y acabó con el dominio de Space Invaders, donde la acción predominante era shoot \'em up (disparar a todos) para reemplazarla por un formato único, más humorístico y poco violento que gustó a muchísimas personas. \"Todos los juegos que estaban disponibles en ese entonces -fines de los 70- eran de tipo violento, de guerra o como el Space Invaders\", recordó en una entrevista Iwatani, agregando que \"no había juegos que todos pudieran disfrutar, y especialmente no había ninguno para mujeres. Quería hacer un juego \'cómico\' que las mujeres pudiesen disfrutar\".[1]','https://as01.epimg.net/meristation/imagenes/2004/08/30/album/1093823820_823820_000001_album_normal.jpg',2,'2020-05-13 13:20:38','2020-05-13 13:20:38'),(16,'Pac-Man6','esde que Pac-Man fue lanzado el 21 de mayo de 1980, fue un éxito. Se convirtió en un fenómeno mundial en la industria de los videojuegos, llegó a tener el récord Guiness del videojuego de arcade más exitoso de todos los tiempos con un total de 293 822 máquinas vendidas desde 1981 hasta 1987 y acabó con el dominio de Space Invaders, donde la acción predominante era shoot \'em up (disparar a todos) para reemplazarla por un formato único, más humorístico y poco violento que gustó a muchísimas personas. \"Todos los juegos que estaban disponibles en ese entonces -fines de los 70- eran de tipo violento, de guerra o como el Space Invaders\", recordó en una entrevista Iwatani, agregando que \"no había juegos que todos pudieran disfrutar, y especialmente no había ninguno para mujeres. Quería hacer un juego \'cómico\' que las mujeres pudiesen disfrutar\".[1]','https://as01.epimg.net/meristation/imagenes/2004/08/30/album/1093823820_823820_000001_album_normal.jpg',2,'2020-05-13 13:20:38','2020-05-13 13:20:38');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Juan','Marfia','juanmarfia@mail.com','2020-05-13 13:20:38','2020-05-13 13:20:38',''),(2,'Bill','Gates','billg@gmail.com','2020-05-13 00:00:00','2020-05-13 00:00:00',''),(3,'Steve','Jobs','stevej@hotmail.com','2020-05-13 13:20:38','2020-05-13 13:20:38',''),(4,'Elon','Musk','elonm@adinet.com.uy','2020-05-13 13:20:38','2020-05-13 13:20:38',''),(5,'El','Reja','reejabuceopeniarol1982@yahoo.com','2020-05-13 13:20:38','2020-05-13 13:20:38',''),(21,'hola','hola','hola@hola.com','2020-05-20 13:52:12','2020-05-20 13:52:12','$2a$10$xj8PQZOcObpdZ6/JqTze8.b4bjCn.ApfJyTTo4sh1KY81OR/qB9f2');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` bigint NOT NULL,
  `comentario` varchar(3000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idArticulo` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-20 11:10:31
