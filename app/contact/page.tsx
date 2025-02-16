"use client"
import Link from "next/link";
import React, {useState} from "react";

const Contact = () => {
        const [activeLink, setActiveLink] = useState("");
      
        const handleClick = (linkName) => {
          setActiveLink(linkName);
        }
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      {/* Navigation Bar */}
      <div className="w-full bg-indigo-600 text-white px-8 py-4">
      <nav className="max-w-7xl mx-auto">
        <ul className="flex flex-row justify-between items-center">
            <li>
              <a
                href="/"
                className={`text-lg font-medium ${
                  activeLink === "home" ? "text-yellow-300" : "hover:text-green-300"
                }`}
                onClick={() => handleClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/intro"
                className={`text-lg font-medium ${
                  activeLink === "intro" ? "text-yellow-300" : "hover:text-green-300"
                }`}
                onClick={() => handleClick("intro")}
              >
                My Intro
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`text-lg font-medium ${
                  activeLink === "services" ? "text-yellow-300" : "hover:text-green-300"
                }`}
                onClick={() => handleClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={`text-lg font-medium ${
                  activeLink === "blog" ? "text-yellow-300" : "hover:text-green-300"
                }`}
                onClick={() => handleClick("blog")}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`text-lg font-medium ${
                  activeLink === "contact" ? "text-yellow-300" : "hover:text-green-300"
                }`}
                onClick={() => handleClick("contact")}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-6 lg:px-8 mt-12">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm always open to connect! Feel free to reach out to me through any of the following methods:
        </p>

        <div className="space-y-4">
          {/* Phone Number */}
          <div className="flex items-center text-lg text-gray-700">
            <span className="font-semibold text-blue-600 mr-4">Phone:</span>
            <a href="tel:+918355887370" className="hover:text-blue-500">
              8355887370
            </a>
          </div>

          {/* Email Address */}
          <div className="flex items-center text-lg text-gray-700">
            <span className="font-semibold text-blue-600 mr-4">Email:</span>
            <a href="mailto:pratik07458@gmail.com" className="hover:text-blue-500">
              pratik07458@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; 2025 Pratik Suryawanshi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
