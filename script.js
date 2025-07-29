let head = document.querySelector("div.head")
let body = document.querySelector("div.body")
let sl2 = document.querySelector("div.selects2")

function display_fish() {
    return `<h1>你有 ${format(fish.fish)} 鱼</h1>
<button class="fish" onmousedown="fish.fish = fish.fish.add(1)">授人以鱼</button>`
}

function update() {
    head.innerHTML = display_fish()
    sl2.innerHTML = [
        `<button class="select2" onmousedown="card[1] = 0">鱼生产</button>
<button class="select2" onmousedown="card[1] = 1">鱼升级</button>` + 
        (fish.fish.gte(new E(2).pow(16384)) || fish.fire.gt(0) ? `
<button class="select2" onmousedown="card[1] = 2">火苗</button>` : ""),
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        `<button class="select2" onmousedown="card[1] = 0">关于</button>
<button class="select2" onmousedown="card[1] = 0">保存</button>`
    ][card[0]]
    update_fish(body)
    update_fishupg(body)
    update_fire(body)
    update_about(body)
    save()
}

setInterval(update, 20)