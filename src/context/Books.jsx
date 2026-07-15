import React, { createContext, useEffect, useState } from "react";


const ContextProvider = createContext();
const GetAllBooks = ({children}) => {


    const [allBooks, setAllBooks] = useState();


    let myInfo = null;

    useEffect(() => {


        // Async function to download a file
        async function loadBooks(file) {
            const response = await fetch(file);
            myDisplayer(await response.text());
        }

        // Call the async function
        loadBooks("http://localhost:3000/books");

        // Function to display any text
        function myDisplayer(text) {
            console.log("my text is:" + text);
            myInfo = JSON.parse(text);
            console.log("myInfo1:" + myInfo[0].title);
            console.log("myInfo1:" + myInfo);
            setAllBooks(myInfo);
        }



        console.log("myInfo2:" + myInfo);


    }, [allBooks])

    console.log("allBooks now2 :" + allBooks)


    // console.log("my final:" + myFinal)

    return (
        <>
            {/* <ul>{myInfo || allBooks.map((item)=>{ return <li>{item.title}</li>})}</ul> */}

            <ContextProvider.Provider value={allBooks}>
                {children}
            </ContextProvider.Provider>





        </>
    )



}

export default GetAllBooks;