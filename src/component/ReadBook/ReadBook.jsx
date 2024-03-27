import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {

    const { bookId, bookName, author, image,
        totalPages, rating, category, tags, publisher, yearOfPublishing } = book;


    return (

        <div className="p-6 mb-6 gap-2 grid grid-cols-1 md:grid-cols-4 border border-gray-400 rounded-lg font-work">
            <div className="flex justify-center bg-[#13131326] rounded-xl mr-5">
                <img className=" px-12 py-8 " src={image} alt="" />
            </div>
            <div className="space-y-3 md:space-y-5 md:col-span-3">
                <h2 className=" text-2xl  font-bold font-play ">{bookName}</h2>
                <p className=" font-semibold">By :    {author}</p>
                <div className="flex flex-col md:flex-row font-work font-medium mb-5 gap-5 md:gap-14">
                    <span className="text-[#131313] font-bold">Tag</span> {tags.map((tag, inx) => <h3 className="flex text-[#23BE0A]" key={inx}>#{tag}</h3>)}
                    <p className="flex "> <CiLocationOn className="mr-2 text-xl" /> Year of Publishing:  {yearOfPublishing}</p>
                </div>
                <div className="flex gap-2">
                    <p className="flex gap-2 items-center"> <GoPeople /> Publisher: {publisher}</p>
                    <p className="flex gap-2 items-center"> <GrDocumentText/> Page {totalPages}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-14 ">
                    <p className="p-2 text-[#328EFF] bg-[#328EFF26] rounded-lg">Category: {category}</p>
                    <p className="p-2 text-[#FFAC33] bg-[#FFAC3326] rounded-lg">Rating: {rating}</p>
                   <Link to={`/book/${bookId}`}><button className="p-2 bg-[#23BE0A] text-white rounded-lg">View Details </button></Link>
                </div>
            </div>


        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object,
}

export default ReadBook;