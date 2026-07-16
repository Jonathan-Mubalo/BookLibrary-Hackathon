import React, { useContext, useRef } from 'react';
import { ContextProvider } from "../context/Books";


const Delete = () => {

    const deleteBtn = useRef(); { }
    const { deleteBook } = useContext(ContextProvider)
    const { allBooks } = useContext(ContextProvider);

    const deleteOneBook = (event) => {
        console.log("book id to delete: " + parseInt(event.target.id))
        console.log(" datatype of book id to delete: " + typeof (parseInt(event.target.id)))
        deleteBook(parseInt(event.target.id))
    }

    return (
        <>
            <h1>Delete a book thats no longer available</h1>
            <ul>{allBooks && allBooks.map((item) => {
                return <li key={item.id}  >
                    <h3>{item.title}</h3>
                    <p>by {item.author}</p>
                    <button type="button" ref={deleteBtn}  onClick={deleteOneBook} id={item.id} >Delete book</button>
                    <br />
                    <br />
                    </li>
            })}</ul>
        </>
    )
}

export default Delete;
