//Mobile increment buttton
 const mobileAddBtn=document.getElementById('mobileAddBtn');
  mobileAddBtn.addEventListener('click',function(){
   const mobileCount=document.getElementById('mobileCount').value++;
   const mobilePrice=document.getElementById('mobilePrice').innerText;
   const mobilePriceNumber=parseFloat(mobilePrice);
   const price=mobilePriceNumber+1219;
   document.getElementById('mobilePrice').innerText=price;
   const subTotal=document.getElementById('subTotal').innerText;
   const subNewTotal=parseFloat(subTotal);
   const subTotalPrice=subNewTotal+1219;
   document.getElementById('subTotal').innerText=subTotalPrice;
   document.getElementById('total').innerText=subTotalPrice;

  });
// Mobile decrement button 

const mobileRemoveBtn=document.getElementById("mobileRemoveBtn").addEventListener("click",function(){
 const mobileCount=document.getElementById("mobileCount");
 if(mobileCount.value<=0 && price<=0){
   mobileCount.value=0;
   Price=0;
}
else{
   mobileCount.value--;
}
   const mobilePrice=document.getElementById("mobilePrice").innerText;
   const mobilePriceNumber=parseFloat(mobilePrice);
   const price=mobilePriceNumber-1219;
   document.getElementById("mobilePrice").innerText=price;
   const subTotal=document.getElementById('subTotal').innerText;
 const subNewTotal=parseFloat(subTotal);
 const subTotalPrice=subNewTotal-1219;
 document.getElementById('subTotal').innerText=subTotalPrice;
 document.getElementById('total').innerText=subTotalPrice;
});


//Case increment buttton
const itemAddBtn=document.getElementById('itemAddBtn');
itemAddBtn.addEventListener('click',function(){
 const caseCount=document.getElementById('caseCount').value++;
 const casePrice=document.getElementById('casePrice').innerText;
 const casePriceNumber=parseFloat(casePrice);
 const price=casePriceNumber+59;
 document.getElementById('casePrice').innerText=price;
 const subTotal=document.getElementById('subTotal').innerText;
 const subNewTotal=parseFloat(subTotal);
 const subTotalPrice=subNewTotal+59;
 document.getElementById('subTotal').innerText=subTotalPrice;
 document.getElementById('total').innerText=subTotalPrice;
});
// Case decrement button 

const caseRemoveBtn=document.getElementById("itemRemoveBtn").addEventListener("click",function(){
const caseCount=document.getElementById("caseCount");
if(caseCount.value<=0 && price<=0){
 caseCount.value=0;
 Price=0;
}
else{
 caseCount.value--;
}
 const casePrice=document.getElementById("casePrice").innerText;
 const casePriceNumber=parseFloat(casePrice);
 const price=casePriceNumber-59;
 document.getElementById("casePrice").innerText=price;
 const subTotal=document.getElementById('subTotal').innerText;
 const subNewTotal=parseFloat(subTotal);
 const subTotalPrice=subNewTotal-59;
 document.getElementById('subTotal').innerText=subTotalPrice;
 document.getElementById('total').innerText=subTotalPrice;
});


//remove mobile

const remove=document.getElementById("remove-item1").addEventListener('click',function(){
   const totalMobilePrice=document.getElementById('mobilePrice').innerText;
   const totalMobilePriceNumber=parseFloat(totalMobilePrice);
   const subTotal=document.getElementById('subTotal').innerText;
   const subTotalNumber=parseFloat(subTotal);
   const total=subTotalNumber-totalMobilePriceNumber;
   document.getElementById('subTotal').innerText=total;
   document.getElementById('total').innerText=total;
   if(total>0){
      document.getElementById('empty').style.display="none";
   }
   else{
      document.getElementById('empty').style.display="block"
   }
   document.getElementById('cart1').style.display="none";
});
//remove case
const remove2=document.getElementById("remove-item2").addEventListener('click',function(){
   const totalCasePrice=document.getElementById('casePrice').innerText;
   const totalCasePriceNumber=parseFloat(totalCasePrice);
   const subTotal=document.getElementById('subTotal').innerText;
   const subTotalNumber=parseFloat(subTotal);
   const total=subTotalNumber-totalCasePriceNumber;
   document.getElementById('subTotal').innerText=total;
   document.getElementById('total').innerText=total;
   if(total>0){
      document.getElementById('empty').style.display="none";
   }
   else{
      document.getElementById('empty').style.display="block"
   }
   document.getElementById('cart2').style.display="none";
});