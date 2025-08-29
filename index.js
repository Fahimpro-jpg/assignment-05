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

    // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">National Emergency Service</h2>
        <p class="text-[#5C5C5C]">999</p>
    `;
    historySection.appendChild(entry);
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

     // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Police Helpline Number</h2>
        <p class="text-[#5C5C5C]">999</p>
    `;
    historySection.appendChild(entry);
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
      // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Fire Service Number</h2>
        <p class="text-[#5C5C5C]">999</p>
    `;
    historySection.appendChild(entry);
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

     // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Ambulance Service</h2>
        <p class="text-[#5C5C5C]">1994-999999</p>
    `;
    historySection.appendChild(entry);
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
    // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Women & Child Helpline</h2>
        <p class="text-[#5C5C5C]">109</p>
    `;
    historySection.appendChild(entry);
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

    // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Anti-Corruption Helpline</h2>
        <p class="text-[#5C5C5C]">106</p>
    `;
    historySection.appendChild(entry);
    
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
    // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Electricity Helpline</h2>
        <p class="text-[#5C5C5C]">16216</p>
    `;
    historySection.appendChild(entry);
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
    // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Brac Helpline</h2>
        <p class="text-[#5C5C5C]">16445</p>
    `;
    historySection.appendChild(entry);
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

    // history section
     const entry = document.createElement("div");
    entry.className = "ml-5 p-2 border-b border-gray-200";
    entry.innerHTML = `
        <h2 class="text-[20px] font-semibold">Bangladesh Railway Helpline</h2>
        <p class="text-[#5C5C5C]">163</p>
    `;
    historySection.appendChild(entry);
})



// clear button
const historySection = document.createElement("div");
historySection.id = "call-history-list";
document.querySelector(".right-side-section").appendChild(historySection);


document.getElementById("clear-data").addEventListener("click", function() {
  historySection.innerHTML = "";
  console.log('clear data')
});