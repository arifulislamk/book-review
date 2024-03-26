import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const allbooks = useLoaderData();

    const [readbook, setreadbook] = useState([])

    useEffect(() => {
        const booksId = getStoredBooks();
        if (allbooks) {
            const readbooks = [];
            for (const id of booksId) {
                const reads = allbooks.find(book => book.bookId == id);
                if (reads) {
                    readbooks.push(reads)
                }
            }
            setreadbook(readbooks)
        }
    }, [allbooks, setreadbook])

    console.log(allbooks, readbook)

    return (
        <div>
            <h2>Readbooks component {readbook.length}</h2>
            <div>
                {
                    readbook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;