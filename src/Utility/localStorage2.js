const getStoredBook2 = () => {
    const storeBook = localStorage.getItem('wishlist-id');
    if (storeBook) {
        return JSON.parse(storeBook)
    }
    return [];
}
const saveBookItem2 = id => {
    const storedBook = getStoredBook2();
    const exist = storedBook.find(bookid => bookid === id);
    if (!exist) {
        storedBook.push(id);
        localStorage.setItem('wishlist-id', JSON.stringify(storedBook))
    }
}
export { getStoredBook2, saveBookItem2 };