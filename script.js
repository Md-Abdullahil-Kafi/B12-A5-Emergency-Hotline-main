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

   


    
   
})