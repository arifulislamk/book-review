const Writer = ({ writer }) => {
    const { name, writerinformation, imageurl, bookname, country } = writer;
    return (
        <div className=" p-2 md:p-6 space-y-6 bg-[#1313130D]  rounded-2xl">
            <div className="flex justify-center items-center"><img className="w-1/2 md:h-80 border rounded-lg" src={imageurl} alt="" /></div>
            <h2 className="text-xl text-dark-300 font-bold">Popular Books: {bookname}</h2>
            <h2 className=" font-medium text-xl">Writer Name : {name}</h2>
            <h2 className=" font-medium text-xl">country : {country}</h2>
            <p>{writerinformation}</p>

        </div>
    );
};

export default Writer;