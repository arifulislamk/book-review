import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBookItem } from "../../Utility/localStorage";
import { getStoredBook2, saveBookItem2 } from "../../Utility/localStorage2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()

    const intId = parseInt(id)
    // console.log(books, id);

    const book = books.find(book => book.bookId == intId);
    const {  bookName, author, image, review,
        totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleReadtostify = () => {
        const readId = getStoredBooks();
        const findread = readId.find(read => read == intId)
        if (findread) {
            toast('Already Readed')
        }
        else {
            saveBookItem(intId)
            toast('Books Readed Done!')
        }

    }

    const handleWishListtostify = () => {
        const wishid = getStoredBook2();
        const readid = getStoredBooks();
        const findwish = wishid.find(wish => wish == intId)
        const findread = readid.find(read => read == intId)
        if (findwish) {
            toast('Already exist Wishlist')
        }
        else if (findread) {
            toast('Readed Book. Not Added WishList')
        }
        else {
            saveBookItem2(intId)
            toast('Added to WishList')
        }

    }


    return (
        <div className="mt-6 md:mt-12 grid md:grid-cols-2  font-work">
            <div className="flex justify-center bg-[#1313130D] rounded-lg mr-6">
                <img className="p-16 md:w-[80%] " src={image} alt="" />
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
                        <button
                            onClick={handleReadtostify}
                            className="px-6 btn border border-gray-500 text-[#131313] mr-2">Read</button>
                        <button
                            onClick={handleWishListtostify}
                            className="btn border text-white bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;