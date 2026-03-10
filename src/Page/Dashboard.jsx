import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[#f8fafb] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#066168] text-white flex flex-col p-6 hidden md:flex">
                <h1 className="text-2xl font-bold font-afacad mb-10">Travel <span className="text-orange-500 italic">Cart</span></h1>
                <nav className="flex-1 space-y-4">
                    <button className="w-full text-left p-3 rounded-xl bg-white/10 font-bold">🏠 My Itineraries</button>
                    <button className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-all">🌍 Saved Places</button>
                    <button className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-all">⚙️ Settings</button>
                </nav>
                <button
                    onClick={handleLogout}
                    className="mt-auto p-3 bg-orange-500 rounded-xl font-bold hover:bg-orange-600 transition-all"
                >
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 md:p-12 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-[#346065]">Hello, {user?.name || "Explorer"}!</h2>
                        <p className="text-gray-500">Welcome back to your travel hub.</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl">
                        {user?.name?.charAt(0)}
                    </div>
                </header>

                {/* Dashboard Stats/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-400 font-bold text-xs uppercase mb-2">Total Itineraries</h3>
                        <p className="text-4xl font-bold text-[#066168]">0</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-400 font-bold text-xs uppercase mb-2">favorite Itineraries</h3>
                        <p className="text-4xl font-bold text-[#066168]">0</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-400 font-bold text-xs uppercase mb-2">All Itineraries</h3>
                        <p className="text-4xl font-bold text-orange-500">0</p>
                    </div>
                </div>

                {/* Placeholder for Recent Activity */}
                <div className="mt-10 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[#346065] mb-4">Recent Itineraries</h3>
                    <div className="text-center py-10">
                        <p className="text-gray-400">You haven't created any trips yet. Let's plan one!</p>
                        <button className="mt-4 text-orange-500 font-bold hover:underline">Start AI Planner →</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;