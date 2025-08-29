// heart count 

let count = 0

let getHearts = document.querySelectorAll('.heart')
let heartNumber = document.getElementById('heart-number') ;
for(let heart of getHearts){
    heart.addEventListener('click',function(){
        count++
        heartNumber.innerText =count ;
    })
}
 
 
// call button 
let coin = 100 ;

let  coinNumbers = document.getElementById("coin-numbers") ;
 let alertBtns= document.querySelectorAll(".alert-btn") ;
 let callHistory = document.getElementById("call-history") ;

 for(const btn of alertBtns ){
    btn.addEventListener('click', function(){
      
      

       
        if( coin < 20 ){
            alert('Not Enough Coin')
            return
            
        } 
         coin -= 20 ;
         coinNumbers.innerText =coin ;
      let card =btn.closest('.card')

      let serviceName = card.querySelector(".service-name").innerText;
        let serviceNumber = card.querySelector(".service-number").innerText;
        alert('service :' + serviceName)
        alert('Number :' + serviceNumber)
     

   
     
       const li = document.createElement("li");
    li.innerText = serviceName + " - " + serviceNumber;
    callHistory.appendChild(li);
    


        
         
         
         
   
         


        
        
    })
 }
 document.getElementById('clear-button').addEventListener('click',function(e){
    let getlist = document.getElementById('ul-list')
    getlist.innerHTML =""
    
   


 })

const copyButtons = document.querySelectorAll('.copy-btn');

for (const btn of copyButtons) {
  btn.addEventListener('click', async function () {

    const card = btn.closest('.card');
    if (!card) return;

    const nameEl = card.querySelector('.service-name');
    const numberEl = card.querySelector('.service-number');
    const name = nameEl ? nameEl.innerText.trim() : '';
    const number = numberEl ? numberEl.innerText.trim() : '';

    const textToCopy = `${name} - ${number}`;

   
    const showCopied = (button) => {
      const originalHTML = button.innerHTML;
      button.innerHTML = '✅ Copied';
      button.disabled = true;
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.disabled = false;
      }, 1200);
    };

  
    try {
      await navigator.clipboard.writeText(textToCopy);
      showCopied(btn);
    } catch (err) {
     
      const ta = document.createElement('textarea');
      ta.value = textToCopy;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showCopied(btn);
      } catch (e) {
   
        alert('Could not automatically copy. Select the text and press Ctrl/Cmd + C:\n\n' + textToCopy);
      }
      document.body.removeChild(ta);
    }
  });
}
