
// heart button function
let heartCount = 0;

  // Select all heart buttons
  const heartButtons = document.querySelectorAll(".heart-btn");

  heartButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      heartCount++;
      document.getElementById("available-heart").innerText = heartCount;

      
    });
  });






// call button event

// card 1
document.getElementById("call-button-emergency").addEventListener("click", function(){
    alert('Calling National Emergency Service')
})
// card 2
document.getElementById("call-button-police").addEventListener("click", function(){
    alert('Calling Police Helpline ')
})

// card 3
document.getElementById("call-button-fire").addEventListener("click", function(){
    alert('Calling Fire Service')
})

// card 4
document.getElementById("call-button-ambulance").addEventListener("click", function(){
    alert('Calling Ambulance Service')
})

// card 5

document.getElementById("call-button-wc").addEventListener("click", function(){
    alert('Calling Women & Child Helpline')
})

// card 6
document.getElementById("call-button-corruption").addEventListener("click", function(){
    alert('Calling Anti-Corruption Helpline')
})

// card 7
document.getElementById("call-button-electricity").addEventListener("click", function(){
    alert('Calling Electricity Helpline')
})

// card 8
document.getElementById("call-button-ngo").addEventListener("click", function(){
    alert('Calling Brac Helpline')
})

// card 9
document.getElementById("call-button-railway").addEventListener("click", function(){
    alert('Calling Bangladesh Railway Helpline')
})
