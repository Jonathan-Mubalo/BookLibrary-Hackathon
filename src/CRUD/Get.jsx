import React,{useContext} from 'react';

import {ContextProvider} from '../context/Books';

const Get = () => {
    const {allBooks} = useContext(ContextProvider);
    return (
        <>
        <h1>All the books in our bookstore</h1>
          
        <ul>{allBooks && allBooks.map((item) =>{return <li key={item.id} id={item.id}> <h3 >{item.title}</h3> <p>by {item.author}</p><br /></li>})}</ul>
        </>
    )
}

export default Get;
