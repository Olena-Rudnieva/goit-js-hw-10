!function(){var e=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),t=document.querySelector(".loader"),c=document.querySelector(".error");e.style.display="none";var o=[];e.addEventListener("change",(function(e){var t=o.find((function(n){return n.id===e.target.value}));(c=t.id,fetch("".concat("https://api.thecatapi.com/v1","/images/search?breed_ids=").concat(c,"&api_key=").concat("live_LNtGUGvnkn0MleVjdqd4yIwVLGRn0fBWg7rGNFbKucUpq7ucAj5JRMkiJScrOFTW")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){var c,o,r,a,i,s=' <img  src="'.concat(e[0].url,'" alt="" style="width: 600px">');n.insertAdjacentHTML("beforeend",s),o=(c=t).name,r=c.description,a=c.temperament,i='\n    <div>   \n     <h2 class="text">'.concat(o,"</h2>\n     <p>").concat(r,"</p>\n     <p><b>Temperament:</b> ").concat(a,"</p>\n    </div>"),n.insertAdjacentHTML("beforeend",i)})).catch((function(e){return console.log(e)})),n.innerHTML="";var c})),n.style.display="flex",n.style.gap="20px",n.style.marginTop="50px",c.style.display="none",fetch("".concat("https://api.thecatapi.com/v1","/breeds?api-key=").concat("live_LNtGUGvnkn0MleVjdqd4yIwVLGRn0fBWg7rGNFbKucUpq7ucAj5JRMkiJScrOFTW")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(n){e.style.display="block",t.style.display="none",n.map((function(n){return function(n){var t='<option value="'.concat(n.id,'">').concat(n.name,"</option>");e.insertAdjacentHTML("beforeend",t)}(n)})),o=n})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.27308904.js.map
