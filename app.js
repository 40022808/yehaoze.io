/*
    yehaoze
    2024.05.03.
    I-2-N
*/

document.querySelector("#功能栏按钮_按钮_主页").onclick = function () {
    window.location.href = "index.html";
};


document.querySelector("#功能栏按钮_按钮_搜索").onclick = function () {
    window.location.href = "index2.html";
};



const 搜索功能_确定 = document.querySelector(".搜索功能_确定")
const input = document.querySelector("#input")

搜索功能_确定.addEventListener('click',()=>{
    let text = ""
    text = input.value
    input.value = ""
    
})