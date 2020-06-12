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

function nextPrevButton(prev, next){
    console.log("nextPrevButton has started");
    
    a = document.getElementById('prev');
    a.setAttribute("href", prev);

    b = document.getElementById('next');
    b.setAttribute("href", next);
}