"use strict";
const header = document.querySelector(".container nav");
let scrollValue = window.scrollY;
const HeaderTransform = (element) => () => {
  window.scrollY > scrollValue
    ? (element.style.transform = `translateY(-100%)`)
    : (element.style.transform = `translateY(0%)`);
  scrollValue = window.scrollY;
};
window.addEventListener("scroll", HeaderTransform(header));
let sectionLinks = document.querySelectorAll("nav .sections button");
sectionLinks.forEach((section) => {
  section.addEventListener("click", (e) => {
    if (matchMedia("(max-width: 768px)").matches) {
      sectionLinks.forEach((ele) => {
        ele.style.textDecoration = "none";
        e.target.style = `text-decoration: line-through var(--main-color) 2px;`;
      });
    } else {
      sectionLinks.forEach((ele) => {
        ele.style.color = "";
        localStorage.getItem("theme_is") === "dark"
          ? (e.target.style.color = "var(--body-color)")
          : (e.target.style.color = "var(--main-color)");
      });
    }
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let menuIcon = document.querySelector(".menu-icon");
let sections = document.querySelector(".sections");
menuIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  sections.classList.toggle("menu");
  menuIcon.classList.toggle("close");
  let menuFun = function (e) {
    let menu = document.querySelector(".menu");
    if (e.target !== menu) {
      sections.classList.remove("menu");
      menuIcon.classList.remove("close");
    }
  };
  document.addEventListener("click", menuFun);
  document.addEventListener("scroll", menuFun);
});
let skillsBox = document.querySelector(".skills .box");
import { skillsData } from "./skillsSectionData/Data.js";
skillsData.map((info) => {
  const span = document.createElement("span");
  span.style = `--skill-name:'${info.languageName}'; --skill-color:${info.languageColor};`;
  const img = document.createElement("img");
  img.src = info.languageIcon;
  img.alt = info.languageName;
  span.appendChild(img);
  skillsBox.appendChild(span);
});
let colorOfDarkMode = getComputedStyle(
  document.documentElement
).getPropertyValue("--dark-background");
let browserTheme = document.querySelector('meta[name="theme-color"]');
let dark = document.querySelector(".theme-mode");
dark.addEventListener("click", () => {
  sectionLinks.forEach((ele) => (ele.style.color = ""));
  dark.classList.toggle("dark");
  if (dark.classList.contains("dark")) {
    localStorage.setItem("theme_is", "dark");
    browserTheme.setAttribute("content", colorOfDarkMode);
    document.body.style.backgroundColor = colorOfDarkMode;
  } else {
    localStorage.setItem("theme_is", "light");
    browserTheme.setAttribute("content", "");
    document.body.style.backgroundColor = "";
  }
});
if (localStorage.getItem("theme_is") === "dark") {
  dark.classList.add(localStorage.getItem("theme_is"));
  browserTheme.setAttribute("content", colorOfDarkMode);
  document.body.style.backgroundColor = colorOfDarkMode;
}
async function apiProjects() {
  try {
    const api = await fetch("https://api.github.com/users/yazn-108/repos");
    let data = await api.json();
    data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    for (const loop in data) {
      if (
        data[loop].homepage &&
        data[loop].description &&
        data[loop].name !== "yazn-108.github.io"
      ) {
        let container = document.querySelector(".projects .boxes");
        let box = document.createElement("div");
        box.className = "box";
        let repoName = data[loop].name.replaceAll("-", " ");
        let description = document.createElement("div");
        description.className = "description";
        description.textContent = repoName;
        let info = document.createElement("div");
        info.className = "info";
        let repoLink = data[loop].html_url;
        const sourceLink = document.createElement("a");
        sourceLink.href = repoLink;
        sourceLink.setAttribute("target", "_blank");
        const sourceButton = document.createElement("button");
        sourceButton.textContent = "source";
        sourceLink.appendChild(sourceButton);
        let siteLink = data[loop].homepage;
        const browsingLink = document.createElement("a");
        browsingLink.href = siteLink;
        browsingLink.setAttribute("target", "_blank");
        const browseButton = document.createElement("button");
        browseButton.className = "browse-button";
        browseButton.textContent = "browse";
        browsingLink.appendChild(browseButton);
        box.appendChild(description);
        box.appendChild(info);
        info.appendChild(sourceLink);
        info.appendChild(browsingLink);
        container.appendChild(box);
        description.addEventListener("mouseenter", () => {
          description.textContent = data[loop].description;
          description.style.textAlign = "center";
          description.style.fontSize = "large";
          description.style.padding = "0px 50px";
        });
        description.addEventListener("mouseleave", () => {
          description.textContent = repoName;
          description.style.fontSize = "xx-large";
        });
      }
    }
  } catch (error) {
    let container = document.querySelector(".projects");
    container.style.height = "100px";
    container.innerHTML = `
    <div class="errorBox">
        <p>An error occurred calling projects</p>
        <a href="/">
            <button>Reload the page</button>
        </a>
    </div>`;
  }
}
apiProjects();
let moreProjects = document.querySelector(".moreProjects");
moreProjects.addEventListener("click", (e) =>
  e.currentTarget.parentNode.classList.toggle("open")
);
let formTitle = document.querySelector(".contact h3");
let form = document.querySelector(".contact form");
let emailInput = document.querySelector(".contact input[type='email']");
let sendButton = document.querySelector(".contact input[type='submit']");
let inputs = document.querySelectorAll("form .required");
sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  let count = 0;
  inputs.forEach((input) => {
    input.value !== "" ? count++ : (input.placeholder = "fill in the field");
  });
  if (count === 3 && validator.isEmail(emailInput.value)) {
    formTitle.innerHTML = "Sending...";
    const serviceID = "default_service";
    const templateID = "template_5ffcrsw";
    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        formTitle.innerHTML = "contact with me";
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        inputs[0].placeholder = "your name";
        inputs[1].placeholder = "your email";
        inputs[2].placeholder = "your message";
      },
      (err) => {
        formTitle.innerHTML = "an error occurred";
      }
    );
  }
});
emailjs.init("moFv9CUybtNEEmMkC");
let copyright = document.querySelector("footer .copyright .year");
copyright.innerHTML = new Date().getFullYear();
