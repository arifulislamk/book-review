const Banner = () => {
    return (
        <div className=" flex justify-center bg-[#1313130D] md:px-28 md:py-20 ">
            <div className="md:mr-20 flex flex-col justify-center">
                <h2 className="mb-6 md:mb-12 md:text-[56px] text-[#131313] font-bold ">Books to freshen up <br /> your bookshelf</h2>
                <a className="btn md:w-1/3 bg-[#23BE0A] md:text-[18px] text-white font-semibold ">View The List</a>
            </div>
            <div>
                <img className=" md:w-80" src="https://i.ibb.co/NKGY83F/png8.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;