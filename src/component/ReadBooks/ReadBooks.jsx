import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const allbooks = useLoaderData();

    const [readbook, setreadbook] = useState([]) ;

    // const [displaybook, setdisplaybook] = useState([])

    // const handlefilter = text => {
    //     if(text == 'rating'){
    //         const ratingsdata = [] ;
    //         readbook.forEach( book => ratingsdata.push(book.rating)) ;
    //         console.log(ratingsdata) ;
    //         const sortedrating = ratingsdata.sort(function(a, b){return a - b});
    //         console.log(sortedrating) ;
    //         sortedrating.find(rat => rat == readbook.rating)
    //     }
    // }

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

    // console.log(allbooks, readbook)



    return (
            <div className="mb-6 ">
                {/* <button onClick={() => handlefilter('rating')}>click</button> */}
                {
                    readbook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>   
    );
};

export default ReadBooks;