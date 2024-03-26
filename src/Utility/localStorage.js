const getStoredBooks = () => {
    const storeBook = localStorage.getItem('read-id');
    if (storeBook) {
        return JSON.parse(storeBook)
    }
    return [];
}
const saveBookItem = id => {
    const storedBook = getStoredBooks();
    const exist = storedBook.find(bookid => bookid === id);
    if (!exist) {
        storedBook.push(id);
        localStorage.setItem('read-id', JSON.stringify(storedBook))
    }
}
export { getStoredBooks, saveBookItem };