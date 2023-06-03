import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

selectEl.style.display = 'none';
let selectedBreeds = [];
selectEl.addEventListener('change', onSelect);
infoEl.style.display = 'flex';
infoEl.style.gap = '20px';
infoEl.style.marginTop = '50px'

errorEl.style.display = 'none';

fetchBreeds()
  .then(option => {
    selectEl.style.display = 'block';
    loaderEl.style.display = 'none';
    option.map(value => renderList(value));

    selectedBreeds = option;
  })
  .catch(error => console.log(error));

function renderList(value) {
  const markup = `<option value="${value.id}">${value.name}</option>`;
  selectEl.insertAdjacentHTML('beforeend', markup);
}

function onSelect(element) {
  loaderEl.style.display = 'block';
  const choosenCat = selectedBreeds.find(
    option => option.id === element.target.value
  );

  fetchCatByBreed(choosenCat.id)
    .then(value => {
      loaderEl.style.display = 'none';
      
      const img = ` <img  src="${value[0].url}" alt="" style="width: 600px">`;
        infoEl.insertAdjacentHTML('beforeend', img);
        

      renderInfo(choosenCat);
    })
    .catch(error => console.log(error));

  infoEl.innerHTML = '';
}

function renderInfo(obj) {
  const { name, description, temperament } = obj;
  const markup = `
    <div>   
     <h2 class="text">${name}</h2>
     <p>${description}</p>
     <p><b>Temperament:</b> ${temperament}</p>
    </div>`;
  infoEl.insertAdjacentHTML('beforeend', markup);
}
