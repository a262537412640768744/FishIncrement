let fish = {
    fish: new E(0),
    getfish: [new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0)],
    addfish: [new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0), new E(0)]
}

let nfish = n => n ? "氵".repeat(n - 1) + "渔" : "鱼"
let ncost = n => new E(2).pow(new E(4).pow(n - 1).mul(fish.getfish[n - 1].mul(2).add(1)))
let nfish_all = n => fish.getfish[n - 1].add(fish.addfish[n - 1]).mul(new E(2).pow(fish.getfish[n - 1]))

function buy_fish(n) {
    if (fish.fish.gte(ncost(n))) {
        fish.fish = fish.fish.sub(ncost(n))
        fish.getfish[n - 1] = fish.getfish[n - 1].add(1)
    }
}

function display_getfish(n) {
    return `<div class="getfish">
    <span class="getfish">你有 ${format(fish.getfish[n - 1].add(fish.addfish[n - 1]))}
${nfish(n)}，${nfish(n)}乘数 × ${format(new E(2).pow(fish.getfish[n - 1]))}，生产
${format(nfish_all(n))} ${nfish(n - 1)}/秒</span>
    <button class="getfish" onmousedown="buy_fish(${n})">授人以${nfish(n)}，消耗
${format(ncost(n))} 鱼</button>
</div>`
}

function display_fish_all() {
    return `${display_getfish(1)}
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
    fish.fish = fish.fish.add(nfish_all(1).mul(0.02))
    for (let n = 1; n < 8; n++) {
        fish.addfish[n - 1] = fish.addfish[n - 1].add(nfish_all(n + 1).mul(0.02))
    }
    body.innerHTML = display_fish_all()
}