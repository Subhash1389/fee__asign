const btn=document.getElementById('asd');
btn.addEventListener('click',()=>{
    const form=document.getElementById('form');
    if(form.style.display === 'none'){
        form.style.display='block';
    }else{
        form.style.display='none';
    }
});





//add product

// let productdata=localStorage.getItem("products") || [];
// console.log(productdata);
let productdata=[];
if(productdata.length>0){
    productdata=JSON.parse(productdata);
}
else{
    productdata=[];
}
let oldp=localStorage.getItem("products");
let oldpp=JSON.parse(oldp);
if(oldpp!=null){
    for(let i=0;i<oldpp.length;i++){
        productdata[i]=oldpp[i];
    }
}

let myform=document.querySelector(".myform");
let pid=document.querySelector(".id");
let pname=document.querySelector(".name");
let pquantity=document.querySelector(".quantity")
let pprice=document.querySelector(".price");

myform.addEventListener("submit",function(ev){
    ev.preventDefault();
    
    
    
    let newstu={
        id:pid.value,
        name:pname.value,
        quantity:pquantity.value,
        price:pprice.value
       

    };
    productdata.push(newstu);
    localStorage.setItem("products",JSON.stringify(productdata));
    // showproduct();
    
});

//show data on page

// function showproduct(){
//     let productjson=localStorage.getItem("products");
//     let productinfo=JSON.parse(productjson);
//     console.log(productinfo);
//     let productlist=document.querySelector(".productlist");
//     productlist.innerHTML=""
//     for( let i=0;i<productinfo.length;i++){
//         let productitem=productinfo[i];
//         console.log(productitem);
//         let li=document.createElement("li");
//         li.innerHTML=`<li style="list-style-type: none;">
//         Product ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:${productitem.id}
//         <br>
//         Product Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:${productitem.name}
//         <br>
//         product Quantity&nbsp;&nbsp;:${productitem.quantity}
//         <br>
//         Product Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:${productitem.price}

//     </li>`
    
//     productlist.append(li);
//     }}
//     showproduct();













//formhide and sho

