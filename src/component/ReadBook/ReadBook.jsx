const ReadBook = ({book}) => {
    const {bookId, bookName, author, image, review,
        totalPages, rating, category, tags, publisher, yearOfPublishing} = book ;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{bookName}</h2>

            
        </div>
    );
};

export default ReadBook;