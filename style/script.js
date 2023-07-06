"use strict";
let skillsImg = document.querySelectorAll(".skills .box img");
let skillsArray = [
    "imgs/github.svg",
    "imgs/html.svg",
    "imgs/css.svg","imgs/git.svg",
    "imgs/javascript.svg",
    "imgs/figma.svg"];
skillsImg.forEach((img,index) => {img.setAttribute("src",skillsArray[index]);});

let menuIcon = document.querySelector(".menu-icon");
let sections = document.querySelector(".sections");
menuIcon.onclick = function(e) {
    e.stopPropagation();
    sections.classList.toggle("menu");
    menuIcon.classList.toggle("close");
    let menuFun = function(e){
        let menu = document.querySelector(".menu");
        if(e.target !== menu){
            sections.classList.remove("menu");
            menuIcon.classList.remove("close");
        };
    };
document.addEventListener("click",menuFun);
document.addEventListener("scroll",menuFun);
};
let dark = document.querySelector(".dark-mode");
dark.onclick = () => {dark.classList.toggle("dark");};

async function apiProjects(){
    try {
        const api = await fetch("https://api.github.com/users/yazn-108/repos");
        let data = await api.json()
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
                    description.style.fontSize = "large";
                    description.style.padding = "0px 50px";});
                description.addEventListener("mouseleave",() => {
                    description.textContent = repoName;
                    description.style.fontSize = "x-large";});
            };
        };
        
    } catch (error) {
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
        container.appendChild(errorBox);
    };
};    
apiProjects();