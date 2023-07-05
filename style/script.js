"use strict";
let skills_img = document.querySelectorAll(".skills img");
skills_img[1].setAttribute("src","imgs/github.svg");
skills_img[2].setAttribute("src","imgs/html.svg");
skills_img[3].setAttribute("src","imgs/css.svg");
skills_img[4].setAttribute("src","imgs/git.svg");
skills_img[5].setAttribute("src","imgs/javascript.svg");
skills_img[6].setAttribute("src","imgs/figma.svg");

let menu_icon = document.querySelector(".menu-icon");
let sections = document.querySelector(".sections");
menu_icon.onclick = function(e) {
    e.stopPropagation();
    sections.classList.toggle("menu");
    menu_icon.classList.toggle("close");
    let menuFun = function(e){
        let menu = document.querySelector(".menu");
        if(e.target !== menu){
            sections.classList.remove("menu");
            menu_icon.classList.remove("close");
        };
    };
document.addEventListener("click",menuFun);
document.addEventListener("scroll",menuFun);
};
let dark = document.querySelector(".dark-mode");
dark.onclick = () => {dark.classList.toggle("dark");};

fetch("https://api.github.com/users/yazn-108/repos").then(response => response.json())
    .then(data => {
    data.sort((a, b) => {return new Date(b.created_at) - new Date(a.created_at);});
        for(const loop in data){
            if(data[loop].has_pages === true && data[loop].description) {
                let container = document.querySelector(".projects .boxes");
                let box = document.createElement("div");
                box.className = "box";
                let repoName = data[loop].name.replace(/[^a-zA-Z0-9\s]/g, " ").toLowerCase();
                let description = document.createElement("div");
                description.className = "description";
                description.textContent = repoName;
                let info = document.createElement("div");
                info.className = "info";
                let repoLink = data[loop].html_url;
                const sourceLink = document.createElement("a");
                sourceLink.setAttribute("href",repoLink);
                sourceLink.setAttribute("target","_blank");
                const sourceButton = document.createElement("button");
                sourceButton.textContent = "source";
                sourceLink.appendChild(sourceButton);
                let siteLink = data[loop].homepage;
                const browsingLink = document.createElement("a");
                browsingLink.setAttribute("href",siteLink);
                browsingLink.setAttribute("target","_blank");
                const browseButton = document.createElement("button");
                browseButton.className = "browse-button";
                browseButton.textContent = "browse";
                browsingLink.appendChild(browseButton);
                box.appendChild(description);
                box.appendChild(info);
                info.appendChild(sourceLink);
                info.appendChild(browsingLink);
                container.appendChild(box);
                description.addEventListener("mouseover",() => {
                    description.textContent = data[loop].description;
                    description.style.textAlign = "center";
                    description.style.fontSize = "x-large";
                    description.style.padding = "0px 50px";});
                description.addEventListener("mouseleave",() => {
                    description.textContent = repoName;
                    description.style.fontSize = "xx-large";});
            };
        };
    }).catch(() =>{
        let container = document.querySelector(".projects");
        const errorBox = document.createElement("div");
        errorBox.className = "errorBox";
        let errorMessage = document.createElement("p");
        errorMessage.textContent = `An error occurred calling projects`;
        errorBox.appendChild(errorMessage);
        let reloadPage = document.createElement("a");
        reloadPage.setAttribute("href","");
        errorBox.appendChild(reloadPage);
        let reloadButton = document.createElement("button");
        reloadButton.textContent = "Reload the page";
        reloadPage.appendChild(reloadButton);
        container.appendChild(errorBox);});






