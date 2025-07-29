let fish = {
    fish: new E(0),
    getfish: [new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0)],
    addfish: [new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0)],
    auto: [false, false, false, false, false, false, false, false],
    upgrade: [new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0)],
    fire: new E(0),
    fireupg: [false, false, false, false, false, false, false, false, false]
}

let nfish = n => n ? "氵".repeat(n - 1) + "渔" : "鱼"
let ncost = n => new E(2).pow(new E(4).pow(n - 1).mul(fish.getfish[n - 1].mul(2).add(1)))
let nmult = n => new E(2).pow(fish.getfish[n - 1]).
    mul(fish.fish.pow((n - 1) ? fish.upgrade[n - 2].div(new E(4).pow(n)) : 0)).
    mul(fish.fire.mul(256).add(1).pow(1 / 8))
let nfishget = n => fish.getfish[n - 1].add(fish.addfish[n - 1]).mul(nmult(n))

function buy_fish(n) {
    if (fish.fish.gte(ncost(n))) {
        fish.fish = fish.fish.sub(ncost(n))
        fish.getfish[n - 1] = fish.getfish[n - 1].add(1)
    }
}

function buymax_fish(n) {
    if (fish.fish.gte(ncost(n))) {
        fish.getfish[n - 1] = fish.fish.log().div(Math.LN2).
            div(new E(4).pow(n - 1)).sub(1).div(2).ceil()
    }
}

function buymax_fish_all() {
    buymax_fish(1)
    buymax_fish(2)
    buymax_fish(3)
    buymax_fish(4)
    buymax_fish(5)
    buymax_fish(6)
    buymax_fish(7)
    buymax_fish(8)
}

function display_maxfish(n) {
    return fish.upgrade[7].eq(1) ? 
        `<button class="getfish" onmousedown="buymax_fish(${n})">购买最大</button>` : ""
}

function display_maxfish_auto(n) {
    return fish.fireupg[0] ? `
<button class="getfish" onmousedown="fish.auto[${n - 1}] = !fish.auto[${n - 1}]"
    >自动：${fish.auto[n - 1] ? "是" : "否"}</button>` : ""
}

function display_maxfish_all() {
    return fish.upgrade[7].eq(1) ? 
        `<button class="getfish" onmousedown="buymax_fish_all()">全部购买最大</button>` : ""
}

function display_getfish(n) {
    return `<div class="getfish">
    <span class="getfish">你有 ${format(fish.getfish[n - 1].add(fish.addfish[n - 1]))}
${nfish(n)}，${nfish(n)}乘数 × ${format(nmult(n))}，生产
${format(nfishget(n))} ${nfish(n - 1)}/秒</span>
    <button class="getfish" onmousedown="buy_fish(${n})">授人以${nfish(n)}，消耗
${format(ncost(n))} 鱼</button>
    ${display_maxfish(n)}
    ${display_maxfish_auto(n)}
</div>`
}

function display_fish_all() {
    return `${display_maxfish_all()}
<div class="br"></div>
${display_getfish(1)}
<div class="br"></div>
${display_getfish(2)}
<div class="br"></div>
${display_getfish(3)}
<div class="br"></div>
${display_getfish(4)}
<div class="br"></div>
${display_getfish(5)}
<div class="br"></div>
${display_getfish(6)}
<div class="br"></div>
${display_getfish(7)}
<div class="br"></div>
${display_getfish(8)}`
}

function update_fish(body) {
    fish.fish = fish.fish.add(nfishget(1).mul(0.02))
    for (let n = 1; n < 8; n++) {
        fish.addfish[n - 1] = fish.addfish[n - 1].add(nfishget(n + 1).mul(0.02))
    }
    for (let n = 1; n <= 8; n++) {
        if (fish.auto[n - 1]) {
            buymax_fish(n)
        }
    }
    if (card[0] == 0 && card[1] == 0) {
        body.innerHTML = display_fish_all()
    }
}