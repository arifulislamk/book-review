import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { getStoredBook2 } from "../../Utility/localStorage2";
import WishBook from "../WishBook/WishBook";

const WishList = () => {
    const allbooks = useLoaderData();
    const {filterBy} = useOutletContext();


    const [wishlistbook, setwishlistbook] = useState([])

    const [filterdData, setFilterdData] = useState(wishlistbook);

    useEffect( () => {
        const wishlistBookId =  getStoredBook2() ;
        if(allbooks){
            const wishlistBooks = [] ;
            for(const id of wishlistBookId){
                const wishedb = allbooks.find(book => book.bookId == id)
                if(wishedb){
                    wishlistBooks.push(wishedb)
                }
            }
            setwishlistbook(wishlistBooks)
        }
    },[allbooks])


    useEffect(() => {
        if(filterBy == "rating") {
            const data = [...wishlistbook].sort(function(a, b){
                return b.rating-a.rating
            });
            setFilterdData(data)
        } else if(filterBy == "year") {
            const data = [...wishlistbook].sort(function(a, b) {
                return b.yearOfPublishing - a.yearOfPublishing;
            })
            setFilterdData(data);
        } else if( filterBy == "page") {
            const data = [...wishlistbook].sort(function(a, b) {
                return b.totalPages - a.totalPages;
            })
            setFilterdData(data);
        } else {
            setFilterdData(wishlistbook);
        }
    }, [filterBy, wishlistbook])

    return (
        <div className="mb-6">
            {
                filterdData.map( book => <WishBook key={book.bookId} book={book}></WishBook>)
            }
            
        </div>
    );
};

export default WishList;