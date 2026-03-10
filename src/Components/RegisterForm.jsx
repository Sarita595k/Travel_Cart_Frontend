import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LeftSideMan from './LeftSideMan';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // State to store backend errors
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(""); // Clear error when user starts typing
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Reset error state

        try {
            const res = await axios.post('http://localhost:2100/api/user/register', formData);

            if (res.data.success) {
                //  Save data to localStorage
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));

                //  Navigate to dashboard
                navigate('/dashboard');
            }
        } catch (error) {
            // --- RATE LIMITER CHECK ---
            if (error.response?.status === 429) {
                // This catches the 'Too many requests' error from your backend
                setError(error.response.data.message || "Too many login attempts. Please wait 15 minutes.");
            } else {
                // This catches normal errors like 'Invalid Credentials'
                const message = error.response?.data?.message || "Invalid credentials. Please try again.";
                setError(message);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="min-h-screen flex items-stretch overflow-hidden">

            {/* --- left side --- */}
            <LeftSideMan />
            {/* --- right side --- */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 z-30">
                <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-[#346065]/10 border-t-8 border-[#066168]">

                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-[#066168] font-afacad mb-2">
                            Register your <span className="text-orange-500 italic">Journey</span>
                        </h2>
                        <p className="text-gray-500 font-afacad text-lg">Create your account for <span className="text-[#346065] font-bold underline decoration-orange-500/30">Travel Cart</span>.</p>
                    </div>

                    {/* --- error display --- */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-[#066168] transition-colors">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#066168] focus:ring-4 focus:ring-[#066168]/10 outline-none transition-all duration-300"
                                required
                                autoComplete='off'
                            />
                        </div>

                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-[#066168] transition-colors">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#066168] focus:ring-4 focus:ring-[#066168]/10 outline-none transition-all duration-300"
                                required
                                autoComplete='off'
                            />
                        </div>

                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-[#066168] transition-colors">Password</label>
                            <input type="password" name="password" value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#066168] focus:ring-4 focus:ring-[#066168]/10 outline-none transition-all duration-300"
                                required
                                autoComplete='off'
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full py-4 bg-[#066168] text-white rounded-2xl font-bold overflow-hidden transition-all active:scale-95 disabled:opacity-50 mt-4"
                        >
                            <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full z-0"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? "Joining..." : "Register Now"}
                                {!loading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                            </span>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400 font-afacad text-sm">
                            Already a member?
                            <button onClick={() => navigate('/login')} className="ml-2 text-orange-500 font-bold hover:underline">
                                Log in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;