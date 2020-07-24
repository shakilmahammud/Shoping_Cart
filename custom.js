//increment buttton
   const incrementBtn=document.getElementById("incrementBtn").addEventListener("click",function(){
   const mobileCount=document.getElementById("mobileCount").value++;
   const mobileCountNumber=parseFloat(mobileCount);
   const mobilePrice=document.getElementById("mobilePrice").innerText;
   const mobilePriceNumber=parseFloat(mobilePrice);
   const price=mobilePriceNumber+1219;
   document.getElementById("mobilePrice").innerText=price;
})
//decrement button 

const decrementBtn=document.getElementById("decrementBtn").addEventListener("click",function(){
 const mobileCount=document.getElementById("mobileCount").value--;
 const mobileCountNumber=parseFloat(mobileCount);
   const mobilePrice=document.getElementById("mobilePrice").innerText;
   const mobilePriceNumber=parseFloat(mobilePrice);
   const price=mobilePriceNumber-1219;
   document.getElementById("mobilePrice").innerText=price;
});
