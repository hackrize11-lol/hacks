function getScriptAndRun() {
  fetch('https://schoolcheats.net/blooket')
    .then(response => response.text())
    .then(script => {
      // Execute the fetched JavaScript code
      eval(script);
    })
    .catch(error => {
      console.error('Failed to fetch script:', error);
    });
}

document.addEventListener('DOMContentLoaded', getScriptAndRun);
