import { productsData } from "./data.js";

const productGrid = document.getElementById("productGrid");
function renderProducts(category) {
  const products = productsData[category];
  productGrid.innerHTML = products
    .map(
      (product, index) =>
        `<div class="product__grid-item product__grid-item--${index + 1}">
                <div class="product__info">
                  <div class="product__image">
                    <img src="${product.image}"alt="product"/>
                  </div>
                  ${
                    product.labels?.includes("Selling fast")
                      ? `<div class="product__label product__label--fast">Selling fast!</div>`
                      : ""
                  }
                  ${
                    product.labels?.includes("New")
                      ? `<div class="product__label product__label--new">New</div>`
                      : ""
                  }
                  ${
                    product.labels?.includes("-30%")
                      ? `<div class="product__label product__label--discount">New</div>`
                      : ""
                  }
                  <div class="product__category">${product.category}</div>
                  <div class="product__name">${product.name}</div>
                  <div class="product__price">
                    ${
                      product.price
                        ? `<div class="product__price">${product?.price}</div>`
                        : ""
                    }
                    ${
                      product.priceNew
                        ? `<div class="product__price--new">${product?.priceNew}</div>`
                        : ""
                    }
                    ${
                      product.priceOld
                        ? `<div class="product__price--old">${product?.priceOld}</div>`
                        : ""
                    }
                  </div>
                </div>
            </div>
            `
    )
    .join("");
}
const tabs = document.querySelectorAll(".product__tab-item");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.add("product__tab-item--active");
    tabs.forEach((item) => {
      if (item !== tab) {
        item.classList.remove("product__tab-item--active");
      }
    });
    const category = tab.getAttribute("data-tab");
    renderProducts(category);
  });
});
renderProducts("Seating");

// Splide
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 4,
    autoplay: true,
    interval: 3000,
    pagination: false,
    arrows: false,
  }).mount();
  if (window.innerWidth < 479) {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pagination: false,
      arrows: false,
      padding: {
        right: "30%",
      },
    }).mount();
  }
});
// scroll smooth to product section
document.querySelector(".banner__btn").addEventListener("click", () => {
  const productSection = document.querySelector(".product");
  productSection.scrollIntoView({ behavior: "smooth" });
});

// Mobile Info Slide at header
const infoItems = document.querySelectorAll(".header__info-item");
const backBtn = document.querySelector(".header__info-back");
const nextBtn = document.querySelector(".header__info-next");

let currentIndex = 0;

function displayMobile() {
  const isMobile = window.innerWidth < 479;

  infoItems.forEach((item, index) => {
    if (isMobile) {
      item.style.display = index === currentIndex ? "block" : "none";
    } else {
      item.style.display = "block";
    }
  });
}
backBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + infoItems.length) % infoItems.length;
  displayMobile();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % infoItems.length;
  displayMobile();
});
window.addEventListener("resize", displayMobile);

// Horizontal Scroll with Drag
const container = document.querySelector(".inspiration__box");

let isDown = false;
let startX; // the position of the cursor when mousedown is triggered
let scrollLeft; // the amount of scroll from the left of the container to current position

container.addEventListener("mousedown", (e) => {
  // pageX calculated from the left of the document to the cursor
  // offsetLeft calculated from the left of the parent element, in this case, it is inspiration. I am set the width of the inspiration to 100% so it is the same as the document

  // console.log(e.pageX, container, container.offsetLeft, container.scrollLeft);
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  // mouseleave is triggered when the mouse leaves the container
  isDown = false;
});

container.addEventListener("mouseup", () => {
  // mouseup is triggered when the user releases the mouse after mousedown
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  // mousemove is triggered when the user moves the mouse over the container
  if (!isDown) return;
  e.preventDefault(); // prevent the default behavior of the mousemove event
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 3; // the speed of the scroll
  container.scrollLeft = scrollLeft - walk;
});

// Handle form submission
const form = document.querySelector(".footer__info-input");
const formInput = form.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = formInput.value;
  console.log(email);
});
