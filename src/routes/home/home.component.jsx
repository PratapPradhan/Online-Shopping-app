import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const home = () => {
  const categories = [
    {
      id: 1,
      title: "Mobile",
      imageUrl:
        "https://image.shutterstock.com/image-photo/women-texting-on-smartphone-cafe-600w-1016693497.jpg",
    },
    {
      id: 2,
      title: "TV",
      imageUrl:
        "https://image.shutterstock.com/image-photo/exciting-adventure-movie-on-widescreen-600w-2074940242.jpg",
    },
    {
      id: 3,
      title: "Refrigerator",
      imageUrl:
        "https://image.shutterstock.com/image-photo/looking-inside-refrigerator-600w-529037965.jpg",
    },
    {
      id: 4,
      title: "Laptop",
      imageUrl:
        "https://image.shutterstock.com/image-photo/african-girl-school-student-e-600w-1685909200.jpg",
    },
    {
      id: 5,
      title: "Microwave",
      imageUrl:
        "https://image.shutterstock.com/image-photo/womans-hands-closing-microwave-oven-600w-735463006.jpg",
    },
    {
      id: 6,
      title: "HeadPhone",
      imageUrl:
        "https://image.shutterstock.com/image-photo/hipster-igen-teen-pretty-fashion-600w-1564166668.jpg",
    },
    {
      id: 7,
      title: "SmartWatch",
      imageUrl:
        "https://image.shutterstock.com/image-photo/stylish-smart-watch-phone-earphones-600w-1826826806.jpg",
    },
    {
      id: 8,
      title: "Chargers",
      imageUrl:
        "https://image.shutterstock.com/image-photo/mobile-phone-charger-on-orange-600w-773099164.jpg",
    },
    {
      id: 9,
      title: "Trimmers",
      imageUrl:
        "https://image.shutterstock.com/image-photo/trimmer-nozzles-buying-new-wireless-600w-1927752143.jpg",
    },
    {
      id: 10,
      title: "Power Bank ",
      imageUrl:
        "https://image.shutterstock.com/image-photo/portable-power-banks-charger-process-600w-1864637995.jpg",
    },
    {
      id: 11,
      title: "VR Glasses",
      imageUrl:
        "https://image.shutterstock.com/image-photo/lovely-african-american-teen-girl-600w-1317171665.jpg",
    },
    {
      id: 12,
      title: "Camera",
      imageUrl:
        "https://image.shutterstock.com/image-photo/camera-lens-lense-reflections-600w-304955831.jpg",
    },
  ];
  return (
    <div>
      <Outlet></Outlet>
      <Directory categories={categories} />
    </div>
  );
};
export default home;
