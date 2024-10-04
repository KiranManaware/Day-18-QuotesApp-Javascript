const h1=document.querySelector("h1");
const p=document.querySelector("p");
const button=document.querySelector("button");
const container=document.querySelector("#container");

let color=["#987D9A","#BB9AB1","#EECEB9","FEFBD8","#E5D9F2","#F5EFFF","#CDC1FF","#A594F9"];
let count=0;
const quoteChange=async()=>{
    const random=await fetch("http://quotable.io/random");
    const data= await random.json();
    console.log(data);
    h1.innerText=data.content;
    p.innerText=data.author; 
    container.style.backgroundColor=color[count]
    count++;
    console.log(count);
    if(count===color.length-1){
        count=0;
    }
}

button.addEventListener("click",quoteChange)
setInterval(()=>{
    quoteChange()
},5000)