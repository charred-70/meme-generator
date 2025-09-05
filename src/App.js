import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [ image, setImage ] = useState(logo);
  const [ image2, setImage2 ] = useState(logo);
  const [ image3, setImage3 ] = useState(logo);
  const API_KEY = "Bi5MPWQceNb6rbK7sMshxRm685V8YvXk";

  const callAPIReturnGif = async() => {
    try {
      var linker = "https://api.giphy.com/v1/gifs/random?api_key=" + API_KEY;
      const res = await fetch(linker);
      if(!res.ok){
        throw new Error("Could not fetch resource"); 
      }
          
      const data = await res.json();      
          
      var gifImg = data.data.images.original.url;
      return gifImg;
    } catch(err) {
      console.log(err);
    }
  }
  const whenClicked = async() => {
    try {
      var theGifURL = await callAPIReturnGif();
      setImage(theGifURL);
      theGifURL = await callAPIReturnGif();
      setImage2(theGifURL);
      theGifURL = await callAPIReturnGif();
      setImage3(theGifURL)
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <img src={image2}/>
        <img src={image3}/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={whenClicked}> Click ME! </button>
      </header>     
    </div>
  );
}


export default App;
