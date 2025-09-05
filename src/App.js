import './App.css';
import { useState } from 'react';
import logo from './logo.svg';

const slots = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
];

const handle = document.getElementById("handle");
const spinDuration = 500;
let isSpinning = false;

function App() {
  const [ image, setImage ] = useState(logo);
  const [ image2, setImage2 ] = useState(logo);
  const [ image3, setImage3 ] = useState(logo);
  const [ image4, setImage4 ] = useState(logo);
  const [ image5, setImage5 ] = useState(logo);
  const [ image6, setImage6 ] = useState(logo);
  
  const API_KEY = "ijVtuFtRSx7coaIyZMYQ187NV65yKPHN";
  
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
  const generateGifs = async() => {
    try {
      console.log("gifs trying to generate rn");
      var theGifURL = await callAPIReturnGif();
      setImage(theGifURL);
      theGifURL = await callAPIReturnGif();
      setImage2(theGifURL);
      theGifURL = await callAPIReturnGif();
      setImage3(theGifURL);
      theGifURL = await callAPIReturnGif();
      setImage4(theGifURL);
      theGifURL = await callAPIReturnGif();     
      setImage5(theGifURL); 
      theGifURL = await callAPIReturnGif();
      setImage6(theGifURL);
    } catch(err) {
      console.log(err);
    }
  }
  
  const symbols = [{image}, {image2}, {image3}, {image4}, {image5}, {image6}];
  
  function handleClick() {
    if (isSpinning) return;
      isSpinning = true;
          // Randomize spin for each reel
    slots.forEach((slot) => {
      var randomStop = Math.floor(Math.random() * symbols.length) * -100;
      slot.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      slot.style.transform = `translateY(${randomStop}px)`;
    })
    
    function getSymbolAtStop(reel) {
      const translateY = parseInt(
        reel.style.transform.replace("translateY(", "").replace("px)", "")
      );
      const symbolIndex = Math.abs(translateY / 100) % symbols.length;
      return symbols[symbolIndex];
    }
    // Check result after all reels stop
    setTimeout(() => {
      checkResult();
      isSpinning = false;
    }, spinDuration);
  };

  function checkResult() {
    const symbol1 = getSymbolAtStop(slots[0]);
    const symbol2 = getSymbolAtStop(slots[1]);
    const symbol3 = getSymbolAtStop(slots[2]);
    
    if (symbol1 === symbol2 && symbol2 === symbol3) {
console.log('WIN')
    } else {
console.log('TRY AGAIN')
    }
  }
  
  return (
    <div className="flex box-border justify-center items-center h-screen">
      <div className = "flex justify-center items-center h-screen"><h1>Meme Slot Machine</h1></div>      
        <div className="flex items-center w-400 h-500">
          <div className="w-80 h-full overflow-hidden bg-grey-400 flex" id="one">
            <div class="symbol-container" className="absolute " id="symbol-container1">
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image2} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image3} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image4} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image5} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image6} alt="logo" /></div>
            </div>
          </div>
          <div className="w-80 h-full overflow-hidden bg-grey-400 flex" id="two">
              <div className="absolute " id="symbol-container1">
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image2} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image3} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image4} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image5} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image6} alt="logo" /></div>
            </div>  
          </div>
          <div className="w-80 h-full overflow-hidden bg-grey-400 flex" id="three">
            <div className="absolute " id="symbol-container1">
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image2} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image3} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image4} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image5} alt="logo" /></div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100"><img src={image6} alt="logo" /></div>
            </div>
          </div> 
          <footer>
          <button className = "w-80 h-100 text-lg/50 align-center flex justify-center text-center" onClick={generateGifs}>Set GIFs</button>
          <button class="handle" id="handle" onClick={handleClick}>Lets Go GAMBLING</button>
          </footer>
        </div>
      </div>
  );
}

export default App;
