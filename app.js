/*
    yehaoze
    2024.05.03.
    I-2-N
*/

function 功能栏按钮_按钮_主页() {
    window.location.href = "index.html";
}
function 功能栏按钮_按钮_主页2() {
    window.location.href = "index.html";
}
function 功能栏按钮_按钮_主页3() {
    window.location.href = "../index.html";
}
function 功能栏按钮_按钮_搜索() {
    window.location.href = "index2.html";
}
function 功能栏按钮_按钮_搜索2() {
    window.location.href = "index2.html";
}
function 功能栏按钮_按钮_搜索3() {
    window.location.href = "../index2.html";
}



const input = document.querySelector("#input")
const 搜索结果 = document.querySelector(".搜索结果")

function 搜索功能_确定() {
    let text = ""
    text = input.value
    input.value = ""
    搜索结果.innerHTML = "Nem található!"
}



function play() {
    window.location.href = "game/game.html"
}


