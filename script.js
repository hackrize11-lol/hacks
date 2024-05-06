
function getBadJoke() {
  fetch('https://schoolcheats.net/blooket', {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .then((j) => {
      h2El.textContent = j.joke;
    })
    .catch((e) => {
      console.log(e);
      h2El.textContent = 'failed to load joke';
    });
}


document.addEventListener('DOMContentLoaded', getBadJoke);
