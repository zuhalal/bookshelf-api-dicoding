const { addBooksHandler, getAllBooksHandler, getBookByIdHandler, editNoteHandler, deleteBooksHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookid}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: editNoteHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookid}',
        handler: deleteBooksHandler,
    }
]

module.exports = routes;