import { useState,useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./HomePage.css"
import LatestListings from "./Latest Listings/LatestListings";
import RecentlyViewed from "./Latest Listings/RecentlyViewed";
function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "one.jpg", alt: "Image 1" },
    { src: "two.jpg", alt: "Image 2" },
    { src: "three.jpg", alt: "Image 3" },
    { src: "four.jpg", alt: "Image 4" },
    { src: "five.jpg", alt: "Image 5" },
    { src: "six.jpg", alt: "Image 6" },
    { src: "seven.jpg", alt: "Image 7" },
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
    <div className="p-1">
      <div className="sticky w-sceen px-6 py-2 bg-[#f9e2d1] flex justify-between items-center rounded-lg p-3">
        <div className="flex items-center gap-x-5">
          <img src="/public/loope_head.png" alt="Loope logo" />
        </div>
        <div className="m-auto p-3 bg-[#18403C] rounded-full flex justify-center gap-20 w-3/5">
        <button>
          <HomeIcon fontSize="large" className="text-white cursor-pointer" color="success" />
          <h1>HOME</h1>
        </button>
        <button>
          <CategoryIcon
            titleAccess="Category"
            fontSize="large"
            className="text-white cursor-pointer"
          />
          <h1>CATEGORY</h1>
        </button>
        <button>
          <AddCircleIcon
            titleAccess="Add Item"
            fontSize="large"
            className="text-white cursor-pointer"
          />
          <h1>ADD ITEM</h1>
        </button>
        <button>
          <LocalMallIcon
          titleAccess="Shop"
            fontSize="large"
            className="text-white cursor-pointer"
          />
          <h1>SHIPPING</h1>
        </button>
        <button>
            <AccountCircleIcon
              titleAccess="Profile"
              fontSize="large"
              className="text-white cursor-pointer"
            />
            <h1>PROFILE</h1>
        </button>
        </div>
        <div className="mr-20">
          <input
            type="search"
            placeholder="Search"
            className="px-4 py-2 mr-6 rounded-full w-64"
          />
          <FilterAltIcon
            titleAccess="Filter"
            fontSize="medium" 
            htmlColor="#18403C"
            role="button"/>
        </div>
        <NotificationsIcon
          titleAccess="Notifications"
          fontSize="medium" 
          htmlColor="#18403C"
          role="button"/>
      </div>
      </div>
      <div className="grid grid-rows-3 gap-4 featuured-sellers">
        <div className="stories mx-auto">
          <h1 className="text-3xl  mb-5 text-[#0E150E] pt-5">FEATURED SELLERS</h1>
          <div className="flex gap-x-5 px-10">
            <img src="man.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="man2.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="girl.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="girl2.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="man3.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="girl3.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="girl4.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
            <img src="girl5.jpeg" alt="robot" className="border border-solid border-4 border-green-300 p-1"/>
          </div>
        </div>
        <div className="!w-full relative overflow-hidden row-span-2 mr-5 h-96 ">
            {images.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`
                    absolute top-0 left-0 w-full h-full rounded-lg object-cover p-6
                    transition-all duration-500 ease-in-out 
                    ${getSlideStyles(index)}
                `}
              />
            ))}
        </div>
      </div>
      <div className="mt-5 inside-container">
          <LatestListings/>
      </div>
      <div className="mt-5 inside-container">
      <RecentlyViewed />
      </div>
    </>
  );
}

export default HomePage;
