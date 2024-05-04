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
function 功能栏按钮_按钮_搜索() {
    window.location.href = "index2.html";
}
function 功能栏按钮_按钮_搜索2() {
    window.location.href = "index2.html";
}



const 搜索功能_确定 = document.querySelector(".搜索功能_确定")
const input = document.querySelector("#input")
const 搜索结果 = document.querySelector(".搜索结果")
搜索功能_确定.addEventListener('click',()=>{
    let text = ""
    text = input.value
    input.value = ""
    搜索结果.innerHTML = "Nem található!"
})