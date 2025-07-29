let card = [0, 0]

function display_about() {
    return `<div class="version">v0版本 2025/7/20 添加鱼，氵^n渔 残局：7.923e28鱼</div>
<div class="version">v1版本 2025/7/25 添加鱼升级，选项卡 残局：1e4932鱼</div>
<div class="version">v2版本 2025/7/29 添加火苗 残局：6e315652鱼</div>`
}

function update_about(body) {
    if (card[0] == 8 && card[1] == 0) {
        body.innerHTML = display_about()
    }
}