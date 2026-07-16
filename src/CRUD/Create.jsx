import React,{useContext,useRef} from 'react';
import {ContextProvider} from "../context/Books";

const Create = () => {
    const {createBook} = useContext(ContextProvider);
    const titleInput = useRef();
    const authorInput = useRef();

    const submit = () =>{
        createBook(titleInput.current.value,authorInput.current.value) ;
        titleInput.current.value="";
        authorInput.current.value="";
    }

    return (
        <>
        <div className="My-Form"> 
            <h1>Add a book of your choice</h1>
            <input ref={titleInput} placeholder="New book's name"/>
                    <br />
            <input ref={authorInput} placeholder="New book's author"/>
                    <br />
            <button type="button" onClick={submit}>Add New Book</button>
         </div>
        </>
    )
}

export default Create;

