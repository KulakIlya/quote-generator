!function(){const e={method:"GET",headers:{"X-Api-Key":"sGryjH1CycS0NMIp10naPw==519TXZ4Lvpu5IgPD"},contentType:"application/json"};const t=new class{constructor(){this.mainContentRef=document.querySelector(".main-content"),this.quoteRef=document.querySelector(".quote"),this.authorRef=document.querySelector(".author"),this.btnNextRef=document.querySelector(".btn--next"),this.loadingRef=document.getElementById("loading"),this.btnNextRef.addEventListener("click",o)}showSpinner(){this.loadingRef.style.visibility="visible"}hideSpinner(){this.loadingRef.style.visibility="hidden"}renderQuote({author:e,quote:t}){this.authorRef.innerText=e,this.quoteRef.innerText=t,this.mainContentRef.classList.remove("is-hidden")}},n=["age","alone","amazing","anger","architecture","art","attitude","beauty","best","birthday","business","car","change","communications","computers","cool","courage","dad","dating","death","design","dreams","education","environmental","equality","experience","failure","faith","family","famous","fear","fitness","food","forgiveness","freedom","friendship","funny","future","god","good","government","graduation","great","happiness","health","history","home","hope","humor","imagination","inspirational","intelligence","jealousy","knowledge","leadership","learning","legal","life","love","marriage","medical","men","mom","money","morning","movies","success"];function i(e){return e[Math.floor(Math.random()*e.length)]}function o(){var o;t.showSpinner(),(o=i(n),fetch("https://api.api-ninjas.com/v1/quotes?limit=10&category="+o,e).then((e=>e.json()))).then((e=>{t.renderQuote(i(e)),t.hideSpinner()}))}o()}();
//# sourceMappingURL=index.9939e60d.js.map