const 开始游戏_button = document.querySelector("#开始游戏_button")

const 游戏界面 = document.querySelector(".游戏界面")
const 开始游戏 = document.querySelector(".开始游戏")
const 热血战斗 = document.querySelector("#热血战斗")
const me_data = document.querySelector(".me_data")
const boss_data = document.querySelector(".boss_data")
const me = document.querySelector(".me")
const boss = document.querySelector(".boss")
const 攻击1 = document.querySelector("#攻击1")
const 攻击2 = document.querySelector("#攻击2")

开始游戏_button.addEventListener('click',()=>{
    游戏界面.style.display = 'block';
    开始游戏.style.display = 'none';
    me_data.style.display = 'block';
    boss_data.style.display = 'block';
    boss.style.display = 'block';
    me.style.display = 'block';
    热血战斗.value = 0.105;
    热血战斗.play()
    回血()
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
    cd()
    var 失去的血量 = parseFloat(getComputedStyle(boss).height);
    var 血量上限 = parseFloat(getComputedStyle(boss_data).height);
    var decreaseAmount = getRandomInt(5,15); // 改变这个值来调整每次攻击减少的血量
    var 目前血量 = boss_HP - decreaseAmount;
    boss_HP = 目前血量
    目前血量 = 目前血量 / 100
    目前血量 = 1 - 目前血量
    失去的血量 = 血量上限 * 目前血量
    if (失去的血量 < 血量上限) {
        攻击音效()
        setTimeout(()=>{boss.style.height = 失去的血量 + 'px'},300)
        攻击动画()
        setTimeout(()=>{敌人行动()},1500)
    }
    else {
        攻击音效()
        setTimeout(()=>{boss.style.height = 血量上限 + 'px'},300)
        攻击动画()
        胜利()
    }
})


function cd() {
    const 游戏界面_功能栏 = document.querySelector(".游戏界面_功能栏")
    游戏界面_功能栏.style.display = "none"
    setTimeout(()=>{游戏界面_功能栏.style.display = "flex"},3400)
}

function cd2() {
    const 游戏界面_功能栏 = document.querySelector(".游戏界面_功能栏")
    游戏界面_功能栏.style.display = "none"
    setTimeout(()=>{游戏界面_功能栏.style.display = "flex"},2000)
}


function 胜利() {
    const 胜利 = document.querySelector(".胜利")
    胜利.style.display = "block"
    热血战斗.pause()
}

function 敌人行动() {
    var 失去的血量 = parseFloat(getComputedStyle(me).height);
    var 血量上限 = parseFloat(getComputedStyle(me_data).height);
    var decreaseAmount = getRandomInt(5,15); // 改变这个值来调整每次攻击减少的血量
    var 目前血量 = HP - decreaseAmount;
    HP = 目前血量
    目前血量 = 目前血量 / 100
    目前血量 = 1 - 目前血量
    失去的血量 = 血量上限 * 目前血量
    if (失去的血量 < 血量上限) {
        攻击音效()
        me.style.height = 失去的血量 + 'px';
    }
    else {
        攻击音效()
        me.style.height = 血量上限 + 'px';
        胜利()
    }
}


function 攻击音效() {
    let abc = 0
    abc = getRandomInt(1,2)
    if (abc == 1) {
        攻击1.play()
    }
    else if (abc == 2) {
        攻击2.play()
    }
}


function 攻击动画() {
    const 我 = document.querySelector(".我")
    const 战斗动画1 = document.querySelector(".战斗动画1")
    const 战斗动画2 = document.querySelector(".战斗动画2")
    const 战斗动画3 = document.querySelector(".战斗动画3")
    我.style.display = "none"
    setTimeout(()=>{战斗动画1.style.display = "block"},200)
    setTimeout(()=>{战斗动画1.style.display = "none"},2000)
    setTimeout(()=>{战斗动画2.style.display = "block"},200)
    setTimeout(()=>{战斗动画2.style.display = "none"},1000)
    setTimeout(()=>{战斗动画3.style.display = "block"},1500)
    setTimeout(()=>{战斗动画3.style.display = "none"},1900)
    setTimeout(()=>{我.style.display = "block"},2200)
}

function 攻击动画2() {
    const 我 = document.querySelector(".我")
    const 战斗动画1 = document.querySelector(".战斗动画1")
    const 战斗动画2 = document.querySelector(".战斗动画2")
    const 战斗动画3 = document.querySelector(".战斗动画3")
    setTimeout(()=>{战斗动画1.style.display = "block"},200)
    setTimeout(()=>{战斗动画1.style.display = "none"},2000)
    setTimeout(()=>{战斗动画3.style.display = "block"},500)
    setTimeout(()=>{战斗动画3.style.display = "none"},1500)
}


function 回血() {
    var 回血num = 3
    const 回血 = document.querySelector(".回血")
    回血.innerHTML = 回血num
}

var 回血num = 3

function 回血2() {
    if (回血num > 0) {
        cd2()
        const 回血 = document.querySelector(".回血")
        回血num = 回血num -1
        回血.innerHTML = 回血num
        me.style.height = 0 + 'px';
        HP = 100
        攻击动画2()
        setTimeout(()=>{敌人行动()},500)
    }
}