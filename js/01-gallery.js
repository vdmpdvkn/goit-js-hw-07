import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", createImageEl(galleryItems));
galleryEl.addEventListener("click", selectGalleryEl);

function createImageEl(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<div class = "gallery__item"><a class="gallery__link"><img class = "gallery__image lazyload" src = "${preview}" data-source = "${original}" alt = "${description}" loading = "lazy"></a></div>`
    )
    .join("");
}
function selectGalleryEl(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  //   console.log(evt.target.dataset.source);
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600 loading = "lazy" class = "lazyload" style ="border-radius: 7%">
`,
    {
      closable: true,
      onShow() {
        window.addEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            instance.close();
          }
        });
        document.body.style.overflow = "hidden";
      },
      onClose() {
        window.removeEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            instance.close();
          }
        });
        document.body.style.overflow = "";
      },
    }
  );

  instance.show();
}
