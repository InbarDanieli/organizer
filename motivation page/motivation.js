const button = document.getElementById("PicButton");
/** @type {HTMLImageElement} */
const image = document.getElementById('image');

button.addEventListener('click', (Event) => {
  fetch("https://cataas.com/cat?json=true")
    .then((response) => {
      return response.json();
    })
    .then((jsonObject) => {
      image.src = `https://cataas.com/${jsonObject.url}?width=600`;
      document.body.appendChild(image);
    })
});