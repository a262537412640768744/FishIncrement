let game = () => ({fish: fish})

function transformtoE(obj) {
    for (const key in obj) {
        if (typeof obj[key] != "object") {
            continue
        }
        try {
            obj[key] = E(obj[key])
        } catch (err) {
            transformtoE(obj[key])
        }
    }
}

function setattr(obj1, obj2) {
    for (const key in obj2) {
        if (typeof obj1[key] === "object") {
            setattr(obj1[key], obj2[key]);
            continue
        }
        obj1[key] = obj2[key]
    }
}

function load() {
    let game_load = JSON.parse(localStorage.getItem("fishIncrement"))
    if (!game_load) return
    transformtoE(game_load)
    if (game_load.fish) {
        setattr(fish, game_load.fish)
    }
}

load()

function save() {
    localStorage.setItem("fishIncrement", JSON.stringify(game()))
}