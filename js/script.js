"use strict";
const hideOnScroll = document.querySelectorAll(["nav", ".language", ".theme"]);
let scrollValue = window.scrollY;
const HeaderTransform = (elements) => {
  elements.forEach((element) => {
    window.scrollY > scrollValue
      ? element.classList.add("hide")
      : element.classList.remove("hide");
  });
  scrollValue = window.scrollY;
};
window.addEventListener("scroll", () => HeaderTransform(hideOnScroll));
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("showMenu");
  menuIcon.classList.toggle("close");
  const menuFun = function (e) {
    if (e.target !== menu) {
      menu.classList.remove("showMenu");
      menuIcon.classList.remove("close");
    }
  };
  document.addEventListener("click", menuFun);
  document.addEventListener("scroll", menuFun);
});
const sectionLinks = document.querySelectorAll("nav [data-section]");
sectionLinks.forEach((section) => {
  section.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const themeButton = document.querySelector(".theme");
const themeMeta = document.querySelector('[name="theme-color"]');
const body = document.body;
function updateTheme(isDark) {
  body.classList.toggle("dark", isDark);
  themeMeta.setAttribute("content", isDark ? "#1f242d" : "");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") === "dark";
  updateTheme(savedTheme);
});
themeButton.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark");
  updateTheme(isDark);
});
import { translationFile } from "./translation.js";
const languageButton = document.querySelector(".language");
const mainContainer = document.querySelector(".container");
const navOptions = document.querySelector("nav .menu");
const footer = document.querySelector("footer");
let languageType = "en";
const elementsDirection = (value, value2) =>
  languageType === "ar" ? value : value2;
const translation = () => {
  const text = document.querySelectorAll("[data-text]");
  languageButton.querySelector("span").classList.toggle("ar");
  languageType = languageType === "en" ? "ar" : "en";
  sessionStorage.setItem("languageType", languageType);
  document.body.classList.toggle("right-to-left");
  document.body.classList.toggle("left-to-right");
  text.forEach((e) => {
    e.textContent = translationFile[languageType][e.dataset.text];
  });
  mainContainer.dir = elementsDirection("rtl", "ltr");
  navOptions.dir = elementsDirection("rtl", "ltr");
  footer.dir = elementsDirection("rtl", "ltr");
  const footerInputs = footer.querySelectorAll("form .input");
  footerInputs[0].placeholder = elementsDirection("اسمك", "your name");
  footerInputs[1].placeholder = elementsDirection(
    "بريدك الالكتروني",
    "your email"
  );
  footerInputs[2].placeholder = elementsDirection("رسالتك", "your message");
};
languageButton.addEventListener("click", translation);
window.addEventListener("DOMContentLoaded", () => {
  sessionStorage.getItem("languageType") === "ar" && translation();
});
const skillsBox = document.querySelector(".skillsBox");
import { skillsData } from "./skillsSectionData/Data.js";
let allSkills = "";
skillsData.map((info) => {
  allSkills += `
  <div class="skill cursor-pointer flex justify-center items-center flex-col gap-3">
    <div class="overflow-hidden size-[66px] border border-primary bg-[#e8eef4] shadow-[4px_4px_6px_var(--primary-color)] p-[10px] rounded-[10px] grid place-items-center">
        <img width="45" height="45" class="duration-500 skill-image" src="${info.languageIcon}" alt="${info.languageName}">
    </div>
    <p style="background-color:${info.languageColor};" class="text-white w-[85px] text-center rounded-[25px]">${info.languageName}</p>
  </div>
`;
  skillsBox.innerHTML = allSkills;
  ScrollReveal({ reset: false }).reveal(".skill img", {
    duration: 2000,
    delay: 0,
    rotate: { x: 0, y: 0, z: 90 },
    origin: "bottom",
    distance: "50px",
  });
});
const TemporaryAdditionalProject = 1;
const initialProjectsCount =
  window.innerWidth < 768
    ? 2
    : (window.innerWidth >= 768) & (window.innerWidth < 1280)
    ? 4
    : window.innerWidth >= 1280 && 6;
