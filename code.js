const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const myFacebook = document.querySelector(".facebook");
const myInstagram = document.querySelector(".instagram");
const myTwitter = document.querySelector(".twitter");
const myTiktok = document.querySelector(".tiktok");
const myYoutube = document.querySelector(".youtube");

btnOpen.addEventListener("click",()=>{
    btnOpen.style.zIndex = "-1";
    btnClose.style.zIndex = "0";
    btnOpen.style.transform = "rotate(360deg)";
    btnOpen.style.transition = "1s";
    myFacebook.style.transform = "translateY(-70px)";
    myInstagram.style.transform = "translateY(-140px)";
    myTwitter.style.transform = "translateY(-210px)";
    myTiktok.style.transform = "translateY(-280px)";
    myYoutube.style.transform = "translateY(-350px)";
});
btnClose.addEventListener("click",()=>{
    btnClose.style.zIndex = "-1";
    btnOpen.style.zIndex = "0";
    btnClose.style.transform = "rotate(-360deg)";
    btnClose.style.transition = "1s";
    myFacebook.style.transform = "translateY(0)";
    myInstagram.style.transform = "translateY(0)";
    myTwitter.style.transform = "translateY(0)";
    myTiktok.style.transform = "translateY(0)";
    myYoutube.style.transform = "translateY(0)";
});

