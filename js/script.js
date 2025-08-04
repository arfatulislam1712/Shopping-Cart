
let ProductAmount=document.getElementById("ProductAmount");
let ShippingCharge=document.getElementById("ShippingCharge");
let TotalAmount=document.getElementById("TotalAmount");


const DecreaseNumber=(Decrease,itemprice)=>{
let inputValue= document.getElementById(Decrease);
let Itemprice= document.getElementById(itemprice);



if(inputValue.value<=0){
    inputValue.value=0

}else{
    inputValue.value=parseInt(inputValue.value)-1;
   inputValue.style.background='#fff'
    inputValue.style.color='#000'
Itemprice.innerHTML=parseInt(Itemprice.innerHTML)-35
ProductAmount.innerHTML=parseInt(ProductAmount.innerHTML)-35
TotalAmount.innerHTML=parseInt(ProductAmount.innerHTML)+4

}}


// increaseNumber Js Work start

const increaseNumber=(increase,itemprice)=>{
   let inputValue= document.getElementById(increase);
let Itemprice= document.getElementById(itemprice);




  if(inputValue.value>=7){
    alert("almost 7 Product Add To cart");
    inputValue.style.background='red',
    inputValue.style.color='#fff'
    inputValue.style.border='none'
  }else{
    inputValue.value=parseInt(inputValue.value)+1;
Itemprice.innerText=parseInt(Itemprice.innerHTML)+35
ProductAmount.innerHTML=parseInt(ProductAmount.innerHTML)+35
TotalAmount.innerHTML=parseInt(ProductAmount.innerHTML)+parseInt(ShippingCharge.innerHTML)


  }
}