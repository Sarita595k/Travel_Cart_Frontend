const GetInTouch = ({ value }) => {
    return (
        <>
            <button className="mt-8 px-8 py-3 bg-[#346065]
             text-white rounded-full font-bold text-sm md:text-lg
              hover:bg-orange-500 transition-all shadow-xl">
                {value}
            </button>
        </>
    )
}

export default GetInTouch