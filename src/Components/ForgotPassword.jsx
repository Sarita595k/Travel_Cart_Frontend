import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false); // New sending state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true); // Start loading
        setMessage(''); // Clear previous messages

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/forgot-password`, { email });
            setMessage("Check your inbox! A reset link has been sent.");
        } catch (err) {
            setMessage(err.response?.data?.message || "Something went wrong.");
        } finally {
            setIsSending(false); // Stop loading regardless of success/fail
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 -mt-20">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">Forgot Password?</h2>
                <p className="text-slate-500 text-center mb-6 text-sm">No worries, we'll send you reset instructions.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            disabled={isSending} // Disable input while sending
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#346065] outline-none disabled:bg-slate-50 disabled:text-slate-400 transition-all"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSending} // Disable button while sending
                        className={`w-full flex items-center justify-center font-semibold py-2 rounded-lg transition-all ${isSending
                            ? 'bg-[#346065] cursor-not-allowed'
                            : 'bg-[#346065] hover:bg-[#346065] shadow-md hover:shadow-lg'
                            } text-white cursor-pointer`}
                    >
                        {isSending ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Send Reset Link'
                        )}
                    </button>
                </form>

                {message && (
                    <div className={`mt-6 p-3 rounded-lg text-center text-sm font-medium ${message.includes("Check")
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-red-50 text-red-700 border border-red-100'
                        }`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;