//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem("botScore")) {
    localStorage.setItem("botScore", 0)
}

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let botScoreValue = Number(localStorage.getItem("botScore"))
  botScoreValue += 1
  localStorage.setItem("botScore", botScoreValue)

    
}


