import './App.css';

const slots = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
];

const symbols = ["🍒", "🍋", "🍇"];

const resultMessage = document.getElementById("resultMessage");
const handle = document.getElementById("handle");
const spinDuration = 500;
let isSpinning = false;

function handleClick() {
  if (isSpinning) return;
  isSpinning = true;

  resultMessage.classList.remove("show-message", "win-effect");
  // Randomize spin for each reel
  slots.forEach((slot) => {
    var randomStop = Math.floor(Math.random() * symbols.length) * -100;
    slot.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    slot.style.transform = `translateY(${randomStop}px)`;
  })

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
    resultMessage.textContent = "You Win!";
    resultMessage.classList.add("show-message", "win-effect");
    } else {
    resultMessage.textContent = "";
    resultMessage.classList.add("show-message");
  }
}

function getSymbolAtStop(reel) {
  const translateY = parseInt(
    reel.style.transform.replace("translateY(", "").replace("px)", "")
  );
  const symbolIndex = Math.abs(translateY / 100) % symbols.length;
  return symbols[symbolIndex];
}


function App() {
  
  return (
      <div className="flex box-border justify-center items-center h-screen">
        <h1>Meme Slot Machine</h1>      
        <div className="flex items-center w-400 h-500">
          <div className="w-80 h-full overflow-hidden bg-grey-400 flex" id="one">
            <div class="symbol-container" className="absolute " id="symbol-container1">
              <div class="symbol" className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍒</div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍋</div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍇</div>
            </div>
          </div>
          <div className="w-80 h-full overflow-hidden bg-grey-400 flex" id="two">
              <div className="absolute " id="symbol-container1">
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍒</div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍋</div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍇</div>
            </div>  
          </div>
          <div className="w-80 h-full overflow-hidden bg-grey-400 flex" id="three">
            <div className="absolute " id="symbol-container1">
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍒</div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍋</div>
              <div className="w-80 h-100 text-lg/50 align-center flex justify-center text-center bg-yellow-100">🍇</div>
            </div>
          </div>
        </div>
        <button class="handle" id="handle" onClick={handleClick}>hallo I exist</button>
        <div class="result-message" className="absolute w-full text-center text-lg/18" id="resultMessage">You Win!</div>
      </div>
  );
}

export default App;
