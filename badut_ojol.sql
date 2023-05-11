-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2023 at 07:05 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `badut_ojol`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `nama_lengkap` varchar(200) DEFAULT NULL,
  `tanggal_lahir` varchar(200) DEFAULT NULL,
  `saldo` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `password`, `nama_lengkap`, `tanggal_lahir`, `saldo`) VALUES
(1, 'XQbOtQ==', '499040539588de80b9ffe324cdaa2caff85eb5e15a6ae35e5a92f5114cb1cb40', 'ZRDBuq6KUBCpyebY', 'HU+f6ffSCVPJhQ==', 0);

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `nama_lengkap` varchar(200) DEFAULT NULL,
  `tanggal_lahir` varchar(200) DEFAULT NULL,
  `plat_nomor` varchar(200) DEFAULT NULL,
  `merk_kendaraan` varchar(200) DEFAULT NULL,
  `warna_kendaraan` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `username`, `password`, `nama_lengkap`, `tanggal_lahir`, `plat_nomor`, `merk_kendaraan`, `warna_kendaraan`) VALUES
(1, 'XQbOtes=', '499040539588de80b9ffe324cdaa2caff85eb5e15a6ae35e5a92f5114cb1cb40', 'ZRDBuq6KUBCpyebY', 'HU+f6ffSCVPJhQ==', 'Y06W4+imaw==', 'Vario', 'Merah');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `nama` varchar(200) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `merchant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `merchants`
--

CREATE TABLE `merchants` (
  `id` int(11) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `nama_lengkap` varchar(200) DEFAULT NULL,
  `tanggal_lahir` varchar(200) DEFAULT NULL,
  `nama_resto` varchar(200) DEFAULT NULL,
  `alamat` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `merchants`
--

INSERT INTO `merchants` (`id`, `username`, `password`, `nama_lengkap`, `tanggal_lahir`, `nama_resto`, `alamat`) VALUES
(1, 'XQbOteg=', '499040539588de80b9ffe324cdaa2caff85eb5e15a6ae35e5a92f5114cb1cb40', 'ZRDBuq6KUBCpyebY', 'HU+f6ffSCVPJhQ==', 'XRrcr7XT', 'RR7DurSpVBye3ubE3MQ=');

-- --------------------------------------------------------

--
-- Table structure for table `order_foods`
--

CREATE TABLE `order_foods` (
  `id` int(11) NOT NULL,
  `alamat_tujuan` varchar(200) DEFAULT NULL,
  `total_makanan` double DEFAULT NULL,
  `tarif` double DEFAULT NULL,
  `total_bayar` double DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `customer_id` int(11) NOT NULL,
  `drivers_id` int(11) DEFAULT NULL,
  `merchant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order_menu`
--

CREATE TABLE `order_menu` (
  `order_food_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `jumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order_rides`
--

CREATE TABLE `order_rides` (
  `id` int(11) NOT NULL,
  `alamat_jemput` varchar(200) DEFAULT NULL,
  `alamat_tujuan` varchar(200) DEFAULT NULL,
  `jarak` decimal(10,0) DEFAULT NULL,
  `tarif` double DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `customer_id` int(11) NOT NULL,
  `driver_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_rides`
--

INSERT INTO `order_rides` (`id`, `alamat_jemput`, `alamat_tujuan`, `jarak`, `tarif`, `status`, `customer_id`, `driver_id`) VALUES
(0, 'alamat 1', 'alamat 2', '3', 5000, 'Selesai', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_menu_merchants_idx` (`merchant_id`);

--
-- Indexes for table `merchants`
--
ALTER TABLE `merchants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_foods`
--
ALTER TABLE `order_foods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_foods_customers1_idx` (`customer_id`),
  ADD KEY `fk_order_foods_drivers1_idx` (`drivers_id`),
  ADD KEY `fk_order_foods_merchants1_idx` (`merchant_id`);

--
-- Indexes for table `order_menu`
--
ALTER TABLE `order_menu`
  ADD PRIMARY KEY (`order_food_id`,`menu_id`),
  ADD KEY `fk_order_foods_has_menu_menu1_idx` (`menu_id`),
  ADD KEY `fk_order_foods_has_menu_order_foods1_idx` (`order_food_id`);

--
-- Indexes for table `order_rides`
--
ALTER TABLE `order_rides`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_rides_customers1_idx` (`customer_id`),
  ADD KEY `fk_order_rides_drivers1_idx` (`driver_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `merchants`
--
ALTER TABLE `merchants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `fk_menu_merchants` FOREIGN KEY (`merchant_id`) REFERENCES `merchants` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order_foods`
--
ALTER TABLE `order_foods`
  ADD CONSTRAINT `fk_order_foods_customers1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_foods_drivers1` FOREIGN KEY (`drivers_id`) REFERENCES `drivers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_foods_merchants1` FOREIGN KEY (`merchant_id`) REFERENCES `merchants` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order_menu`
--
ALTER TABLE `order_menu`
  ADD CONSTRAINT `fk_order_foods_has_menu_menu1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_foods_has_menu_order_foods1` FOREIGN KEY (`order_food_id`) REFERENCES `order_foods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order_rides`
--
ALTER TABLE `order_rides`
  ADD CONSTRAINT `fk_order_rides_customers1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_rides_drivers1` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
