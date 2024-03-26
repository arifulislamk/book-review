import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook2 } from "../../Utility/localStorage2";
import WishBook from "../WishBook/WishBook";

const WishList = () => {
    const allbooks = useLoaderData();
    console.log(allbooks)

    const [wishlistbook, setwishlistbook] = useState([])

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

    return (
        <div className="mb-6">
            {
                wishlistbook.map( book => <WishBook key={book.bookId} book={book}></WishBook>)
            }
            
        </div>
    );
};

export default WishList;