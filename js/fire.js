let fireprod = () => fish.fish.pow(1 / 65536).
    mul(fish.fireupg[1] ? nmult(1).pow(1 / 65536) : 1).
    mul(fish.fireupg[2] ? nmult(2).pow(1 / 65536) : 1).
    mul(fish.fireupg[3] ? nmult(3).pow(1 / 65536) : 1).
    mul(fish.fireupg[4] ? nmult(4).pow(1 / 65536) : 1).
    mul(fish.fireupg[5] ? nmult(5).pow(1 / 65536) : 1).
    mul(fish.fireupg[6] ? nmult(6).pow(1 / 65536) : 1).
    mul(fish.fireupg[7] ? nmult(7).pow(1 / 65536) : 1).
    mul(fish.fireupg[8] ? nmult(8).pow(1 / 65536) : 1).
    mul(fish.fireupg[0] ? new E(2).pow(new E(2).pow(
        fish.fireupg.reduce((pre, n) => pre + +n) + 1)) : E(1))

function buy_fireupg(n) {
    if (fish.fire.gte(new E(2).pow(new E(2).pow(2 + n))) && !fish.fireupg[n - 1]) {
        fish.fireupg[n - 1] = true
    }
}

function display_fireupg(n) {
    return n == 1 ? `<button class="fire${fish.fireupg[n - 1] ? "-buy" : ""}"
        onmousedown="buy_fireupg(${n})">
    火苗升级1
    <div class="br"></div>
    解锁自动购买最大
    <div class="br"></div>
    花费：256.00火苗
</button>` : `<button class="fire${fish.fireupg[n - 1] ? "-buy" : ""}"
        onmousedown="buy_fireupg(${n})">
    火苗升级${n}
    <div class="br"></div>
    ${nfish(n - 1)}乘数提升火苗获取
    <div class="br"></div>
    花费：${format(new E(2).pow(new E(2).pow(2 + n)))}火苗
</button>`
}

function display_fire_all() {
    return `<div class="fire">
    <span class="fire">你有 ${format(fish.fire)} 火苗</span>
    <br>
    <span class="fire">提升所有鱼类资源产量 ×
${format(fish.fire.mul(256).add(1).pow(1 / 8))}</span>
    <br>
    <span class="fire">根据你的鱼，每秒生产 ${format(fireprod())} 火苗</span>
    <br>
    <span class="fire">你的火苗升级提升火苗产量 ×
${format(fish.fireupg[0] ? new E(2).pow(new E(2).pow(
    fish.fireupg.reduce((pre, n) => pre + +n) + 1)) : E(1))}</span>
</div>
<div class="br"></div>
${display_fireupg(1)}
${display_fireupg(2)}
${display_fireupg(3)}
${display_fireupg(4)}
${display_fireupg(5)}
<div class="br"></div>
${display_fireupg(6)}
${display_fireupg(7)}
${display_fireupg(8)}
${display_fireupg(9)}`
}

function update_fire(body) {
    if (fish.fish.gte(new E(2).pow(16384)) || fish.fire.gt(0)) {
        fish.fire = fish.fire.add(fireprod().mul(0.02))
    }
    if (card[0] == 0 && card[1] == 2) {
        body.innerHTML = display_fire_all()
    }
}
