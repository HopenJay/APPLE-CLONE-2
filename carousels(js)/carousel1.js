const carousel1 = [
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/Balatro_Key-Art.webp",
    imgAlt: "balatro",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (1).jpg",
    imgAlt: "down1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (2).jpg",
    imgAlt: "down2",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (3).jpg",
    imgAlt: "down3",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download.jpg",
    imgAlt: "down",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images (1).jpg",
    imgAlt: "img1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images.jpg",
    imgAlt: "img",
  },
//Double that shit
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/Balatro_Key-Art.webp",
    imgAlt: "balatro",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (1).jpg",
    imgAlt: "down1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (2).jpg",
    imgAlt: "down2",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (3).jpg",
    imgAlt: "down3",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download.jpg",
    imgAlt: "down",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images (1).jpg",
    imgAlt: "img1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images.jpg",
    imgAlt: "img",
  },
];

export function carousel () {
    const carousel1Container = document.querySelector(".carousel1-track");

    carousel1.forEach(item => {
    const div = document.createElement("div");
    div.className = item.class;

    if(item.imgSrc && item.imgAlt) {
        const img = document.createElement("img");
        img.src = item.imgSrc;
        img.alt = item.imgAlt;

        div.appendChild(img);
    }

    carousel1Container.appendChild(div);
    });
}