import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');
let selectedBreeds = [];

selectEl.addEventListener('change', onSelect);
infoEl.style.display = 'flex';
infoEl.style.gap = '20px';

fetchBreeds()
  .then(option => {
    option.map(value => renderList(value));
    selectedBreeds = option;
  })
  .catch(error => console.log(error));

function renderList(value) {
  const markup = `<option value="${value.id}">${value.name}</option>`;
  selectEl.insertAdjacentHTML('beforeend', markup);
}

function onSelect(element) {
  const choosenCat = selectedBreeds.find(
    option => option.id === element.target.value
  );

  fetchCatByBreed(choosenCat.id)
    .then(value => {
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
     <h2>${name}</h2>
     <p>${description}</p>
     <p><b>Temperament:</b> ${temperament}</p>
    </div>`;
  infoEl.insertAdjacentHTML('beforeend', markup);
}
