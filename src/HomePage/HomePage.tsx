import { useState, useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FeaturedSellers from "./FeaturedSellers/FeaturedSellers";
import "./HomePage.css";
import LatestListings from "./Latest Listings/LatestListings";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "one.jpg", alt: "Image 1" },
    { src: "two.jpg", alt: "Image 2" },
    { src: "three.jpg", alt: "Image 3" },
    { src: "four.jpg", alt: "Image 3" },
    { src: "five.jpg", alt: "Image 3" },
    { src: "six.jpg", alt: "Image 3" },
    { src: "seven.jpg", alt: "Image 3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getSlideStyles = (index: number) => {
    if (index === currentIndex) {
      return "opacity-100 translate-x-0";
    }
    if (index === (currentIndex - 1 + images.length) % images.length) {
      // Previous image moves to the left
      return "opacity-0 -translate-x-full";
    }
    // Next image starts at right and waits its turn
    return "opacity-0 translate-x-full";
  };

  return (
    <>
      <div className="sticky justify-center px-4">
        <div className="w-sceen px-6 py-2 bg-[#FDF8F5] flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <img src="loope.png" alt="Loope logo" />
          </div>
          <div className=" m-auto p-3 bg-[#18403C] rounded-full flex justify-center gap-20 w-1/2">
            <HomeIcon fontSize="large" className="text-white cursor-pointer" />
            <CategoryIcon
              titleAccess="Category"
              fontSize="large"
              className="text-white cursor-pointer"
              role="button"
            />
            <AddCircleIcon
              titleAccess="Add Item"
              fontSize="large"
              className="text-white cursor-pointer"
              role="button"
            />
            <LocalMallIcon
              titleAccess="Shop"
              fontSize="large"
              className="text-white cursor-pointer"
              role="button"
            />
            <AccountCircleIcon
              titleAccess="Profile"
              fontSize="large"
              className="text-white cursor-pointer"
              role="button"
            />
          </div>
          <div className="mr-20">
            <input
              type="search"
              placeholder="Search"
              className="px-4 py-2 mr-6 rounded-full"
            />
            <FilterAltIcon
              titleAccess="Filter"
              fontSize="medium"
              htmlColor="#18403C"
              role="button"
            />
          </div>
          <NotificationsIcon
            titleAccess="Notifications"
            fontSize="medium"
            htmlColor="#18403C"
            role="button"
          />
        </div>

        <div className="featured-sellers grid-rows-1 mt-5">
          <div>
            <h1 className="text-3xl font-medium mb-5">Featured Sellers</h1>
            <div className="flex gap-x-5 overflow-x-auto">
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
              <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            </div>
          </div>
          <div className="!w-full relative overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-all duration-500 ease-in-out
            ${getSlideStyles(index)}
          `}
              />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <LatestListings />
        </div>
      </div>
    </>
  );
}

export default HomePage;
