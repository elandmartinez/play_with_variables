let spacing = document.querySelector("#spacing");
let base = document.querySelector("#base");
let blur = document.querySelector("#blur")

spacing.addEventListener("input", () => {
    document.documentElement.style.setProperty("--spacing", spacing.value + "px");
})


base.addEventListener("input", () => {
    document.documentElement.style.setProperty("--base", base.value)
})

blur.addEventListener("input", () => {
    document.documentElement.style.setProperty("--blur", blur.value + "px")
})