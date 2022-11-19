const boxesContainer = document.getElementById('boxes')

const getRandomValue = () => {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

const getValueForBoxes = () => {
    const inputValue = document.querySelector('#controls input').value

    return inputValue
}

const createBoxes = (ammount) => {
    destroyBoxes()
    let boxSide = 30
    for (let index = 0; index < ammount; index++) {
        const div = document.createElement('div')
        div.style.width = `${boxSide}px`
        div.style.height = `${boxSide}px`
        div.style.backgroundColor = `rgba(${getRandomValue()},${getRandomValue()},${getRandomValue()})`
        boxesContainer.append(div)
        boxSide = boxSide + 10
    }
}

const destroyBoxes = () => {
    boxesContainer.innerHTML = ''
}