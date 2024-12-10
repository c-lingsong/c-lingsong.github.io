document.getElementById("copyrightText").innerHTML = "Copyright © " + new Date().getFullYear() + " Chen Ling Song. All Rights Reserved.";
document.getElementsByClassName("aboutStatsTitle")[0].innerHTML = new Date().getFullYear() - 2020;

var navIndex;
var navButton = document.getElementsByClassName('navButton');
var slides = document.getElementsByClassName('s');
function navToggle(navIndex){
    document.getElementById("l1").style.display = "none";
    document.getElementById("logoHome").style.opacity = 1;
    document.getElementById("navbarContainer").style.opacity = 1;

    for (x = 0; x < slides.length; x++){
        navButton[x].classList.remove('navButtonActive');
        slides[x].style.opacity = 0;
        slides[x].style.zIndex = 0;
    }
    navButton[navIndex].classList.add('navButtonActive');
    slides[navIndex].style.opacity = 1;
    slides[navIndex].style.zIndex = 3;
}

function homeToggle(){
    document.getElementById("l1").style.display = "inline";
    document.getElementById("logoHome").style.opacity = 0;
    document.getElementById("navbarContainer").style.opacity = 0;
    for (x = 0; x < slides.length; x++){
        slides[x].style.opacity = 0;
        slides[x].style.zIndex = 0;
    }
}

var darkMode = true;
function darkModeToggle(){   
    if (darkMode == true){
        document.getElementsByClassName("darkModeSymbol")[0].src = "pics/iconLightmode.svg";
        document.getElementsByClassName("darkModeSymbol")[1].src = "pics/iconLightmode.svg";
        document.getElementsByClassName("darkModeSetting")[0].src = "pics/iconSettingdark.svg";
        document.getElementsByClassName("darkModeSetting")[1].src = "pics/iconSettingdark.svg";
        document.getElementById("contactFormSendIcon").src = "pics/iconSendDark.svg"
        document.documentElement.style.setProperty('--bgColour', '#FFFFFF');
        document.documentElement.style.setProperty('--textColour', '#04001B');
        document.documentElement.style.setProperty('--symbolColour', '#04001B');
        document.body.style.backgroundImage = "none";
        darkMode = false;
    }
    else if (darkMode == false){
        document.getElementsByClassName("darkModeSymbol")[0].src = "pics/iconDarkmode.svg";
        document.getElementsByClassName("darkModeSymbol")[1].src = "pics/iconDarkmode.svg";
        document.getElementsByClassName("darkModeSetting")[0].src = "pics/iconSettingwhite.svg";
        document.getElementsByClassName("darkModeSetting")[1].src = "pics/iconSettingwhite.svg";
        document.getElementById("contactFormSendIcon").src = "pics/iconSend.svg"
        document.documentElement.style.setProperty('--bgColour', '#04001B');
        document.documentElement.style.setProperty('--textColour', '#FFFFFF');
        document.documentElement.style.setProperty('--symbolColour', '#FFFFFF');
        document.body.style.backgroundImage = "url(pics/background.gif)";
        darkMode = true;
    }
}

var loadRandom;
var loadIndex = 0;
var loadRules;
function loadEvent(){
    const loadInterval = setInterval(function(){
        if (loadIndex < 360){
            loadRandom = Math.floor(Math.random() * 7) + 2;
            loadIndex += loadRandom;
            loadRules = "rotate(" + loadIndex + "deg) translateY(-252px)";
            document.getElementById("loadBall").style.transform = loadRules;
        }
        if (loadIndex >= 360){
            clearInterval(loadInterval);
            document.getElementById("l0").style.opacity = "0";
            document.getElementById("l0").style.display = "none";
            document.getElementById("l1").style.opacity = "1";
        }
    }, 100);
}

var homeNav = document.getElementsByClassName("homeNavBox");
var homeNavText = document.getElementsByClassName("homeNavText");
var homeNavRules;
var homeTextBox = document.getElementsByClassName("homeTextBox");
for (x = 0; x < 5; x++){
    var homeNavAngle = (x + 1) * 60;
    homeNavRules = "rotate(" + homeNavAngle + "deg) translateY(-252px) rotate(-" + (homeNavAngle) + "deg)"
    homeNav[x].style.transform = homeNavRules;
}
for (x = 0; x < 2; x++){
    homeNavText[x].style.left = "40px";
}
for (x = 2; x < 4; x++){
    homeNavText[x].style.right = "40px";
    homeNavText[x].style.direction = "rtl";
}
homeTextBox[0].style.left = "6%";
homeTextBox[1].style.right = "6%";

