import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()

    const intId = parseInt(id)
    console.log(books, id);

    const book = books.find(book => book.bookId == intId);
    const { bookId, bookName, author, image, review,
        totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="mt-6 md:mt-12 grid md:grid-cols-2  font-work">
            <div className="flex justify-center bg-[#1313130D] rounded-lg mr-6">
                <img className="p-16 md:w-[80%] md:h-screen" src={image} alt="" />
            </div>
            <div className="p-2">
                <h2 className="mb-5 font-play text-4xl font-bold text-[#131313]">
                    {bookName}
                </h2>

                <div className="space-y-10">
                    <p className=" font-medium text-xl text-[#131313CC]">By: {author}</p>
                    <p className=" font-medium text-xl text-[#131313CC]">{category}</p>
                    <p className=" text-[#131313B3]"><span className="text-[#131313] font-bold">Review : </span>{review}</p>
                    <div className="flex  text-[#23BE0A] font-medium gap-5">
                        <span className="text-black font-bold">Tag</span> {tags.map(tag => <h3 key={tag}>#{tag}</h3>)}
                    </div>


                    <div className="grid grid-cols-2 gap-3 items-center ">
                        <p>Number Of Pages : </p> <p className="text-[#131313] font-semibold">{totalPages}</p>
                        <p>Publisher : </p> <p className="text-[#131313] font-semibold">{publisher}</p>
                        <p>Year of Publishing : </p> <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
                        <p>Rating : </p><p className="text-[#131313] font-semibold">{rating}</p>
                    </div>

                    <div className="font-semibold">
                        <button className="px-6 btn border border-gray-500 text-[#131313] mr-2">Read</button>
                        <button className="btn border text-white bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;