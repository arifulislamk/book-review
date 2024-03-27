const PopularBook = ({ book }) => {
    const { title, author, year_published, description, image_url } = book;
    return (
        <div className="p-2 mb-6 md:p-10 bg-[#1313130D] rounded-2xl ">
            <div className="flex  mb-5 justify-center"><img src={image_url} alt="" /></div>
            <div className=" space-y-5">
                <h2 className=" text-3xl font-semibold font-work">Book Name : {title}</h2>
                <h2 className=" text-3xl font-semibold">Writer: {author}</h2>
                <h2 className=" text-3xl font-semibold">Published :{year_published}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PopularBook;