var expCards = document.getElementsByClassName("expCard");
var expTextBackdrops = document.getElementsByClassName("expTextBackdrop");
var expTextTitles = document.getElementsByClassName("expTextTitle");
var expTextBoxes = document.getElementsByClassName("expTextBox");
var expIndex = 0;
function expCardSlides(){
    var expStep = 0;
    expCards[expIndex].style.transform = "none";
    expCards[expIndex].style.height = "600px";
    expCards[expIndex].style.width = "600px";
    expCards[expIndex].classList.add("expCardHover");

    expTextBackdrops[expIndex].style.height = "260px";
    expTextBackdrops[expIndex].style.width = "520px";
    expTextBackdrops[expIndex].style.bottom = "40px";

    expTextTitles[expIndex].style.opacity = 0;
    expTextBoxes[expIndex].style.opacity = 1;

    for (x = expIndex + 1; x < expCards.length; x++){
        expStep++; 
        expCards[x].style.transform = "translateX(" + (250 * expStep + 400) + "px)";
        expCards[x].style.height = "400px";
        expCards[x].style.width = "200px";
        expCards[x].classList.remove("expCardHover");
        expCards[x].style.opacity = 1;
        
        expTextBackdrops[x].style.height = "200px";
        expTextBackdrops[x].style.width = "200px";
        expTextBackdrops[x].style.bottom = 0;

        expTextTitles[x].style.opacity = 1;
        expTextBoxes[x].style.opacity = 0;
    }
    for (x = expIndex + 2; x < expCards.length; x++){
        expCards[x].style.opacity = 0.5;
    }
    expStep = 0;
    for (x = expIndex - 1; x >= 0; x--){
        expStep++;  
        expCards[x].style.transform = "translateX(" + (-250 * expStep) + "px)";
        expCards[x].style.height = "400px";
        expCards[x].style.width = "200px";
        expCards[x].classList.remove("expCardHover");
        expCards[x].style.opacity = 1; 

        expTextBackdrops[x].style.height = "200px";
        expTextBackdrops[x].style.width = "200px";
        expTextBackdrops[x].style.bottom = 0;

        expTextTitles[x].style.opacity = 1;
        expTextBoxes[x].style.opacity = 0;
    }
    for (x = expIndex - 2; x >= 0; x--){
        expCards[x].style.opacity = 0.5;
    }
}
expCardSlides();

slides[1].addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        if (expIndex - 1 >= 0){
            expIndex--;
        }
        expCardSlides();
    }
    if (e.deltaY > 0) {
        if (expIndex + 1 < expCards.length){
            expIndex++;
        }
        expCardSlides();
    }
});

var expCardPics = ["expWgps.jpg", "expScss.jpg", "expAcjc.jpg", "expNs.jpg", "expNus.jpg"];
for (x = 0; x < expCardPics.length; x++){
    expCards[x].style.backgroundImage = "url(pics/" + expCardPics[x] + ")";
}

var expCardIndex;
function expCardOpen(expCardIndex){
    if (expCardIndex >= 0){
        if (expCardIndex == expIndex){
            document.getElementById("expSubSection").style.zIndex = 6;
            document.getElementById("expSubSection").style.opacity = 1;
            document.getElementById("expBlur").style.opacity = 0.8;
            document.getElementsByClassName("expCardInactive")[0].classList.add("expCardActive");
            document.getElementsByClassName("expCardInactivePic")[0].classList.add("expCardActivePic");
            document.getElementsByClassName("expCardInactivePic")[0].style.backgroundImage = "url(pics/" + expCardPics[expCardIndex] + ")";

            setTimeout(function(){
                document.getElementById("expCardClose").style.opacity = 1;
            }, 500)

            for (x = 0; x < expCardTextBoxes.length; x++){
                expCardTextBoxes[x].style.display = "none";
            }
            expCardTextBoxes[4* expIndex].style.display = "inline";
            for (x = 0; x < expCardButtons.length; x++){
                expCardButtons[x].classList.remove("expCardButtonActive");
            }
            expCardButtons[0].classList.add("expCardButtonActive");
        }
    }
    else{
        setTimeout(function(){
            document.getElementById("expSubSection").style.opacity = 0;
        }, 500);
        setTimeout(function(){
            document.getElementById("expSubSection").style.zIndex = 2;
        }, 700);
        document.getElementsByClassName("expCardInactive")[0].classList.remove("expCardActive");
        document.getElementsByClassName("expCardInactivePic")[0].classList.remove("expCardActivePic");
        document.getElementById("expBlur").style.opacity = 0;
        document.getElementById("expCardClose").style.opacity = 0;
    }
}

var expTextIndex = 0;
var expCardTextBoxes = document.getElementsByClassName("expCardTextBox");
var expCardButtons = document.getElementsByClassName("expCardButton");
function expCardTexts(expTextIndex){
    var expShowIndex = 4 * expIndex + expTextIndex;
    for (x = 0; x < expCardTextBoxes.length; x++){
        expCardTextBoxes[x].style.display = "none";
    }
    expCardTextBoxes[expShowIndex].style.display = "inline";

    for (x = 0; x < expCardButtons.length; x++){
        expCardButtons[x].classList.remove("expCardButtonActive");
    }
    expCardButtons[expTextIndex].classList.add("expCardButtonActive");
}

