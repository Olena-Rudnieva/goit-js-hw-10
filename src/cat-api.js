export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const API_KEY =
    'live_LNtGUGvnkn0MleVjdqd4yIwVLGRn0fBWg7rGNFbKucUpq7ucAj5JRMkiJScrOFTW';

  return fetch(`${BASE_URL}/breeds123?api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const API_KEY =
    'live_LNtGUGvnkn0MleVjdqd4yIwVLGRn0fBWg7rGNFbKucUpq7ucAj5JRMkiJScrOFTW';

  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}
