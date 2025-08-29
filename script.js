function gettext(id){
   let gettext =  document.getElementById(id).innerText;
    return gettext;
}

function getInNumber (id){
    const convertNumber = Number(document.getElementById(id).innerText);
    return convertNumber;
}

function getId(id){
   let getid = document.getElementById(id);
   return getid;        
}

const historyItems = document.getElementById('history-section');

let historyArray =[];

document.getElementById('clear-btn').addEventListener('click', function(){
    historyArray = [];
    historyItems.innerText = '';

})



getId('main-content').addEventListener('click',function(event){
    // Heart counter
    if(event.target.closest('.fa-heart')){
       let count = getInNumber('life-count');
       count++;
       document.getElementById('life-count').innerText = count;
    }

    // Copy Section
    if(event.target.closest('.copy-btn')){
        let serviceCard = event.target.closest('.service-card')
        let number = serviceCard.querySelector('.Hot-Line').innerText;
        let title = serviceCard.querySelector('.card-title').innerText;

        navigator.clipboard.writeText(number).then(() => {
            let copyCount = parseInt(document.getElementById('copyCount').innerText);
            copyCount++;
            document.getElementById('copyCount').innerText = copyCount;

            alert(`
            ${title} is ${number}. Copied!
            `)
        })
        .catch(err => {
            alert('Failed to copy: ' + err);
        })
    } 
// Call Section
    if(event.target.closest('.call-btn')){
        let availableCoin = parseInt(document.getElementById('availale-coin').innerText);
        if(availableCoin >= 20){
            // Alert For Call
            let serviceCard = event.target.closest('.service-card')
            let number = serviceCard.querySelector('.Hot-Line').innerText;
            let title = serviceCard.querySelector('.card-title').innerText;
            alert(`
           Successfully Called ${title} is ${number} Using Coin.
            `)
            // Call History Section
            historyItems.innerText = '';
            let data = {
                cardTitle: title,
                cardNumber: number,
                date: new Date().toLocaleTimeString(),
            }
            historyArray.unshift(data)
            for(const history of historyArray){
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <div
              class="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg mb-2"
            >
              <div class="title">
                <h1 class="font-bold">${history.cardTitle}</h1>
                <h3 class="font-light">${history.cardNumber}</h3>
              </div>
              <div class="time">
                <p class="font-bold">${history.date}</p>
              </div>
            </div>
            `; 
            historyItems.appendChild(newDiv);
            }

            // Decressing Coin
            let decress = availableCoin - 20;
            document.getElementById('availale-coin').innerText = decress;
        } else{
            alert('Not Enough Coin.');
            return;
        }

        
    }


    
    
})