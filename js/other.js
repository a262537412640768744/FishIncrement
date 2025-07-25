let card = [0, 0]

function display_about() {
    return `<div class="version">v0版本 2025/7/20 添加鱼，氵^n渔 残局：3.40e30</div>
<div class="version">v1版本 2025/7/20 添加鱼升级，选项 残局：</div>`
}

function update_about(body) {
    if (card[0] == 8 && card[1] == 0) {
        body.innerHTML = display_about()
    }
}