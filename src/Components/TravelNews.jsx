import React, { useState, useEffect } from 'react';

const TravelNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}api/news/travel`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                setNews(result.articles.slice(0, 6));
                setLoading(false);
            } catch (err) {
                console.error("Fetch Error:", err);
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) return <div className="text-center p-20 text-[#066168] animate-pulse font-afacad text-2xl">Updating Travel Pulse...</div>;

    return (
        <section className="py-12 md:py-20 px-4">
            <div className="max-w-[1340px] mx-auto">

                <div className="mb-12 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#066168] font-afacad mb-4">
                        Latest <span className="text-orange-500 italic">Insights</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 font-afacad max-w-2xl leading-relaxed">
                        Our Latest Insights section is more than just news; it’s a live pulse of the travel industry.
                        Powered by intelligent aggregation, we filter through thousands of global updates to
                        deliver high-quality, relevant stories that help you plan smarter, travel safer, and discover deeper.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT COLUMN  */}
                    <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                        {news.slice(0, 3).map((article, index) => (
                            <div key={index} className="flex flex-1 items-stretch gap-0 group min-h-[110px]">
                                <div className="w-24 md:w-28 flex-shrink-0 overflow-hidden rounded-l-2xl">
                                    <img
                                        src={article.urlToImage}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                        alt="news"
                                    />
                                </div>
                                <div className="flex-1 bg-white p-4 rounded-r-2xl border-y border-r border-gray-100 shadow-sm group-hover:shadow-md transition-all flex flex-col justify-center">
                                    <h4 className="text-sm font-bold text-[#346065] font-afacad line-clamp-2 leading-tight">
                                        {article.title}
                                    </h4>
                                    <a href={article.url} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-orange-500 uppercase mt-2 tracking-widest hover:text-[#066168]">
                                        Read Story
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MIDDLE COLUMN  */}
                    <div className="lg:col-span-3 flex flex-col gap-6 h-full">
                        {/* Middle Card */}
                        {news[3] && (
                            <div className="flex flex-1 items-stretch group">
                                <div className="w-20 md:w-24 flex-shrink-0 overflow-hidden rounded-l-2xl">
                                    <img src={news[3].urlToImage || 'https://via.placeholder.com/150'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                </div>
                                <div className="flex-1 bg-white p-4 rounded-r-2xl border-y border-r border-gray-100 shadow-md flex flex-col justify-center">
                                    <h4 className="text-sm font-bold text-[#066168] font-afacad line-clamp-2">{news[3].title}</h4>
                                    <a href={news[3].url} target="_blank" className="mt-2 text-[10px] font-bold text-orange-500 uppercase">Read Story →</a>
                                </div>
                            </div>
                        )}
                        {/* Middle Card 2*/}
                        {news[4] && (
                            <div className="flex flex-col flex-1 group">
                                <div className="h-40 overflow-hidden rounded-t-3xl">
                                    <img src={news[4].urlToImage || 'https://via.placeholder.com/400'} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" />
                                </div>
                                <div className="flex-1 bg-white p-6 rounded-b-3xl border-x border-b border-gray-100 shadow-md flex flex-col justify-between">
                                    <div>
                                        <span className="text-orange-500 text-[10px] font-bold uppercase">{new Date(news[4].publishedAt).toLocaleDateString()}</span>
                                        <h4 className="text-lg font-bold text-[#066168] font-afacad line-clamp-2 mt-1">{news[4].title}</h4>
                                    </div>
                                    <a href={news[4].url} target="_blank" className="mt-4 block text-xs font-bold text-orange-500 uppercase">Read Story →</a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN */}
                    {news[5] && (
                        <div className="lg:col-span-5 group relative overflow-hidden rounded-[2.5rem] shadow-2xl h-full min-h-[400px] lg:min-h-[500px]">
                            <img src={news[5].urlToImage || 'https://via.placeholder.com/800'}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="hero" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#066168] via-black/10 to-transparent flex flex-col justify-end p-6 md:p-12">
                                <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold w-fit mb-4 tracking-widest">TRENDING NOW</div>
                                <h3 className="text-white text-2xl md:text-5xl font-bold mb-4 font-afacad leading-tight">{news[5].title}</h3>
                                <p className="text-gray-200 text-sm mb-6 line-clamp-2 font-afacad">{news[5].description}</p>
                                <a href={news[5].url} target="_blank" rel="noreferrer" className="bg-white text-[#066168] px-8 py-3 rounded-full font-bold w-fit hover:bg-orange-500 hover:text-white transition-all shadow-lg text-sm uppercase tracking-widest">Full Story</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TravelNews;