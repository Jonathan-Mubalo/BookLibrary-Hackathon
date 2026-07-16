import React,{useRef,useContext} from 'react';
import {ContextProvider} from "../context/Books";

const Update = () =>{
    const {updateBook} = useContext(ContextProvider);
    const {allBooks} = useContext(ContextProvider);

    return(

<></>
    )
}

export default Update;
