import bgImage from "../assets/Footer/footerBg.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative w-full py-20 px-6 md:px-12 text-white overflow-hidden">
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>

            <div className="absolute inset-0 bg-[#346065] z-10"></div>

            <div className="relative z-20 max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div className="flex flex-col space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold font-afacad tracking-tight">
                        Travel <span className="text-orange-500 italic">Cart</span>
                    </h2>
                    <p className="text-white font-afacad text-lg md:text-xl max-w-lg leading-relaxed drop-shadow-lg">
                        Your intelligent travel companion. We craft personalized Indian journeys
                        using AI, ensuring every trip is a seamless blend of
                        discovery, comfort, and local authenticity.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                    <div className="flex flex-col space-y-4 text-sm md:text-base">
                        <h4 className="font-bold text-orange-500 uppercase text-xs tracking-[0.2em] mb-2">Discovery</h4>
                        <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
                        <Link to="/login" className="hover:text-orange-400 transition-colors">Login</Link>
                        <Link to="/register" className="hover:text-orange-400 transition-colors">Register</Link>
                    </div>

                    <div className="flex flex-col space-y-4 text-sm md:text-base">
                        <h4 className="font-bold text-orange-500 uppercase text-xs tracking-[0.2em] mb-2">Company</h4>
                        <Link to="/" className="hover:text-orange-400 transition-colors">Our Story</Link>
                        <Link to="/" className="hover:text-orange-400 transition-colors">Travel Cart</Link>
                        <Link to="/" className="hover:text-orange-400 transition-colors">Contact</Link>
                    </div>

                    <div className="flex flex-col space-y-4 text-sm md:text-base">
                        <h4 className="font-bold text-orange-500 uppercase text-xs tracking-[0.2em] mb-2">Connect</h4>
                        <a href="#" className="hover:text-orange-400 transition-colors">Whatsapp</a>
                        <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-orange-400 transition-colors">Telphone</a>
                    </div>
                </div>
            </div>

            <div className="relative z-20 mt-20 pt-8 border-t border-white/20 max-w-[1340px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white/90">
                <p>&copy; {new Date().getFullYear()} Travel Cart AI. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-white">Privacy</Link>
                    <Link to="/terms" className="hover:text-white">Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;