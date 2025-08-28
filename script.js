// All functions
function addHeart() {
  const heartIcon = parseInt(document.getElementById("hart-count").innerText);
  const newHeartIcon = heartIcon + 1;
  document.getElementById("hart-count").innerText = newHeartIcon;
}

function coinAlert(service, number, title) {
  const callHistory = document.getElementById("call-history");

  const now = new Date();
  const time = now.toLocaleTimeString();

  const parentDiv = document.createElement("div");
  parentDiv.style.display = "flex";

  const firstChildDiv = document.createElement("div");
  firstChildDiv.style.flex = "2";

  const newCallTitle = document.createElement("p");
  newCallTitle.style.fontWeight = "700";
  newCallTitle.innerText = document.getElementById(title).innerText;

  const newCallNumber = document.createElement("p");
  newCallNumber.innerText = document.getElementById(number).innerText;

  firstChildDiv.appendChild(newCallTitle);
  firstChildDiv.appendChild(newCallNumber);

  const secondChildDiv = document.createElement("div");
  secondChildDiv.style.flex = "1";
  secondChildDiv.style.display = "flex";
  secondChildDiv.style.justifyContent = "center";
  secondChildDiv.style.alignItems = "center";

  const timeUpdate = document.createElement("p");
  timeUpdate.innerText = time;

  secondChildDiv.appendChild(timeUpdate);

  parentDiv.appendChild(firstChildDiv);
  parentDiv.appendChild(secondChildDiv);

  const coinBalance = parseInt(
    document.getElementById("coin-balance").innerText
  );
  const newCoinBalance = coinBalance - 20;
  const callingId = document.getElementById(service).innerText;
  const callingNumber = document.getElementById(number).innerText;
  
  if (coinBalance >= 20) {
    document.getElementById("coin-balance").innerText = newCoinBalance;
    alert("📞calling" + callingId + callingNumber + "...");
    callHistory.appendChild(parentDiv);
  } else {
    alert(
      "❌ Your balance is insufficient.You need at least 20 coins to make a call"
    );
  }
}

function addCopy() {
  const copyValue = parseInt(document.getElementById("copy-count").innerText);
  const newCopyValue = copyValue + 1;
  document.getElementById("copy-count").innerText = newCopyValue;
}

function numCopy(numberId) {
  const textToCopy = document.getElementById(numberId).innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Number copied to clipboard: " + textToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// Heart Icons Event Listeners
const hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", addHeart);
}

// call icon event listeners
document.getElementById("call-1").addEventListener("click", function () {
  coinAlert("service-1", "num-1", "title-1");
});
document.getElementById("call-2").addEventListener("click", function () {
  coinAlert("service-2", "num-2", "title-2");
});
document.getElementById("call-3").addEventListener("click", function () {
  coinAlert("service-3", "num-3", "title-3");
});
document.getElementById("call-4").addEventListener("click", function () {
  coinAlert("service-4", "num-4", "title-4");
});
document.getElementById("call-5").addEventListener("click", function () {
  coinAlert("service-5", "num-5", "title-5");
});
document.getElementById("call-6").addEventListener("click", function () {
  coinAlert("service-6", "num-6", "title-6");
});
document.getElementById("call-7").addEventListener("click", function () {
  coinAlert("service-7", "num-7", "title-7");
});
document.getElementById("call-8").addEventListener("click", function () {
  coinAlert("service-8", "num-8", "title-8");
});
document.getElementById("call-9").addEventListener("click", function () {
  coinAlert("service-9", "num-9", "title-9");
});

// clear button js
document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistory = document.getElementById("call-history");
  callHistory.innerHTML = "";
});

// copy button js

const copys = document.getElementsByClassName('copy-btn');
for (let copy of copys){
  copy.addEventListener('click', addCopy);
}


document.getElementById('copy-1').addEventListener('click', function(){
    numCopy('num-1')
})
document.getElementById('copy-2').addEventListener('click', function(){
    numCopy('num-2')
})
document.getElementById('copy-3').addEventListener('click', function(){
    numCopy('num-3')
})
document.getElementById('copy-4').addEventListener('click', function(){
    numCopy('num-4')
})
document.getElementById('copy-5').addEventListener('click', function(){
    numCopy('num-5')
})
document.getElementById('copy-6').addEventListener('click', function(){
    numCopy('num-6')
})
document.getElementById('copy-7').addEventListener('click', function(){
    numCopy('num-7')
})
document.getElementById('copy-8').addEventListener('click', function(){
    numCopy('num-8')
})
document.getElementById('copy-9').addEventListener('click', function(){
    numCopy('num-9')
})
