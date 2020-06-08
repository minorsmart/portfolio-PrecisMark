console.log("load javascriptFunction.js");

function showAndHideElement(idImg, idCode, idButton) {
console.log("Start showAndHideElement()");
    var x = document.getElementById(idImg);
    var y = document.getElementById(idCode);
    var z = document.getElementById(idButton);
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.innerHTML = 'Code';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
        z.innerHTML = 'Foto';
    }
}