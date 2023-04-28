let skills_img = document.querySelectorAll(".skills img");
skills_img[1].setAttribute("src","imgs/github.svg");
skills_img[2].setAttribute("src","imgs/html.svg");
skills_img[3].setAttribute("src","imgs/css.svg");
skills_img[4].setAttribute("src","imgs/git.svg");
skills_img[5].setAttribute("src","imgs/javascript.svg");
skills_img[6].setAttribute("src","imgs/figma.svg");

let projects_img = document.querySelectorAll(".projects .img");
projects_img[0].innerHTML = "CV page";
projects_img[1].innerHTML = "changing";
projects_img[2].innerHTML = "sing in";
projects_img[3].innerHTML = "quran";
projects_img[4].innerHTML = "fonts";
projects_img[5].innerHTML = "fifa app";

let projects_title = document.querySelectorAll(".projects .title");
projects_title[0].innerHTML = "25/4/2023";
projects_title[1].innerHTML = "31/3/2023";
projects_title[2].innerHTML = "13/3/2023";
projects_title[3].innerHTML = "13/2/2023";
projects_title[4].innerHTML = "20/12/2022";
projects_title[5].innerHTML = "1/12/2022";

let projects_description = document.querySelectorAll(".projects .description");
projects_description[0].innerHTML = "CV view web page, I rebuilt the page with a few special touches added";
projects_description[1].innerHTML = "A software challenge that consists of two interfaces, save and delete";
projects_description[2].innerHTML = "A software challenge is a simple login page";
projects_description[3].innerHTML = "A design for a Quran application. I created the design during my learning journey with the figma design tool";
projects_description[4].innerHTML = "A page that brings together a group of Arabic and English fonts, which I think is unique";
projects_description[5].innerHTML = "Football application design for the Qatar World Cup 2022";

let projects_hide = document.querySelectorAll(".projects .hide");
let projects_more = document.querySelectorAll(".projects .more");
for(let i = 0; i < projects_more.length; i++){
projects_more[i].innerHTML = "more";
projects_hide[i].innerHTML = "hide";};

let projects_links = document.querySelectorAll(".projects a");
projects_links[0].setAttribute("href","https://yazn-108.github.io/cv-page/");
projects_links[1].setAttribute("href","https://yazn-108.github.io/changing");
projects_links[2].setAttribute("href","https://yazn-108.github.io/Sign-In-page");
projects_links[3].setAttribute("href","https://yazn-108.github.io/quran");
projects_links[4].setAttribute("href","https://yazn-108.github.io/fonts");
projects_links[5].setAttribute("href","https://yazn-108.github.io/FIFA-APP");