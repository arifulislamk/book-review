import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-12 flex justify-center bg-[#1313130D] md:px-28 md:py-20 ">
            <div className="md:mr-20 flex flex-col justify-center">
                <h2 className="mb-6 font-play md:mb-12 md:text-[56px] text-[#131313] font-bold ">Books to freshen up <br /> your bookshelf</h2>
                <Link to="/listedbooks">
                    <button className="btn font-work md:w-1/3 bg-[#23BE0A] md:text-[18px] text-white font-semibold ">View The List</button>
                </Link>
            </div>
            <div>
                <img className=" md:w-80" src="https://i.ibb.co/NKGY83F/png8.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;