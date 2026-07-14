import React,{createContext,useEffect,useState} from "react";


//  const apiContext = createContext();
const Books = () =>{


    const [allBooks,setAllBooks] = useState();


let myInfo;

 useEffect( ()=>{


// Async function to download a file
async function loadBooks(file) {
  const response = await fetch(file);
  myDisplayer(await response.text());
}

// Call the async function
loadBooks("http://localhost:3000/books");

// Function to display any text
function myDisplayer(text) {
    console.log("my text is:"+text);
    myInfo = JSON.parse(text);
console.log("myInfo1:"+myInfo[0].title);
console.log("myInfo1:"+myInfo);
  setAllBooks(myInfo);
}



console.log("myInfo2:"+myInfo);


    },[])

 console.log("allBooks now2 :"+ allBooks)


    // let myFinal = [allBooks].map((item)=>{
    // console.log(`<li>${item.title}</li>`);
    //    <li>${item.title}</li>});

    // console.log("my final:" + myFinal)

    return(
<>
        {/* <ul>{allBooks}</ul> */}
        <ul>{[allBooks].map((item)=>{<li>${item}</li>})}</ul>




 
</>
    )



}

export default Books;