import headingBg from "../assets/sectionBgImages/TitleSeparator.png";

const Heading = ({ heading, subHeading }) => {
    return (
        /* Added max-w-full and overflow-hidden to prevent any horizontal scroll */
        <div className="flex flex-col items-center justify-center m-4 text-center max-w-full overflow-hidden gap-2 mt-20">
            {/* Main Heading */}
            <h1 className="text-[#066168] font-bold font-afacad text-4xl md:text-5xl capitalize tracking-tight">
                {heading}
            </h1>

            {/* Sub-Heading */}
            <h3 className="text-black text-xs md:text-sm font-afacad opacity-80 capitalize tracking-widest">
                {subHeading}
            </h3>

            <div
                style={{ backgroundImage: `url(${headingBg})` }}
                className="bg-contain bg-center bg-no-repeat h-12 w-100 md:w-80"
            ></div>
        </div>
    );
};

export default Heading;