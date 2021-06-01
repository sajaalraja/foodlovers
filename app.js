let form1=document.getElementById("formfood");
let tableel=document.getElementById("tableform");
let food=[];


function Foodlovers(customername,foodtype){

this.customername=customername;
this.foodtype=foodtype;
this.price=this.randomprice(100,50);
this.image1='../img/pizza.jpg';
this.image2='../img/burger.jpg';
this.image3='../img/shawrma.jpg';




food.push(this);








}
Foodlovers.prototype.randomprice=function(){


return this.price=Math.floor(Math.random() * (100-50+1)+50);




};




function settingitem(){
let data=JSON.stringify(food);
localStorage.setItem("foodd",data);







}



function gettingitem(){

let stringobj=localStorage.getItem("foodd");
let normalobj=JSON.parse(stringobj);
if(normalobj!==null){

food=normalobj;




}
rendertable();




}


function rendertable(){

    tableel.textContent='';
    let table=document.createElement("table");
    tableel.appendChild(table);

    let tr1=document.createElement("tr");
    table.appendChild(tr1);
    let th1=document.createElement("th");
    tr1.appendChild(th1);
    th1.textContent="order image";

    let th2=document.createElement("th");
    tr1.appendChild(th2);
    th2.textContent="order details";


    for(let i=0;i<food.length;i++){

let raw=document.createElement("tr");
table.appendChild(raw);

let orderimagetd=document.createElement("td");
raw.appendChild(orderimagetd);
orderimagetd.setAttribute("src",$this.image1);

let orderdetailtd=document.createElement("td");
raw.appendChild(orderdetailtd);
orderdetailtd.textContent=`customer name:${food[i].customername}  and food type:${food[i].foodtype} and price food ${food[i].price}`;





    }










}








function handlesubmit(event){
event.preventDefault();
let customername=event.targrt.customername.value;
let foodtype=event.targrt.foodtype.value;
new Foodlovers(customername,foodtype);



settingitem();
rendertable();


}








gettingitem();
form1.addEventListener("submit",handlesubmit);
