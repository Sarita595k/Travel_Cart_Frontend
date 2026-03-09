import headingBg from "../assets/sectionBgImages/TitleSeparator.png";

const Heading = ({ heading, subHeading }) => {
    return (
        <div className="flex flex-col items-center justify-center m-4 text-center w-full gap-2 mt-20">
            {/* Main Heading */}
            <h1 className="text-[#066168] font-bold font-afacad text-5xl capitalize tracking-tight">
                {heading}
            </h1>

            {/* Sub-Heading */}
            <h3 className="text-black text-sm font-afacad opacity-80 uppercase tracking-widest">
                {subHeading}
            </h3>

            {/* The Background Image as a Separator at the Bottom */}
            <div
                style={{ backgroundImage: `url(${headingBg})` }}
                className="bg-contain bg-center bg-no-repeat h-15 w-100"
            ></div>
        </div>
    );
};

export default Heading;