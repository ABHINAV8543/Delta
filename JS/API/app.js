let link="http://universities.hipolabs.com/search?name=";

let button=document.querySelector("button");
button.addEventListener("click", () => {
    let input=document.querySelector("#country");
    let state=document.querySelector("#state");
    let url=link+input.value;
    input.value="";
    getResult(url, state.value);
    state.value="";
});

async function getResult(url, state){
    let data=await fetch(url);
    let items=await data.json();
    
    let ul=document.querySelector("#result");
    for(let i=0; i<items.length; i+=1){
        if(state=="" || state==items[i]["state-province"]){
            let li=document.createElement("li");
            li.innerText=items[i].name;
            ul.appendChild(li);
        }
    }
}