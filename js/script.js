var menu = document.querySelector(".fixmenu");
var smenu = document.querySelector(".smenu");
var menuIcon = document.getElementById("menu")
var lis = document.querySelectorAll("li")
var flag = false

function flagmenu () {
    console.log("mk");
    if(flag) {
        menu.style.display = "block"
        menu.style.width = "20%";
        smenu.style.width = "100%";
        lis[0].style.display = "block";
        lis[1].style.display = "block";
        lis[2].style.display = "block";
        lis[3].style.display = "block";
        lis[4].style.display = "block";
        lis[5].style.display = "block";
    }else {
        lis[0].style.display = "none";
        lis[1].style.display = "none";
        lis[2].style.display = "none";
        lis[3].style.display = "none";
        lis[4].style.display = "none";
        lis[5].style.display = "none";
        smenu.style.width = "0";
        menu.style.width = "0";
    }
    flag = !flag
}

menuIcon.addEventListener("click", flagmenu)
