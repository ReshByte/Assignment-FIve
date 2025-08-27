

// Love count

const love = document.getElementsByClassName('heart')

let count = 0
for(const loves of love){
    loves.addEventListener('click',function(){
         count++;
         document.getElementById('red-love').innerText = count
        
    })
}



// Copy Count

const greyButton = document.getElementsByClassName("grey-btn");
let copyCount = 0;

for (const btn of greyButton) {
  btn.addEventListener("click", (e) => {
   const cardCopy = btn.parentNode.parentNode;
    const element = cardCopy.getElementsByClassName("number-copy")[0];
    const copyNumber = element.innerText;

    alert("The number has been copied: " + copyNumber);

    navigator.clipboard.writeText(copyNumber);

    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  })
}



//Calling...

const savedData = [];


document.getElementById('national-emergency')
.addEventListener('click',function(e){
  e.preventDefault();
  
  

const data = {
  name: 'National Emergency Number',
  phone: 999,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})






document.getElementById('police-helpline')
.addEventListener('click',function(e){
  e.preventDefault();

  

const data = {
  name: 'Police Helpline Number',
  phone: 999,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})






document.getElementById('fire-down')
.addEventListener('click',function(e){
  e.preventDefault();



const data = {
  name: 'Fire Service Number',
  phone: 999,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})






document.getElementById('ambulance')
.addEventListener('click',function(e){
  e.preventDefault();



const data = {
  name: 'Ambulance Service',
  phone: 1994-999999,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})





document.getElementById('women-child')
.addEventListener('click',function(e){
  e.preventDefault();

  

const data = {
  name: 'Women & Child Helpline',
  phone: 109,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})





document.getElementById('anti-corruption')
.addEventListener('click',function(e){
  e.preventDefault();

  console.log("OKay Bhai")

const data = {
  name: 'Anti-Corruption Helpline',
  phone: 106,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})





document.getElementById('electricity')
.addEventListener('click',function(e){
  e.preventDefault();

  

const data = {
  name: 'Electricity Helpline',
  phone: 16216,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})





document.getElementById('brac-helpline')
.addEventListener('click',function(e){
  e.preventDefault();

  

const data = {
  name: 'Brac Helpline',
  phone: 16445,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)


const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})




document.getElementById('bd-railway')
.addEventListener('click',function(e){
  e.preventDefault();

  

const data = {
  name: 'Bangladesh Railway Helpline',
  phone: 163,
  date: new Date().toLocaleTimeString()
}

savedData.push(data)

const callHistory =  document.getElementById('call-history');
callHistory.innerText = ""

for(const data of savedData){
  const div = document.createElement("div")
  div.innerHTML = `
   <div class="flex justify-between items-center h-[80px] p-[10px] bg-[#FAFAFA] rounded-[8px] mx-[18px] mb-[18px]">
            <div>
                <h1 class="inter-font font-semibold text-black w-[170px]">${data.name}</h1>
                <p class="roboto-font text-[16px] text-[#5C5C5C]">${data.phone}</p>
            </div>
            <p class="roboto-font text-[#5C5C5C] text-[16px] ">${data.date}</p>
           </div>
  `

  callHistory.appendChild(div)
}

})








