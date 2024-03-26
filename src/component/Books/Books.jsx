import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const [booksCard, setbooksCard] = useState([]);
    useEffect(() => {
        fetch('bookinfo.json')
            .then(res => res.json())
            .then(books => setbooksCard(books))
    }, [])
    return (
        <div>
            <h2 className="mt-10 font-play md:mt-24 mb-10 text-[40px] text-[#131313] font-bold text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    booksCard.map( book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default Books;