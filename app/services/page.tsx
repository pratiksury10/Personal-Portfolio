"use client"
import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";

const Services = () => {
    const [activeLink, setActiveLink] = useState<string>("");
  
    const handleClick = (linkName: string) => {
      setActiveLink(linkName);
    }

   // Array of services
   const services = [
    {
      id: 1,
      title: "Web Development",
      image: "/images/web-development.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 2,
      title: "Mobile Application",
      image: "/images/mobile-application.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 3,
      title: "Web Services",
      image: "/images/web-services.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 4,
      title: "Blockchain",
      image: "/images/blockchain.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 5,
      title: "Cloud Services",
      image: "/images/cloud-services.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 6,
      title: "SEO Optimization",
      image: "/images/seo-optimization.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 7,
      title: "Digital Marketing",
      image: "/images/digital-marketing.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 8,
      title: "E-commerce Solutions",
      image: "/images/ecommerce-solutions.jpg", // Replace with your image path
      width: 500,
      height: 300,
    },
    {
      id: 9,
      title: "Content Creation",
      image: "/images/content-creation.jpg", // Replace with your image path
      width: 500,
      height: 300
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col bg-slate-200">
      {/* Navigation Bar */}
      <div className="w-full bg-indigo-600 text-white px-8 py-4">
      <nav className="max-w-7xl mx-auto">
        <ul className="flex flex-row justify-between items-center">
        <li>
              <Link href="/" passHref>
                <span
                  className={`text-lg font-medium ${
                    activeLink === "home" ? "text-yellow-300" : "hover:text-green-300"
                  }`}
                  onClick={() => handleClick("home")}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/intro" passHref>
                <span
                  className={`text-lg font-medium ${
                    activeLink === "intro" ? "text-yellow-300" : "hover:text-green-300"
                  }`}
                  onClick={() => handleClick("intro")}
                >
                  My Intro
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <span
                  className={`text-lg font-medium ${
                    activeLink === "services" ? "text-yellow-300" : "hover:text-green-300"
                  }`}
                  onClick={() => handleClick("services")}
                >
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <span
                  className={`text-lg font-medium ${
                    activeLink === "blog" ? "text-yellow-300" : "hover:text-green-300"
                  }`}
                  onClick={() => handleClick("blog")}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span
                  className={`text-lg font-medium ${
                    activeLink === "contact" ? "text-yellow-300" : "hover:text-green-300"
                  }`}
                  onClick={() => handleClick("contact")}
                >
                  Contact Me
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container my-20 mx-auto mt-2 px-6">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6 mt-6">My Services</h1>
        {/* <ul className="list-disc pl-5">
          <li className="text-lg text-gray-700 mb-2">Web Development</li>
          <li className="text-lg text-gray-700 mb-2">UI/UX Design</li>
          <li className="text-lg text-gray-700 mb-2">Backend Development</li>
        </ul> */}
         <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
              src={service.image}
              alt={service.title} 
              width={500}
              height={300}
              className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center px-8 py-4 z-10">
        <p>&copy; 2025 Pratik Suryawanshi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
