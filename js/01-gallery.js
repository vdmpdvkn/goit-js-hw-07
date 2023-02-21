import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", createImageEl(galleryItems));
galleryEl.addEventListener("click", selectGalleryEl);

function createImageEl(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<div class = "gallery__item" style = "border-radius:3%">
        <a class="gallery__link" style= "border-radius:3%">
        <img 
        class = "gallery__image lazyload" 
        src = "${preview}" data-source = "${original}" 
        alt = "${description}" 
        loading = "lazy" 
        style = "border-radius:3%;">
        </a></div>`
    )
    .join("");
}
function selectGalleryEl(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modalWindowEl = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600 loading = "lazy" class = "lazyload" style ="border-radius: 7%">
`,
    {
      closable: true,
      onShow() {
        window.addEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            modalWindowEl.close();
          }
        });
        document.body.style.overflow = "hidden";
      },
      onClose() {
        window.removeEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            modalWindowEl.close();
          }
        });
        document.body.style.overflow = "";
      },
    }
  );

  modalWindowEl.show();
}
