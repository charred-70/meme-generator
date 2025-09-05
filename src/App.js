import logo from './logo.svg';
import './App.css';

const handleClick = async() => {
  try {
    const API_KEY = "Bi5MPWQceNb6rbK7sMshxRm685V8YvXk";
    var linker = "https://api.giphy.com/v1/gifs/random?api_key=" + API_KEY;
    const res = await fetch(linker);
    if(!res.ok){
      throw new Error("Could not fetch resource"); 
    }
    
    const data = await res.json();
    console.log(data);
    
    var gifImg = data[0].images.original.url;
    console.log(gifImg);
    //document.getElementById("gif").setAttribute(gifImg);

  } catch(err){
    console.log(err)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button onClick={handleClick}> Click ME! </button>
      </header>     
    </div>
  );
}

export default App;
