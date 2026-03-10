import { Link } from "react-router-dom"

const GetInTouch = ({ value }) => {
    return (
        <div className="mt-10">
            <Link className="mt-8 px-8 py-3 bg-[#346065]
             text-white rounded-full font-bold text-sm md:text-lg
              hover:bg-orange-500 transition-all shadow-xl" to="/login">
                {value}
            </Link>
        </div>
    )
}

export default GetInTouch