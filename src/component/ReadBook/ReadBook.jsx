import { CiLocationOn } from "react-icons/ci";

const ReadBook = ({ book }) => {


    const { bookId, bookName, author, image, review,
        totalPages, rating, category, tags, publisher, yearOfPublishing } = book;





    return (
        
        <div className="grid grid-cols-4">
            <div className="">
                <img src={image} alt="" />
            </div>
            <div className=" col-span-3">
                <h2>{bookName}</h2>
                <p>By : {author}</p>
                <div className="flex font-work font-medium mb-5 gap-5">
                    <span>Tag</span> {tags.map((tag, inx) => <h3 className="flex text-[#23BE0A]" key={inx}>#{tag}</h3>)}
                    <p className="flex "> <CiLocationOn className="mr-2 text-xl" /> Year of Publishing:  {yearOfPublishing}</p>
                </div>
                <div>
                    <p>Category: {category}</p>
                    <p>Rating: {rating}</p>
                    <button>View Details </button>
                </div>

                <div className="flex gap-2">
                    <p>Publisher: {publisher}</p>
                    <p>Page {totalPages}</p>
                </div>
            </div>


        </div>
    );
};

export default ReadBook;