var projectBalls = document.getElementsByClassName("projectBall");
projectBalls[0].style.transform = "rotate(79.75deg) translateY(-602px) rotate(-79.75deg)";
projectBalls[1].style.transform = "rotate(101.25deg) translateY(-602px) rotate(-101.25deg)";
projectBalls[2].style.transform = "rotate(61deg) translateY(-452px) rotate(-61deg)";
projectBalls[3].style.transform = "rotate(90deg) translateY(-452px) rotate(-90deg)";
projectBalls[4].style.transform = "rotate(119deg) translateY(-452px) rotate(-119deg)";

var projectIndex;
//order: 2nd, 4th, 1st, 3rd, 5th
var projectPics = ["projectPic2.png", "projectPic3.png", "projectPic1.png", "projectPic3.png", "projectPic3.png"];
var projectThumbnails = ["projectThumbnail2.png", "projectThumbnail3.png", "projectThumbnail1.png", "projectThumbnail3.png", "projectThumbnail3.png"];
var projectLinks = ["https://www.tiktok.com/@space.d", "https://www.google.com/", "https://www.instagram.com/keptlermc/", "https://www.google.com/", "https://www.google.com/"]
var projectBalls = document.getElementsByClassName("projectBall");
var projectTexts = document.getElementsByClassName("projectTextBox");
for (x = 0; x < projectBalls.length; x++){
    projectBalls[x].style.backgroundImage = "url(pics/" + projectThumbnails[x] + ")";
}
document.getElementById("projectImg").style.backgroundImage = "url(pics/" + projectPics[2] + ")";
projectBalls[2].classList.add("projectBallActive");
document.getElementById("projectNewTab").setAttribute("href", projectLinks[2])
projectTexts[2].style.display = "inline";

function projectSelect(projectIndex){
    document.getElementById("projectImg").style.backgroundImage = "url(pics/" + projectPics[projectIndex] + ")";
    for (x = 0; x < projectBalls.length; x++){
        projectBalls[x].classList.remove("projectBallActive");
        projectTexts[x].style.display = "none";
    }
    projectBalls[projectIndex].classList.add("projectBallActive");
    document.getElementById("projectNewTab").setAttribute("href", projectLinks[projectIndex]);
    projectTexts[projectIndex].style.display = "inline";
}

var skillBoxes = document.getElementsByClassName("skillBox");
var skillIcons = document.getElementsByClassName("skillIcon");
var skillBoxTitleBoxes = document.getElementsByClassName("skillBoxTitleBox");
var skillBoxSubtitles = document.getElementsByClassName("skillBoxSubtitle");
skillBoxDefault();
var skillIndex;
function skillHover(skillIndex){
    if (skillIndex >= 0){
        if (skillIndex < 4){
            for (x = 0; x < (skillBoxes.length / 2); x++){
                skillBoxInactive(x);
            }
            skillBoxActive(skillIndex);
        }
        else {
            for (x = (skillBoxes.length / 2); x < skillBoxes.length; x++){
                skillBoxInactive(x);
            }
            skillBoxActive(skillIndex);
        }
    }
    else {
        for (x = 0; x < skillBoxes.length; x++){
            skillBoxInactive(x);    
        }
        skillBoxDefault();
    }
}

function skillBoxDefault(){
    skillBoxActive(0);
    skillBoxActive(6);
}
function skillBoxActive(x){
    skillBoxes[x].style.width = "425px";
    skillBoxTitleBoxes[x].style.height = "100px";
    skillIcons[x].style.height = "80px";
    skillIcons[x].style.marginBottom = "0";
}
function skillBoxInactive(x){
    skillBoxes[x].style.width = "200px";
    skillBoxes[x].style.height = "200px";
    skillBoxTitleBoxes[x].style.height = "200px";
    skillIcons[x].style.height = "100px";
    skillIcons[x].style.marginBottom = "50px";
    skillBoxSubtitles[x].style.height = "80px";
    skillBoxes[x].style.cursor = "pointer";
}

function skillSelect(skillIndex){
    if (skillBoxes[skillIndex].style.height == "335px"){
        skillBoxes[skillIndex].style.height = "200px";
        skillBoxSubtitles[skillIndex].style.height = "100px";
        skillBoxes[skillIndex].style.cursor = "pointer";
    }
    else {
        for (x = 0; x < skillBoxes.length; x++){
            skillBoxes[x].style.height = "200px";
            skillBoxSubtitles[x].style.height = "80px";
            skillBoxes[x].style.cursor = "pointer";
        }
        skillBoxes[skillIndex].style.height = "335px";
        skillBoxSubtitles[skillIndex].style.height = "40px";
        skillBoxes[skillIndex].style.cursor = "default"
    }
}

function submitForm(){
    document.getElementById('contactFormName').value = "";
    document.getElementById('contactFormEmail').value = "";
    document.getElementById('contactFormComment').value = "";

    document.getElementById('contactFormSendIcon').classList.add("contactFormAnimate");
    document.getElementById('contactSend').classList.add("contactFormSendActive");
    setTimeout(function(){
        document.getElementById('contactFormSendIcon').classList.remove("contactFormAnimate");
        document.getElementById('contactSend').classList.remove("contactFormSendActive");
    }, 2000);

}