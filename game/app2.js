const 开始游戏_button = document.querySelector("#开始游戏_button")

const 游戏界面 = document.querySelector(".游戏界面")
const 开始游戏 = document.querySelector(".开始游戏")
const 热血战斗 = document.querySelector("#热血战斗")
const me_data = document.querySelector(".me_data")
const boss_data = document.querySelector(".boss_data")
const me = document.querySelector(".me")
const boss = document.querySelector(".boss")


开始游戏_button.addEventListener('click',()=>{
    游戏界面.style.display = 'block';
    开始游戏.style.display = 'none';
    me_data.style.display = 'block';
    boss_data.style.display = 'block';
    boss.style.display = 'block';
    me.style.display = 'block';
    热血战斗.value = 0.105;
    热血战斗.play()
})

const 攻击 = document.querySelector(".攻击")


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var HP = 100
var boss_HP = 100


攻击.addEventListener("click",()=>{
    var 失去的血量 = parseFloat(getComputedStyle(boss).height);
    var 血量上限 = parseFloat(getComputedStyle(boss_data).height);
    var decreaseAmount = getRandomInt(10,30); // 改变这个值来调整每次攻击减少的血量
    var 目前血量 = boss_HP - decreaseAmount;
    boss_HP = 目前血量
    目前血量 = 目前血量 / 100
    目前血量 = 1 - 目前血量
    失去的血量 = 血量上限 * 目前血量
    if (失去的血量 < 血量上限) {
        boss.style.height = 失去的血量 + 'px';
    }
    else {
        boss.style.height = 血量上限 + 'px';
    }
})

