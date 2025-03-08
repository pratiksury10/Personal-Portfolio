"use client"
import Link from "next/link";
import React, {useState} from "react";

const Contact = () => {
        const [activeLink, setActiveLink] = useState<string>("");
      
        const handleClick = (linkName : string) => {
          setActiveLink(linkName);
        }
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
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
      <div className="flex-1 container mx-auto px-6 lg:px-8 mt-12">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          I&apos;m always open to connect! Feel free to reach out to me through any of the following methods:
        </p>

        <div className="space-y-4">
          {/* Phone Number */}
          <div className="flex items-center text-lg text-gray-700">
            <span className="font-semibold text-blue-600 mr-4">Phone:</span>
            <Link href="tel:+918355887370" className="hover:text-blue-500">
              8355887370
            </Link>
          </div>

          {/* Email Address */}
          <div className="flex items-center text-lg text-gray-700">
            <span className="font-semibold text-blue-600 mr-4">Email:</span>
            <Link href="mailto:pratik07458@gmail.com" className="hover:text-blue-500">
              pratik07458@gmail.com
            </Link>
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
