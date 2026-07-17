import React, { useRef, useContext, useState } from 'react';
import { ContextProvider } from "../context/Books";

const Update = () => {

    const { updateBook } = useContext(ContextProvider);
    const { allBooks } = useContext(ContextProvider);

    const [selectedTitle, setSelectedTitle] = useState();
    const [selectedAuthor, setSelectedAuthor] = useState();

    const titleInput = useRef();
    const authorInput = useRef();
    const editDialog = useRef();

    console.log("Update page books: " + allBooks)

    const openMyDialog = (event) => {
        editDialog.current.id = event.target.parentElement.id;
        console.log("dialog id when targeted: " + event.target.parentElement.id);
        console.log("dialog id when assigned: " + editDialog.current.id);
        titleInput.current.value = event.target.parentElement.children[0].innerText;
        authorInput.current.value = event.target.parentElement.children[1].innerText.slice(2);
        editDialog.current.showModal();
    }

    const closeMyDialog = () => {
        console.log("info being uploaded: "+ titleInput.current.value )
        updateBook(titleInput.current.value, authorInput.current.value, parseInt(editDialog.current.id));
        editDialog.current.close();
    }

    return (

        <>
            <h1>Update a book</h1>
           
            <dialog ref={editDialog}>

                <form ><h3>Edit book title</h3>
                    <input ref={titleInput} />
                    <br />
                    <h3>Edit book author</h3>
                    <input ref={authorInput} />
                    <br />
                    <button type="button" onClick={closeMyDialog}>Finish Edit</button>
                </form>

            </dialog>
            <ul>{allBooks && allBooks.map((item) => {
                return <li key={item.id} id={item.id}>
                    <h3>{item.title}</h3>
                    <p>by {item.author}</p>
                    <button type="button" onClick={openMyDialog} >Update book</button>
                    <br />
                    <br />
                         </li>
            })}</ul>

        </>
    )
}

export default Update;
