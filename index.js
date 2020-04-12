let sketchGrid = document.querySelector('.sketchGrid');

let changeColour = (e) => {
    e.style['background-color'] = 'black';
}

let makeMark = (e) => {
    console.log(e.target.style['opacity']);
    let newOpacity = Number(e.target.style['opacity']) + .1
    e.target.style['background-color'] = 'black';
    e.target.style['opacity'] = `${newOpacity}`;
}

let usedChecker = false;

let getData = () => {

    let length = -1;
    let width = -1;

    while (length < 0 || width < 0 || (typeof(length) !== 'number') || (typeof(width) !== 'number')) {
        length = prompt('Enter height of the grid.', '');
        width = prompt('Enter width of grid.', '');

        length = Number(length);
        width = Number(width);

        

    }

    sketchGrid.style['grid-template-columns'] = `repeat(${width}, auto)`;
    sketchGrid.style['grid-template-rows'] = `repeat(${length}, auto)`;

    let lengthCounter = 1;
    let widthCounter = 1;

    while (!(length < lengthCounter)) {
        let block = document.createElement('div');
        block.setAttribute('class', "block");
        sketchGrid.appendChild(block);

        block.style['grid-column'] = `${lengthCounter} / span 1`;
        block.style['grid-row'] = `${widthCounter} / span 1`

        lengthCounter++;

        if (lengthCounter > length && widthCounter < width) {
            lengthCounter = 1;
            widthCounter++;
            console.log(widthCounter);
        }

    }
        lengthCounter = 1;
        widthCounter = 1;
        usedChecker = true;

    if (usedChecker === false) {
        const gridBlocks = Array.from(document.querySelectorAll('.block'));
        gridBlocks.forEach(block => block.addEventListener('mouseover', makeMark));
    } else {
        gridBlocks = Array.from(document.querySelectorAll('.block'));
        gridBlocks.forEach(block => block.addEventListener('mouseover', makeMark));
    }


    }






let dataButton = document.querySelector('.dataButton');
dataButton.addEventListener('click', getData);


