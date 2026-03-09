import { useState } from "react";
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        /* pointer-events-auto is CRITICAL here so you can click the links */
        <nav className="w-full h-20 flex items-center justify-between px-6 lg:px-12 text-white relative z-[999] pointer-events-auto">

            {/* 1. LOGO */}
            <Link to="/" className="text-3xl font-kaushan cursor-pointer tracking-wider">
                Travel<span className="text-[#346065]">Cart</span>
            </Link>

            {/* 2. DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-10 font-afacad text-sm uppercase tracking-[0.2em] font-medium">
                <li className="group relative cursor-pointer transition-all hover:text-[#346065]">
                    <Link to="/">Home</Link>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#346065] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group relative cursor-pointer transition-all hover:text-[#346065]">
                    <Link to="/testimonials">Testimonials</Link>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#346065] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group relative cursor-pointer transition-all hover:text-[#346065]">
                    <Link to="/contact">Contact Us</Link>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#346065] transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>

            {/* 3. AUTH BUTTONS */}
            <div className="hidden lg:flex items-center gap-6 font-lora">
                <Link to="/login" className="text-sm uppercase tracking-widest hover:text-[#346065] transition cursor-pointer">
                    Login
                </Link>
                <Link to="/register">
                    <button className="bg-[#346065] hover:bg-transparent hover:text-[#346065] px-8 py-2.5 rounded-full text-xs uppercase font-bold tracking-widest transition-all duration-300 shadow-lg cursor-pointer">
                        Register
                    </button>
                </Link>
            </div>

            {/* 4. MOBILE HAMBURGER ICON */}
            <div className="lg:hidden text-3xl cursor-pointer z-1000" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </div>

            {/* 5. MOBILE OVERLAY MENU */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 lg:hidden z-[998] animate-fade-in">
                    <ul className="flex flex-col items-center gap-8 font-lora text-xl uppercase tracking-widest">
                        <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to="/testimonials">Testimonials</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to="/contact">Contact Us</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to="/login">Login</Link></li>
                    </ul>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                        <button className="bg-[#346065] px-10 py-3 rounded-full font-bold cursor-pointer">Register</button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;