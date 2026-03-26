let lang = "et";
const text = {
  et: {
    nav_about: "Avaleht",
    nav_services: "Teenused",
    nav_gallery: "Galerii",
    nav_contact: "Kontakt",
    about_title: "Rookatused, mis kestavad põlvkondi",
    about_text: "Oleme rookatuste ehituse ja hooldusega tegelenud üle 20 aasta. Tehtud töid võib näha üle Eesti ning ka Rootsis ja Taanis. Lisaks rookatustele pakume hooldusniitu ning ekskavaatori kaeve- ja giljotiinitöid. Meie töö aluseks on kogemus, kvaliteet ja lugupidamine loodusliku materjali vastu.",
    services_title: "Meie teenused",
    gallery_title: "Tehtud tööd",
    gallery_text: "Valik meie teostatud ja hooldatud töödest aastate jooksul.",
    contact_title: "Võta meiega ühendust",
    contact_text: "Kui sul on küsimusi või soovid pakkumist, võta meiega julgelt ühendust."
  },
  en: {
    nav_about: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    about_title: "Reed roofs built to last",
    about_text: "We have over 20 years of experience in building and maintaining reed roofs. Our work can be seen across Estonia, Sweden, and Denmark. In addition, we offer maintenance mowing and excavator services. Our work is based on experience, quality, and respect for natural materials.",
    services_title: "Our Services",
    gallery_title: "Completed Work",
    gallery_text: "A selection of projects we have completed and maintained over the years.",
    contact_title: "Get in Touch",
    contact_text: "If you have any questions or would like a quote, feel free to contact us."
  }
};

const services = [
  { title: { et: "Rookatuste ehitus ja hooldus", en: "Reed roof construction and maintenance" }, desc: { et: "Traditsioonilised ja vastupidavad rookatused.", en: "Traditional and durable reed roofs." }, img: "images/euroopa 010.jpg" },
  { title: { et: "Hooldusniit", en: "Maintenance mowing" }, desc: { et: "Maastikusuutlik ja tõhus roo niitmine.", en: "Professional mowing services on various sites." }, img: "images/kombain.jpg" },
  { title: { et: "Ekskavaatori tööd", en: "Excavator work" }, desc: { et: "Kaeve- ja giljotiinitööd.", en: "Excavation and cutting work." }, img: "images/traktor2.jpg" }
];

const gallery = [
  "images/IMG_20220816_110142.jpg",
  "images/IMG_20220816_093541.jpg",
  "images/euroopa 010.jpg",
  "images/DSC_0063.jpg",
  "images/DSC_0061.jpg",
  "images/DSC_0022.jpg",
  "images/20190622_100738.jpg",
  "images/20180521_080503.jpg"
];

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = text[l][el.dataset.i18n];
  });

  renderServices();
  renderGallery();
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card fade-in";
    card.innerHTML = `
      <img src="${service.img}" alt="${service.title[lang]}">
      <div>
        <h3>${service.title[lang]}</h3>
        <p>${service.desc[lang]}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-img");

  grid.innerHTML = "";

  gallery.forEach(imgSrc => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `<img src="${imgSrc}" alt="Gallery Image">`;
    grid.appendChild(item);

    item.querySelector("img").addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = imgSrc;
    });
  });

  lightbox.querySelector(".close").onclick = () => {
    lightbox.style.display = "none";
  };

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

function scrollAnimation() {
  document.querySelectorAll(".fade-in").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", scrollAnimation);

setLang("et"); // default language
scrollAnimation();

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
