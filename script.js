

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

