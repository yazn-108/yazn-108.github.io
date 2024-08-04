"use strict";
const header = document.querySelector("nav");
let scrollValue = window.scrollY;
const HeaderTransform = (element) => () => {
  window.scrollY > scrollValue
    ? (element.style.transform = `translateY(-100%)`)
    : (element.style.transform = `translateY(0%)`);
  scrollValue = window.scrollY;
};
window.addEventListener("scroll", HeaderTransform(header));
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
const theme = document.querySelector(".theme");
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document
    .querySelector('[name="theme-color"]')
    .setAttribute(
      "content",
      document.body.classList.contains("dark") ? "#1f242d" : ""
    );
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : ""
  );
});
import { translationFile } from "./translation.js";
const languageButton = document.querySelector(".language");
const mainContainer = document.querySelector(".container");
const navOptions = document.querySelector("nav .menu");
const footer = document.querySelector("footer");
let languageType = "en";
const elementsDirection = (value, value2) =>
  languageType === "ar" ? value : value2;
const translation = async () => {
  try {
    const text = document.querySelectorAll("[data-text]");
    languageButton.querySelector("span").classList.toggle("ar");
    languageType = languageType === "en" ? "ar" : "en";
    sessionStorage.setItem("languageType", languageType);
    text.forEach((e) => {
      e.innerHTML = translationFile[languageType][e.dataset.text];
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
  } catch (error) {
    console.log(error);
  }
};
languageButton.addEventListener("click", translation);
window.addEventListener("DOMContentLoaded", () => {
  const themeType = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", themeType);
  document
    .querySelector('[name="theme-color"]')
    .setAttribute("content", themeType ? "#1f242d" : "");
  sessionStorage.getItem("languageType") === "ar" && translation();
});
const skillsBox = document.querySelector(".skillsBox");
import { skillsData } from "./skillsSectionData/Data.js";
let allSkills = "";
skillsData.map((info) => {
  allSkills += `
  <div class="flex justify-center items-center flex-col gap-3">
    <div class="border border-primary bg-[#e8eef4] shadow-[4px_4px_6px_var(--primary-color)] p-[10px] rounded-[10px] grid place-items-center">
        <img width="45" height="45" class="duration-500 hover:scale-[1.2]" src="${info.languageIcon}" alt="">
    </div>
    <p style="background-color:${info.languageColor};" class="text-white px-[10px] rounded-[25px]">${info.languageName}</p>
  </div>
`;
  skillsBox.innerHTML = allSkills;
});
async function apiProjects() {
  let projects = "";
  const container = document.querySelector(".projectsContainer");
  try {
    const api = await fetch("https://api.github.com/users/yazn-108/repos");
    const data = await api.json();
    data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    for (const loop in data) {
      if (
        data[loop].homepage &&
        data[loop].description &&
        data[loop].name !== "yazn-108.github.io"
      ) {
        const hasImage = data[loop].topics.find((topic) => topic === "image");
        projects += hasImage
          ? `
            <div class="font-Alkatra w-full h-[300px] grid grid-cols-1 grid-rows-[1fr_15%]">
                <div class="group rounded-t-3xl bg-cover bg-center" style="background-image: url(https://raw.githubusercontent.com/yazn-108/${data[loop].name}/main/siteBanner.png);">
                    <p class="opacity-0 duration-500 group-hover:opacity-100 grid place-items-center text-white px-9 h-full w-full rounded-t-3xl backdrop-blur-md backdrop-brightness-75 text-center">
                    ${data[loop].description}
                    </p>
                </div>
                <div class="rounded-b-3xl text-white bg-[#03b7f9]/20 flex items-center justify-between py-4 px-2">
                    <a href="${data[loop].html_url}" target="_blank">
                        <button class="bg-[#1f242d] text-[#e8eef4] px-8 py-1 rounded-xl">source</button>
                    </a>
                    <a href="${data[loop].homepage}" target="_blank">
                        <button class="bg-[#e8eef4] text-[#1f242d] px-8 py-1 rounded-xl">browse</button>
                    </a>
                </div>
            </div>`
          : `
            <div class="font-Alkatra w-full h-[300px] grid grid-cols-1 grid-rows-[1fr_15%]">
                <div class="group rounded-t-3xl bg-cover bg-center relative" style="background-image: url('/imgs/projectsBg.png');">
                  <p class="w-full p-5 rounded-t-3xl flex justify-center items-center text-center absolute text-white">${data[
                    loop
                  ].name.replaceAll("-", " ")}</p>
                  <p class="opacity-0 duration-500 group-hover:opacity-100 grid place-items-center text-white px-9 h-full w-full rounded-t-3xl backdrop-blur-md backdrop-brightness-75 text-center">
                    ${data[loop].description}
                  </p>
                </div>
                <div class="rounded-b-3xl text-white bg-[#03b7f9]/20 flex items-center justify-between py-4 px-2">
                    <a href="${data[loop].html_url}" target="_blank">
                        <button class="bg-[#1f242d] text-[#e8eef4] px-8 py-1 rounded-xl">source</button>
                    </a>
                    <a href="${data[loop].homepage}" target="_blank">
                        <button class="bg-[#e8eef4] text-[#1f242d] px-8 py-1 rounded-xl">browse</button>
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
              <button class="bg-[#03b7f9]/20 p-2 rounded-sm text-textColor" data-text="Reload the page">Reload the page</button>
            </a>
        </div>`;
  }
}
apiProjects();
const moreProjects = document.querySelector(".moreProjects");
const projectsContainer = document.querySelector(".projectsContainer");
moreProjects.addEventListener("click", (e) => {
  projectsContainer.classList.toggle("open");
  e.currentTarget.innerHTML = projectsContainer.classList.contains("open")
    ? elementsDirection("اخفاء المشاريع", "hide projects")
    : elementsDirection("المزيد من المشاريع", "more projects");
});
const form = document.querySelector("form");
const inputs = document.querySelectorAll("form .input");
const sendButton = document.querySelector("form button");
const regex = new RegExp(
  "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
);
sendButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const serviceID = "default_service";
  const templateID = "template_5ffcrsw";
  if (
    [...inputs].every((input) => input.value.trim() !== "") &&
    regex.test(inputs[1].value)
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "info",
      title: elementsDirection("....جار الارسال", "sending...."),
    });
    try {
      await emailjs.sendForm(serviceID, templateID, form);
      inputs.forEach((input) => (input.value = ""));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: elementsDirection("تم الارسال بنجاح", "sent successfully"),
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  } else {
    const emptyField = [...inputs].find((input) => input.value.trim() === "");
    [...inputs].forEach((input) => input === emptyField && emptyField.focus());
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "warning",
      title: elementsDirection("املأ هذا الحقل", "Fill in this field"),
    });
  }
});
emailjs.init("moFv9CUybtNEEmMkC");
const copyright = document.querySelector("footer .copyright .year");
copyright.innerHTML = new Date().getFullYear();
