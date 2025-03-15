"use client"
import Link from "next/link";
import React, { useState } from "react";

const Blog: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Mindfulness Meditation",
      excerpt: "Discover how mindfulness meditation can improve your mental health, increase focus, and promote overall well-being in today’s fast-paced world.",
      link: "/blog/meditation",
    },
    {
      id: 2,
      title: "Traveling on a Budget: Tips for Affordable Adventures",
      excerpt: "Discover how to explore the world without breaking the bank, with tips on finding cheap flights, budget accommodations, and affordable activities.",
      link: "/blog/travelling-guide",
    },
    {
      id: 3,
      title: "The Power of Networking: Building Meaningful Connections",
      excerpt: "Unlock the potential of networking with tips on how to build genuine relationships that can advance your career and open new opportunities.",
      link: "/blog/networking",
    },
    {
      id: 4,
      title: "Traveling Solo: Tips for a Safe and Enjoyable Experience",
      excerpt: "Embrace the adventure of solo travel with practical tips for staying safe, meeting new people, and making the most of your journey."
,
      link: "/blog/solo-trip-website",
    },
  ];

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
      <div className="container mx-auto mt-8 px-6">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">My Blog</h1>
        <p className="text-lg text-gray-700">Here are some of my blog posts...</p>
      </div>

      <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-500">
                <Link href={post.link}>{post.title}</Link>
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; 2025 Pratik Suryawanshi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
