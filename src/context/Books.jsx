import React, { createContext, useEffect, useState } from "react";


export const ContextProvider = createContext();
const GetAllBooks = (props) => {

    const [allBooks, setAllBooks] = useState(null);
    const [count, setCount] = useState(null);
    let myCount=0;

    useEffect(() => {
        // Async function to download a file
        async function loadBooks(file) {
            const response = await fetch(file);
            myDisplayer(await response.text());
        }

        // Call the async function
        loadBooks(`http://localhost:3000/books`);

        // Function to display any text
        function myDisplayer(text) {
            console.log("my text is:" + text);
            setAllBooks(JSON.parse(text));
            console.log("myInfo1:" + allBooks);
        }
        console.log("myInfo:" + allBooks);
    }, [])

    const createBook = (newTitle,newAuthor) => {
        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                author: `${newAuthor}`,
                title: `${newTitle}`,
            })
        })
        // let newCount = myCount+1;
        setAllBooks( [...allBooks])
        // setCount( newCount )
    };

    const updateBook = (newTitle,newAuthor) => {
        fetch("http://localhost:3000/books/bookId", {
            method: 'PUT',
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify({
                author: `${newAuthor}`,
                title: `${newTitle}`,
            })
        })
    }

    const deleteBook = (bookId) =>{
        fetch(`http://localhost:3000/books/${bookId}`,{
            method: "DELETE",
        })
        setAllBooks([...allBooks])
    }
    // console.log("myInfo1:" + ,allBooks[0].title);

    console.log("allBooks now2 :" + allBooks)
    console.log("allBooks data type:" + typeof (allBooks))
    console.log("myInfo2:" + allBooks);


    return (
        <>

            <ContextProvider.Provider value={{ allBooks, createBook, updateBook, deleteBook}}>
                {props.children}
            </ContextProvider.Provider>
        </>
    )
}

export default GetAllBooks;