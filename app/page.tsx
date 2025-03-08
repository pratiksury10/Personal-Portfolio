"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
// import { useSession,signIn ,signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";

const Home = () => {

  // const { data : session, status} = useSession();
  // const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (linkName:string) => {
    setActiveLink(linkName);
  }

  // const handleSignOut = async () => {
  //   await signOut();
  //   router.push('/login'); // Redirect to home after signing out
  // };

  // const handleSignIn = async () => {
  //   const result = await signIn('google', { redirect: false });
  //   if (result?.error) {
  //     console.error(result.error);
  //   } else {
  //     router.push('/'); // Redirect to home after signing in
  //   }
  // };


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
            {/* <li>
              {session ? (
                <button onClick={() => signOut()} className="text-lg font-medium hover:text-green-300">
                  Sign Out
                </button>
              ) : (
                <Link href="/login" passHref>
                  <span className="text-lg font-medium hover:text-green-300">Sign In</span>
                </Link>
              )}
            </li> */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4">
        <div className="flex flex-row items-center justify-between h-full py-12">
          {/* Text Content */}
          <div className="w-1/2 py-24 ml-[40px]">
            <div className="space-y-6">
              <div className="text-3xl font-semibold text-gray-900 animate-fade-in">Hi, I am</div>
              <div className="text-5xl font-bold text-blue-600">Pratik Suryawanshi</div>
              <div className="text-xl text-gray-600">Developer, Coder, Dancer</div>
              <div className="text-lg text-gray-500">
                I am a developer and I love to code. I am also passionate about programming.
              </div>

              <div className="flex space-x-6 mt-8">
                <Link
                  href="/Resume_Pratik_Suryawanshi.pdf"
                  download="Resume_Pratik_Suryawanshi.pdf"
                  className="px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-lg 
             hover:from-[#2563EB] hover:to-[#38BDF8] transform hover:scale-105 
             transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download CV
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-lg 
             hover:from-[#2563EB] hover:to-[#38BDF8] transform hover:scale-105 
             transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-1/2 flex justify-center items-center relative">
            <div className="overflow-hidden rounded-full w-[400px] h-[400px] shadow-2xl 
                          transform hover:scale-105 transition-all duration-500
                          border-4 border-white hover:border-blue-400">
              <Image
                src="/Demo_pic.jpg"
                alt="Demo"
                width={500} 
                height={300}
                className="w-full h-full object-cover transform hover:scale-110 
                         transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-500 text-white text-center py-4 mt-auto">
        <p>&copy; 2025 Pratik Suryawanshi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
