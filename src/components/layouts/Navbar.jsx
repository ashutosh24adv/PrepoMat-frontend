import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border boredr-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard">
           <h2 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9324] via-orange-400 to-yellow-300 tracking-wide transform hover:scale-105 hover:rotate-[0.5deg] transition-all duration-300 ease-in-out drop-shadow-sm">
    PrepoMat
  </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar
