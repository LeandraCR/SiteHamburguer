function getElements() {
    return {
        cardImg:document.querySelector('.cardImg'),
        cartBtn: document.querySelector('.cartBtn')

    }
}

addEventListener("mouseover", () => {
    const elemnets = getElements()
    cardImg.style.border = "1"
    cardImg.style.color = "red"
})