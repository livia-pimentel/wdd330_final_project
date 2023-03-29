const imgs = document.querySelector("#img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function bannerRotation() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(bannerRotation, 5000);
