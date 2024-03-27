import { useLoaderData } from "react-router-dom";
import PopularBook from "../PopularBook/PopularBook";

const PopularBooks = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className=" mt-2 md:mt-6 py-4 md:py-8 bg-[#13131326] text-center rounded-lg font-work">
                <h2 className=" font-bold text-xl md:text-3xl ">Popular Books</h2>
            </div>
            <div className="mt-5 p-4">
                {
                    books.map(book => <PopularBook key={book.id} book={book}></PopularBook>)
                }
            </div>

        </div>
    );
};

export default PopularBooks;