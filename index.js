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
document.getElementById("call-button-emergency").addEventListener("click", function () {
  // coin deduction output
  const availableCoins = getInnerText("available-coins");
  if (availableCoins < 20) {
    alert("❌ You don’t have enough coins to make this call. To make a call need 20 coins");
    return;
  }

  alert("📞 Calling National Emergency Service 999");

  const newAvailableCoins = availableCoins - 20;
  setInnerText("available-coins", newAvailableCoins);

//    local date & time
  const now = new Date();
  const time = now.toLocaleTimeString();  
  

  // history section
  const entry = document.createElement("div");
  entry.className = "ml-5 p-2 border-b border-gray-200";
  entry.innerHTML = `
        <div class ="flex justify-between">
        <div>
        <h2 class="text-[20px] font-semibold">Police Helpline</h2>
        <p class="text-[#5C5C5C]">999</p>
        </div>
        <p class="text-lg text-gray-500"> ${time}</p>
        </div>
    `;
  historySection.appendChild(entry);
});

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


// copy button
// copy-btn-1
let copyCount = 0;
document.getElementById("copy-button").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})

// copy-btn-2
document.getElementById("copy-button-1").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-1").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})

// copy-btn-3
document.getElementById("copy-button-2").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-2").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})


// copy-btn-4
document.getElementById("copy-button-3").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-3").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})


// copy-btn-5
document.getElementById("copy-button-4").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-4").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})

// copy-btn-6
document.getElementById("copy-button-5").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-5").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})


// copy-btn-7

document.getElementById("copy-button-6").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-6").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})

// copy-btn-8

document.getElementById("copy-button-7").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-7").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})

// copy-btn-9
document.getElementById("copy-button-8").addEventListener('click', function(){
    const copyNumber = document.getElementById("hotline-number-8").innerText;

     navigator.clipboard.writeText(copyNumber);
      alert("✅ Number is  Copied: "+copyNumber);

      copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

})