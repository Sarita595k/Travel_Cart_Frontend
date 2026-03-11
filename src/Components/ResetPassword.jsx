import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return setError("Passwords do not match");

        try {
            await axios.put(`${import.meta.env.VITE_BASE_URL}/api/user/reset-password/${token}`, { password });
            alert("Password updated! Redirecting to login...");
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || "Link expired or invalid.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Set New Password</h2>

                <form onSubmit={handleReset} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#346065] outline-none"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <button className="w-full bg-[#346065] hover:bg-[#346065] text-white font-semibold py-2 rounded-lg transition">
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;