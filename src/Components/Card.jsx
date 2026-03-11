import icon1 from "../assets/Logo/destination.png";
import icon2 from "../assets/Logo/find.png";
import icon3 from "../assets/Logo/ready.png";

const cardDetails = [
    {
        id: "01",
        icon: icon1,
        title: "Tell Us Your Vibe",
        details: `Enter your destination, dates, and budget.
         Select your interests—like "foodie," "adventure," or
          "relax"—to help our AI understand exactly what you’re
           looking for.`
    },
    {
        id: "02",
        icon: icon2,
        title: "Get Your AI Plan",
        details: `In seconds, our engine generates a complete 
        day-by-day itinerary. This includes curated hotel recommendations 
        and a real-time budget estimate tailored to your style.`
    },
    {
        id: "03",
        icon: icon3,
        title: "Refine & Travel",
        details: `Review your plan and swap out any day you don't
         like with one click. Save your favorite trips to your
          profile and you’re ready to explore the world.`
    },
];

const Card = () => {
    return (

        <div className="flex flex-col lg:flex-row lg:flex-nowrap justify-center items-stretch gap-x-12 gap-y-16 p-4 w-full overflow-x-hidden">
            {/* mapping to each cards  */}
            {cardDetails.map((item, index) => (
                <div key={index} className="flex w-full max-w-100">
                    <div
                        className="relative flex flex-col w-full bg-[white] p-8
                                   rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[12rem] border border-[#97e2ea]/30
                                   shadow-[0_28px_36px_rgba(41,137,145,0.2)] group"
                    >
                        {/* id */}
                        <div className="mb-8">
                            <span className="text-5xl font-bold bg-[#346065] text-white pt-1 pb-1 pl-3 pr-3 rounded-lg font-afacad leading-none transition-colors group-hover:bg-orange-400">
                                {item.id}
                            </span>
                        </div>

                        {/* icon with circle*/}
                        <div className="absolute top-[30%] -right-1 -translate-y-1/2 flex items-center justify-center 
                                        bg-white border-[6px] border-orange-400 w-24 h-24 rounded-full 
                                        shadow-xl shadow-orange-100 z-10 transition-transform duration-500 group-hover:scale-110">
                            <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                        </div>

                        {/* Text Content*/}
                        <div className="flex-1 flex flex-col text-left">
                            <h2 className="text-[#066168] font-bold font-afacad text-2xl capitalize leading-tight mt-6 mb-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 text-sm font-afacad leading-relaxed opacity-80">
                                {item.details}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;