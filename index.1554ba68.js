!function(){var n=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),e=[];n.addEventListener("change",(function(n){var c=e.find((function(t){return t.id===n.target.value}));(o=c.id,fetch("".concat("https://api.thecatapi.com/v1","/images/search?breed_ids=").concat(o,"&api_key=").concat("live_LNtGUGvnkn0MleVjdqd4yIwVLGRn0fBWg7rGNFbKucUpq7ucAj5JRMkiJScrOFTW")).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){var e,o,r,a,i,u=' <img  src="'.concat(n[0].url,'" alt="" style="width: 600px">');t.insertAdjacentHTML("beforeend",u),o=(e=c).name,r=e.description,a=e.temperament,i="\n    <div>   \n     <h2>".concat(o,"</h2>\n     <p>").concat(r,"</p>\n     <p><b>Temperament:</b> ").concat(a,"</p>\n    </div>"),t.insertAdjacentHTML("beforeend",i)})).catch((function(n){return console.log(n)})),t.innerHTML="";var o})),t.style.display="flex",t.style.gap="20px",fetch("".concat("https://api.thecatapi.com/v1","/breeds?api-key=").concat("live_LNtGUGvnkn0MleVjdqd4yIwVLGRn0fBWg7rGNFbKucUpq7ucAj5JRMkiJScrOFTW")).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()})).then((function(t){t.map((function(t){return function(t){var e='<option value="'.concat(t.id,'">').concat(t.name,"</option>");n.insertAdjacentHTML("beforeend",e)}(t)})),e=t})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.1554ba68.js.map