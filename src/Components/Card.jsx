import React from 'react';
import icon1 from "../assets/Logo/destination.png";
import icon2 from "../assets/Logo/find.png";
import icon3 from "../assets/Logo/ready.png";

const cardDetails = [
    { id: "01", icon: icon1, title: "choose destination", details: "first login or signup and then choose your destination." },
    { id: "02", icon: icon2, title: "fill some details", details: "after login or signup fill some minor details and get your ai ready itinerary." },
    { id: "03", icon: icon3, title: "ready for travel", details: "start exploring your destination" },
];

const Card = () => {
    return (

        <div className="flex flex-wrap justify-center gap-x-20 gap-y-16 p-10 bg-gray-50 w-full">
            {cardDetails.map((item, index) => (
                <div
                    key={index}
                    className="relative flex flex-col w-full max-w-65 min-h-75 bg-white p-8 
                               rounded-tl-[5rem] rounded-bl-[5rem] rounded-tr-4xl rounded-br-4xl 
                               shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-2"
                >
                    <div className="flex flex-row justify-between mb-6">
                        <div className="flex-none">
                            <span className="text-5xl font-bold text-gray-100 font-afacad leading-none">
                                {item.id}
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-1/4 -right-10 -translate-y-1/2 flex items-center justify-center 
                                    bg-white border-4 border-orange-400 w-20 h-20 rounded-full 
                                    shadow-lg shadow-orange-100 z-10">
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="w-10 h-10 object-contain"
                        />
                    </div>

                    <div className="flex-1 flex flex-col mt-4 text-left pr-4">
                        <h2 className="text-[#066168] font-bold font-afacad text-xl capitalize leading-tight mb-3">
                            {item.title}
                        </h2>
                        <p className="text-gray-500 text-sm font-afacad leading-relaxed">
                            {item.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;