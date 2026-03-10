import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const DashboardNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    // Helper to check active route
    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "AI Planner", path: "/aiPlanner" },
    ];

    return (
        <nav className="w-full h-20 flex items-center justify-between px-6 lg:px-12 bg-transparent border-b border-gray-100 top-0 z-[999] shadow-sm font-afacad">

            {/* 1. LOGO (Same as Landing Page) */}
            <Link to="/dashboard" className="text-3xl font-kaushan cursor-pointer tracking-wider text-[#066168]">
                Travel<span className="text-[#346065]">Cart</span>
            </Link>

            {/* 2. DESKTOP MENU (Same hover animation as Landing Page) */}
            <ul className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-medium">
                {navLinks.map((link) => (
                    <li key={link.path} className="group relative cursor-pointer transition-all">
                        <Link
                            to={link.path}
                            className={isActive(link.path) ? "text-[#346065]" : "text-gray-500 hover:text-[#346065]"}
                        >
                            {link.name}
                        </Link>
                        {/* Animated Underline */}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#346065] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </li>
                ))}
            </ul>

            {/* 3. USER PROFILE & LOGOUT */}
            <div className="hidden lg:flex items-center gap-6">
                <div className="text-right border-r pr-4 border-gray-200">
                    <p className="text-xs font-bold text-[#066168] uppercase tracking-widest">{user?.name || "Explorer"}</p>
                    <p className="text-[10px] text-orange-500 font-bold uppercase italic">Premium Member</p>
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-[#346065] text-white hover:bg-transparent hover:text-[#346065] border-2 border-[#346065] px-6 py-2 rounded-full text-xs uppercase font-bold tracking-widest transition-all duration-300 shadow-md"
                >
                    Logout
                </button>
            </div>

            {/* 4. MOBILE HAMBURGER */}
            <div className="lg:hidden text-3xl cursor-pointer text-[#346065]" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </div>

            {/* 5. MOBILE OVERLAY */}
            {isOpen && (
                <div className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 lg:hidden z-[998] animate-fade-in">
                    <ul className="flex flex-col items-center gap-8 text-xl uppercase tracking-widest font-bold text-[#346065]">
                        <li onClick={() => setIsOpen(false)}><Link to="/dashboard">Dashboard</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to="/aiPlanner">AI Planner</Link></li>
                        <li onClick={handleLogout} className="text-red-500">Logout</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default DashboardNavbar;