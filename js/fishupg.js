let nupgcost = n => n < 8 ? 
    new E(2).pow(new E(4).pow(n + 1).mul(fish.upgrade[n - 1].add(1))) : 
    new E(2).pow(128)

function buy_fishupg(n) {
    if (fish.fish.gte(nupgcost(n)) && fish.upgrade[n - 1].lt(n == 8 ? 1 : 4)) {
        fish.fish = fish.fish.sub(nupgcost(n))
        fish.upgrade[n - 1] = fish.upgrade[n - 1].add(1)
    }
}

function display_fishupg(n) {
    return n < 8 ? `<div class="fishupg">
    <span class="fishupg">升级 ${n} 等级 ${fish.upgrade[n - 1]} / 4
效果：每级使${nfish(n + 1)}乘数 × 鱼 ^ ${format(new E(4).pow(n + 1))} ^ -1</span>
    <br>
    <button class="fishupg" onmousedown="buy_fishupg(${n})">升级花费
${format(nupgcost(n))} 鱼</button>
</div>` : `<div class="fishupg">
    <span class="fishupg">升级 8 等级 ${fish.upgrade[7]} / 1
效果：解锁购买最大（只需达到，不花费鱼）</span>
    <br>
    <button class="fishupg" onmousedown="buy_fishupg(8)">升级花费
3.403e38 鱼</button>
</div>`
}

function display_fishupg_all() {
    return `${display_fishupg(1)}
<div class="br"></div>
${display_fishupg(2)}
<div class="br"></div>
${display_fishupg(3)}
<div class="br"></div>
${display_fishupg(4)}
<div class="br"></div>
${display_fishupg(5)}
<div class="br"></div>
${display_fishupg(6)}
<div class="br"></div>
${display_fishupg(7)}
<div class="br"></div>
${display_fishupg(8)}`
}

function update_fishupg(body) {
    if (card[0] == 0 && card[1] == 1) {
        body.innerHTML = display_fishupg_all()
    }
}
