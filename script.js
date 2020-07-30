const imageContainer = document.getElementById(`image-container`);
const loader = document.getElementById(`loader`);

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = `19QH48QDMFQycSojya5b4uoEAycIO06OnhICLgj_6xI`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to set attributes on DOM ELements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create elements for Links and Photos, Add to DOM
function displayPhotos() {
  //Run functions for each object in photosArray
  photosArray.forEach((photo) => {
    //Create <a> to link to Unsplash
    const item = document.createElement(`a`);
    setAttributes(item, {
      href: photo.links.html,
      target: `_blank`,
    });

    // Create <img> for photo
    const img = document.createElement(`img`);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Put <img> inside <a>, then buth both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos froxm Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //Catch Error Here
  }
}

//On load
getPhotos();
