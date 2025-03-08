const projects = document.getElementsByClassName("project");

const popup = document.getElementById("popup");
var popupTitle = document.getElementById("popup-title");
var popupSkills = document.getElementById("popup-skills");
var popupDesc = document.getElementById("popup-desc");
var popupImage = document.getElementById("popup-image");
var popupLink = document.getElementById("popup-link");
const popupBtn = document.getElementById("popup-btn");

let allProjectBtns = [];

for (let i = 0; i < projects.length; i++) {
    // Récupérer les boutons de ce projet
    const buttons = projects[i].getElementsByClassName("project-btn");

    // Parcourir chaque bouton
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", () => {
          const description = buttons[j].getAttribute("data-desc");
    
          const formattedDescription = description.replaceAll("$", "<br>");

            popupTitle.innerHTML = projects[i].getElementsByClassName("project-title")[0].innerHTML;
            popupSkills.innerHTML = projects[i].getElementsByClassName("project-skills")[0].innerHTML;
            popupDesc.innerHTML = formattedDescription;
            popupImage.src = projects[i].getElementsByClassName("project-image")[0].src;
            popupLink.href = buttons[j].getAttribute("data-link");
            popupLink.innerHTML = buttons[j].getAttribute("data-link-text");

            if (buttons[j].getAttribute("data-link") == "")
            {
              popupLink.style.display = "none";
            }
            else{
              popupLink.style.display = "inline";
            }
    
            popup.style.display = "flex";
            document.body.classList.add("no-scroll");
        });

        // Optionnel : ajouter le bouton à un tableau si nécessaire
        allProjectBtns.push(buttons[j]);
    }
}

popupBtn.addEventListener("click", () => {
         popup.style.display = "none"; // Masque la pop-up
         document.body.classList.remove("no-scroll"); // Réactive le défilement
});


gsap.registerPlugin(MotionPathPlugin);


const centerX = document.documentElement.clientWidth / 2;
const angle = 190;

const sunWidth = document.getElementById("star").offsetWidth;
const sunHeight = document.getElementById("star").offsetHeight;
const sunTitleWidth = document.getElementById("skills-title").offsetWidth;
const cppTrajectoryHeight = document.getElementById("cpp-trajectory").offsetHeight;
const csTrajectoryHeight = document.getElementById("cs-trajectory").offsetHeight;
const unityTrajectoryHeight = document.getElementById("unity-trajectory").offsetHeight;

const unrealPos = document.getElementById("unreal").getBoundingClientRect().left + window.scrollX;
const cppPos = document.getElementById("cpp").getBoundingClientRect().left + window.scrollX;
const csPos = document.getElementById("cs").getBoundingClientRect().left + window.scrollX;
const unityPos = document.getElementById("unity").getBoundingClientRect().left + window.scrollX;

//#region Trajectory

//Pos & Size of trajectory
document.getElementById("unreal-trajectory").style.width = `${
    document.documentElement.clientWidth - 2 * 
    (document.getElementById("unreal").getBoundingClientRect().width / 2 +
     document.getElementById("unreal").getBoundingClientRect().left)
}px`;

const unrealTrajectoryWidth = document.getElementById("unreal-trajectory").offsetWidth;
gsap.to("#unreal-trajectory", {transformOrigin : "50% 50%", x: centerX - unrealTrajectoryWidth / 2, y: -unrealTrajectoryWidth / 2, duration : 0});


document.getElementById("cpp-trajectory").style.width = `${
    document.documentElement.clientWidth - 2 * 
    (document.getElementById("cpp").getBoundingClientRect().width / 2 +
     document.getElementById("cpp").getBoundingClientRect().left)
}px`;

const cppTrajectoryWidth = document.getElementById("cpp-trajectory").offsetWidth;
gsap.to("#cpp-trajectory", {transformOrigin : "50% 50%", x: centerX - cppTrajectoryWidth / 2, y: -cppTrajectoryWidth / 2, duration : 0});


document.getElementById("cs-trajectory").style.width = `${
    document.documentElement.clientWidth - 2 * 
    (document.getElementById("cs").getBoundingClientRect().width / 2 +
     document.getElementById("cs").getBoundingClientRect().left)
}px`;

const csTrajectoryWidth = document.getElementById("cs-trajectory").offsetWidth;
gsap.to("#cs-trajectory", {transformOrigin : "50% 50%", x: centerX - csTrajectoryWidth / 2, y: -csTrajectoryWidth / 2, duration : 0});

