// functions
// coin reduction function
// function to get innerText
     function getInnerText(id){
     const element = document.getElementById(id)
     const elementValue = element.innerText
     const elementValueNumber = parseInt(elementValue)
     return elementValueNumber;
     }

     // function to set new value
      function setInnerText(id, value){
     const element = document.getElementById(id);
      element.innerText = value;
}




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
    
    
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);

     // Add to history (service name + number)
    const entry = document.createElement("p");
    entry.className = "p-2 border-b border-gray-300";
    entry.innerHTML = `<strong>${serviceName}</strong> - ${number}`;
    historyContainer.appendChild(entry);
})
// card 2
document.getElementById("call-button-police").addEventListener("click", function(){
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 3
document.getElementById("call-button-fire").addEventListener("click", function(){
    
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 4
document.getElementById("call-button-ambulance").addEventListener("click", function(){
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 5

document.getElementById("call-button-wc").addEventListener("click", function(){
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 6
document.getElementById("call-button-corruption").addEventListener("click", function(){
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 7
document.getElementById("call-button-electricity").addEventListener("click", function(){
     // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 8
document.getElementById("call-button-ngo").addEventListener("click", function(){
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})

// card 9
document.getElementById("call-button-railway").addEventListener("click", function(){
    // coin deduction output
    const availableCoins = getInnerText("available-coins")
     if (availableCoins < 20) {
        alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
        return;
    }

    alert('📞 Calling National Emergency Service 999');

    const newAvailableCoins = availableCoins - 20;
    setInnerText("available-coins", newAvailableCoins);
})



// clear button
const historySection = document.createElement("div");
historySection.id = "call-history-list";
document.querySelector(".right-side-section").appendChild(historySection);


document.getElementById("clear-data").addEventListener("click", function() {
  historySection.innerHTML = "";
  console.log('clear data')
});