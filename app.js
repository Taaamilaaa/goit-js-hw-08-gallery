const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
// ====================================================================================================
const refs = {
  galleryContainerRef: document.querySelector("ul.js-gallery"),
  modalRef: document.querySelector("div.lightbox"),
  modalCloseBtnRef: document.querySelector("button"),
  modalOverlayRef: document.querySelector(".lightbox__overlay"),
  modalContentRefs: document.querySelector(".lightbox__content"),
  bigImgRef: document.querySelector(".lightbox__image"),
};

//создаем разметку галлереи=========================================
function createGalleryMarkup(listOfImages) {
  const galleryMarkup = [];
  let string;
  listOfImages.forEach((item) => {
    const { preview, original, description } = item;
    const markupItem = `    
<li class="gallery__item">
<a
class ="gallery__link"
href=${original}>
<img class="gallery__image"
src= ${preview} data-source=${original}
alt=${description}/>
</a>
</li>`;
    galleryMarkup.push(markupItem);
    string = galleryMarkup.join("");
  });

  return string;
}

const galleryMarkupString = createGalleryMarkup(galleryItems);

refs.galleryContainerRef.insertAdjacentHTML("afterbegin", galleryMarkupString);

//Открытие модального окна================================================

refs.galleryContainerRef.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  refs.modalRef.classList.add("is-open");

  openBigImg(event.target);
}

function openBigImg(ev) {
  const bigImgUrl = ev.getAttribute("data-source");
  const bigImgAlt = ev.alt;
  const bigImg = document.createElement("img");
  bigImg.src = bigImgUrl;
  bigImg.alt = bigImgAlt;
  
  refs.modalContentRefs.insertAdjacentElement("afterbegin", bigImg);
}

// закрытие модального окна========================================

refs.modalCloseBtnRef.addEventListener("click", closeModal);

function closeModal() {
  refs.modalRef.classList.remove("is-open");
  cleaner();
}

function cleaner() {
  refs.modalContentRefs.innerHTML =
    '<img class="lightbox__image" src="" alt="" />';
}

//закрытие по escape======================================================
window.addEventListener("keydown", onEscCloseModal);
function onEscCloseModal(event) {
  if (event.key !== "Escape") {
    return;
  }
  closeModal();
}
//закрытие по overlay=======================================================

refs.modalOverlayRef.addEventListener("click", onOverlayModalClose);

function onOverlayModalClose(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

//========================================================================
window.addEventListener('keyup', flippingImg);

function flippingImg(event) {
  
  if (refs.modalRef.classList.contains('is-open') && event.target.key === 'ArrowRight') {
    console.log(event.key);
    galleryItems.forEach(item => {
      const img = document.createElement('img')
      img.src = item.original;
      img.alt = item.description;
     
    })
     return img;
  }
  }
  

/////////////////////////////////



