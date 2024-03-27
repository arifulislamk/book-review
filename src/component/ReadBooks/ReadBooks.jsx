import { useLoaderData, useOutletContext } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";



const ReadBooks = () => {
    const { filterBy } = useOutletContext();
    const allbooks = useLoaderData();

    const [readbook, setreadbook] = useState([]);

    const [filterdData, setFilterdData] = useState(readbook);



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
    }, [allbooks])

    useEffect(() => {
        if (filterBy == "rating") {
            const data = [...readbook].sort(function (a, b) {
                return b.rating - a.rating
            });
            setFilterdData(data)
        } else if (filterBy == "year") {
            const data = [...readbook].sort(function (a, b) {
                return b.yearOfPublishing - a.yearOfPublishing;
            })
            setFilterdData(data);
        } else if (filterBy == "page") {
            const data = [...readbook].sort(function (a, b) {
                return b.totalPages - a.totalPages;
            })
            setFilterdData(data);
        } else {
            setFilterdData(readbook);
        }
    }, [filterBy, readbook])

    console.log({ filterdData, readbook })



    return (
        <div className="mb-6 ">
            {
                filterdData.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;