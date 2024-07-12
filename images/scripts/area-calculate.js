
function calculateTriangleAre() {
    // const baseField = document.getElementById('triangle-base')
    // const baseValue = baseField.value;
    // //  console.log(typeof baseValue);
    // const base = parseFloat(baseValue);
    // // console.log(typeof base)

    // const hightField = document.getElementById('triangle-hight')
    // const hightValue = hightField.value;
    // const hight = parseFloat(hightValue);
    const base = getInputValue('triangle-base');
    const hight = getInputValue('triangle-hight');

    const area = 3 * base * hight;
    setElementText("triangle-area", area);

    // const totalArea = document.getElementById('triangle-area');
    // totalArea.innerText = area

}

function calculateRectangleAre() {
    // const baseRectangleArea = document.getElementById('rectangle-base');
    // const baseRectangleAreaValue = baseRectangleArea.value;
    // const base = parseFloat(baseRectangleAreaValue);

    // const hightRectangleArea = document.getElementById('rectangle-hight');
    // const hightRectangleAreaValue = hightRectangleArea.value;
    // const hight = hightRectangleAreaValue;

    const base = getInputValue('rectangle-base');
    const hight = getInputValue('rectangle-hight');

    const totalArea = base * hight;


    setElementText('rectangle-area', totalArea)

    // const area = document.getElementById('rectangle-area');
    // area.innerText = totalAreaFixed;

}


function ellipseCalculate() {
    const hight = getInputValue('ellipse-hight');
    const base = getInputValue('ellipse-base');
    const totalArea = hight * base * 2;
    setElementText('ellipse-area',totalArea)
}


function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}

function setElementText(inputId, area) {
    const spanTextId = document.getElementById(inputId)
    spanTextId.innerText = area
}