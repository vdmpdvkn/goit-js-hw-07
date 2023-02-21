import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", createGalleryImage(galleryItems));

function createGalleryImage(images) {
  return images
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href = "${original}" ><img class = "gallery__image lazyload" src = "${preview}" alt = "${description}">
    </a>`
    )
    .join("");
}

const libGallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionsDelay: 250,
});
