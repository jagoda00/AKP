const stickySections = [...document.querySelectorAll(".sticky")];
let images = [
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f31777c6863c6c82cdae.webp",
  "https://dr.savee-cdn.com/things/6/5/76f32ae30574223847fdea.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f337dc877a523ad974ea.webp",
  "https://dr.savee-cdn.com/things/6/5/76f3265cae1334c0da38ef.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f30977c6863c6c82cc5d.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f340e30574223847ffcd.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f321dc877a523ad96b21.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f330e30574223847fe76.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f11177c6863c6c828bbd.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f31c70aa453d9026d213.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f32b5cae1334c0da3961.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/76f33de30574223847ffa2.webp",
];

images.forEach((img) => {
  stickySections.forEach((section) => {
    let image = document.createElement("img");
    image.src = img;
    section.querySelector(".scroll-section").appendChild(image);
  });
});

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll-section");
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 310 ? 310 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}
