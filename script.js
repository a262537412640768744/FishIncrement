let head = document.querySelector("div.head")
let body = document.querySelector("div.body")

function display_fish() {
    return `<h1>你有 ${format(fish.fish)} 鱼</h1>
<button class="fish" onmousedown="fish.fish = fish.fish.add(1)">授人以鱼</button>`
}

function update() {
    head.innerHTML = display_fish()
    update_fish(body)
    save()
}

setInterval(update, 20)