document.getElementById("unity-trajectory").style.width = `${
    document.documentElement.clientWidth - 2 * 
    (document.getElementById("unity").getBoundingClientRect().width / 2 +
     document.getElementById("unity").getBoundingClientRect().left)
}px`;

const unityTrajectoryWidth = document.getElementById("unity-trajectory").offsetWidth;
gsap.to("#unity-trajectory", {transformOrigin : "50% 50%", x: centerX - unityTrajectoryWidth / 2, y: -unityTrajectoryWidth / 2, duration : 0});

//#endregion


//#region Initial Pos
document.getElementsByClassName("solar-system")[0].style.height = `${(document.getElementById("unreal-trajectory").getBoundingClientRect().height / 2) * 1.1 }px`;
gsap.to("#star", {transformOrigin : "50% 50%", x : centerX - sunWidth / 2, duration : 0});

// Initial Pos unreal
gsap.to("#unreal", {rotation : angle - 180, duration : 0, transformOrigin: `${centerX}px 0%`})
gsap.to("#unreal-image", {rotation : 180 - angle, duration : 0})
// Initial Pos C++
gsap.to("#cpp", {rotation : angle - 180, duration : 0, transformOrigin: `${centerX}px 0%`})
gsap.to("#cpp-image", {rotation : 180 - angle, duration : 0})
// Initial Pos C#
gsap.to("#cs", {rotation : angle - 180, duration : 0, transformOrigin: `${centerX}px 0%`})
gsap.to("#cs-image", {rotation : 180 - angle, duration : 0})
// Initial Pos Unity
gsap.to("#unity", {rotation : angle - 180, duration : 0, transformOrigin: `${centerX}px 0%`})
gsap.to("#unity-image", {rotation : 180 - angle, duration : 0})
//#endregion

//#region Orbit
// // // Orbit unreal
gsap.to("#unreal", {rotation : -angle, duration : 20, ease:"linear", transformOrigin: `${centerX - unrealPos}px 0%`, repeat : "-1" })
gsap.to("#unreal-image", {rotation : angle, duration : 20, ease:"linear", repeat : "-1"})
// Orbit C++
gsap.to("#cpp", {rotation : -angle, duration : 22, ease:"linear", transformOrigin: `${centerX - cppPos}px 0%`, repeat : "-1" })
gsap.to("#cpp-image", {rotation : angle, duration : 22, ease:"linear", repeat : "-1"})
// Orbit C#
gsap.to("#cs", {rotation : -angle, duration : 15, ease:"linear", transformOrigin: `${centerX - csPos}px 0%`, repeat : "-1" })
gsap.to("#cs-image", {rotation : angle, duration : 15, ease:"linear", repeat : "-1"})
// Orbit Unity
gsap.to("#unity", {rotation : -angle, duration : 18, ease:"linear", transformOrigin: `${centerX - unityPos}px 0%`, repeat : "-1" })
gsap.to("#unity-image", {rotation : angle, duration : 18, ease:"linear", repeat : "-1"})
//#endregion



function rearrangeGrid() {
    const grid = document.querySelector('.project-container');
    const items = Array.from(grid.children);
    const filteredItems = items.filter(item => !item.classList.contains('bar'));

    if (document.documentElement.clientWidth <= 768) {
      filteredItems.forEach((item) => grid.appendChild(item));

      for (let i = 2; i < filteredItems.length; i += 4) {
        if (i + 1 < filteredItems.length) {
          grid.insertBefore(filteredItems[i + 1], filteredItems[i]);
        }
      }
    }
  }
  
  // Appliquer au chargement et lors du redimensionnement
  rearrangeGrid();

//   async function loadTranslations() {
//     try {
//         const response = await fetch("JSON/translation.json");
//         translations = await response.json(); // Stocker les traductions dans la variable
//         applyLanguage(); // Appliquer la langue actuelle
//     } catch (error) {
//         console.error("Erreur de chargement des traductions : ", error);
//     }
// }

// function applyLanguage() {
//   document.querySelectorAll("[data-i18n]").forEach((element) => {
//       const key = element.getAttribute("data-i18n");
//       element.textContent = translations[currentLang][key];
//   });
// }

// loadTranslations();
// currentLang = "en";
// localStorage.setItem("lang", currentLang);
// applyLanguage();