const apiProjects = async ({ getAll }) => {
  const container = document.querySelector(".projectsContainer");
  let projects = "";
  try {
    const api = await fetch(
      getAll
        ? `https://api.github.com/users/yazn-108/repos?sort=created`
        : `https://api.github.com/users/yazn-108/repos?per_page=${
            initialProjectsCount + TemporaryAdditionalProject
          }&sort=created`
    );
    const data = await api.json();
    for (const loop in data) {
      if (
        data[loop].homepage &&
        data[loop].description &&
        data[loop].name !== "yazn-108.github.io"
      ) {
        const hasImage = data[loop].topics.find((topic) => topic === "image");
        projects += hasImage
          ? `
            <div class="project w-full h-[300px] grid grid-cols-1 grid-rows-[1fr_15%]">
                <div class="description-container rounded-t-3xl bg-cover bg-center" style="background-image: url('https://raw.githubusercontent.com/yazn-108/${data[loop].name}/main/siteBanner.png');">
                    <p class="opacity-0 duration-500 description grid place-items-center text-white px-9 size-full rounded-t-3xl backdrop-blur-md backdrop-brightness-75 text-center">
                    ${data[loop].description}
                    </p>
                </div>
                <div class="rounded-b-3xl text-white bg-primary/20 flex items-center justify-between py-4 px-2">
                    <a href="${data[loop].html_url}" target="_blank">
                        <button data-text="source" class="bg-[#1f242d] text-[#e8eef4] px-8 py-1 rounded-xl">source</button>
                    </a>
                    <a href="${data[loop].homepage}" target="_blank">
                        <button data-text="browse" class="bg-[#e8eef4] text-[#1f242d] px-8 py-1 rounded-xl">browse</button>
                    </a>
                </div>
            </div>`
          : `
            <div class="project w-full h-[300px] grid grid-cols-1 grid-rows-[1fr_15%]">
                <div class="description-container rounded-t-3xl bg-cover bg-center relative" style="background-image: url('/imgs/projectsBg.png');">
                  <p class="w-full p-5 rounded-t-3xl flex justify-center items-center text-center absolute text-white">${data[
                    loop
                  ].name.replaceAll("-", " ")}</p>
                  <p class="opacity-0 duration-500 description grid place-items-center text-white px-9 size-full rounded-t-3xl backdrop-blur-md backdrop-brightness-75 text-center">
                    ${data[loop].description}
                  </p>
                </div>
                <div class="rounded-b-3xl text-white bg-primary/20 flex items-center justify-between py-4 px-2">
                    <a href="${data[loop].html_url}" target="_blank">
                        <button data-text="source" class="bg-[#1f242d] text-[#e8eef4] px-8 py-1 rounded-xl">source</button>
                    </a>
                    <a href="${data[loop].homepage}" target="_blank">
                        <button data-text="browse" class="bg-[#e8eef4] text-[#1f242d] px-8 py-1 rounded-xl">browse</button>
                    </a>
                </div>
            </div>`;
        container.innerHTML = projects;
      }
    }
  } catch (error) {
    document.querySelector(".moreProjects").style.display = "none";
    container.style.height = "100px";
    container.innerHTML = `
        <div class="text-primary text-center absolute left-2/4 -translate-x-2/4 top-6">
          <p data-text="An error occurred calling projects">An error occurred calling projects</p>
            <a href="/">
              <button class="bg-primary/20 p-2 rounded-xs text-textColor" data-text="Reload the page">Reload the page</button>
            </a>
        </div>`;
  }
  ScrollReveal({ reset: true }).reveal(".project");
};
window.addEventListener("DOMContentLoaded", () =>
  apiProjects({ getAll: false })
);
let AllProjectsDisplayed = false;
const moreProjectsButtons = document.querySelectorAll(".moreProjects");
const projectsSection = document.querySelector("#projects");
moreProjectsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    !AllProjectsDisplayed && apiProjects({ getAll: true });
    AllProjectsDisplayed = true;
    projectsSection.classList.toggle("open");
  });
});
const form = document.querySelector("form");
const inputs = document.querySelectorAll("form .input");
const sendButton = document.querySelector("form button");
const regex = new RegExp(
  "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
);
const serviceID = "default_service";
const templateID = "template_5ffcrsw";
sendButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const showToast = (icon, title) => {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({ icon, title });
  };
  if (
    [...inputs].every((input) => input.value.trim() !== "") &&
    regex.test(inputs[1].value)
  ) {
    showToast("info", elementsDirection("....جار الارسال", "sending...."));
    try {
      await emailjs.sendForm(serviceID, templateID, form);
      inputs.forEach((input) => (input.value = ""));
      showToast(
        "success",
        elementsDirection("تم الارسال بنجاح", "sent successfully")
      );
    } catch (error) {
      showToast("error", error);
    }
  } else {
    const emptyField = [...inputs].find((input) => input.value.trim() === "");
    if (inputs[1].value !== "" && !regex.test(inputs[1].value)) {
      inputs[1].focus();
      showToast(
        "warning",
        elementsDirection("ادخل بريد الكتروني صحيح", "Enter A Valid Email")
      );
      return;
    }
    [...inputs].forEach((input) => {
      input === emptyField && emptyField.focus();
    });
    showToast(
      "warning",
      elementsDirection("املأ هذا الحقل", "Fill In This Field")
    );
  }
});
emailjs.init("moFv9CUybtNEEmMkC");
ScrollReveal({ reset: true }).reveal("footer .icons a:nth-child(1)", {
  duration: 1000,
  delay: 0,
});
ScrollReveal({ reset: true }).reveal("footer .icons a:nth-child(2)", {
  duration: 1000,
  delay: 100,
});
ScrollReveal({ reset: true }).reveal("footer .icons a:nth-child(3)", {
  duration: 1000,
  delay: 200,
});
ScrollReveal({ reset: true }).reveal("footer .icons a:nth-child(4)", {
  duration: 1000,
  delay: 300,
});
ScrollReveal({ reset: true }).reveal("footer .icons a:nth-child(5)", {
  duration: 1000,
  delay: 400,
});
ScrollReveal({ reset: true }).reveal("footer .icons a:nth-child(6)", {
  duration: 1000,
  delay: 500,
});
const copyright = document.querySelector("footer .copyright .year");
copyright.textContent = new Date().getFullYear();
