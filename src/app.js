import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  console.log("Hello Rigo from the console!");

  const domains = document.querySelector("#domains");
  for(let i=0; i < pronoun.length; i++){
    for(let j=0; j< adj.length; j++){
      for(let k=0; k< noun.length; k++){
        const domainName = pronoun[i] + adj[j] + noun[k]
        console.log(domainName)
        const listElement=document.createElement("li")
        listElement.innerHTML = domainName
        domains.appendChild(listElement)
      }
    }
    
    
  }

};
