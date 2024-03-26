import { CiStar } from "react-icons/ci";
const BookCard = ({ book }) => {

    const { bookName, author, image, review,
        totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className=" p-6 card bg-base-100 border-2 border-gray-400 rounded-2xl shadow-xl">
            <figure className="bg-[#F3F3F3] mb-7 p-10"><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex font-work text-[#23BE0A] font-medium mb-5 gap-5">
                    {tags.map(tag => <h3 key={tag}>{tag}</h3>)}
                </div>
                <h2 className="font-play mb-4 text-2xl font-bold text-[#131313]">
                    {bookName}
                </h2>
                <p className=" mb-10 font-medium text-[16px] text-[#131313CC]">By: {author}</p>
                <div className="flex font-work justify-between text-[#131313CC] font-medium">
                    <div className=" "><p>{category}</p></div>
                    <div className=" flex items-center gap-3"> {rating} <CiStar className="text-xl"/></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;