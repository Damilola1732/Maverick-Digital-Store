function increaseInput() {
    var number = document.getElementById('inputNumber');
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number!=0) {
        number++;
        document.getElementById('inputNumber').value = number;
    }
}

function decreaseInput() {
    var number = document.getElementById('inputNumber');
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number > 1) {
        number--;
        document.getElementById('inputNumber').value = number;
    }
    
}


//Second Button

function incrInput() {
    var number = document.getElementById('rollingNumber');
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number!=0) {
        number++;
        document.getElementById('rollingNumber').value = number;
    }
}

function decrInput() {
    var number = document.getElementById('rollingNumber');
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number > 1) {
        number--;
        document.getElementById('rollingNumber').value = number;
    }
    
}

//Third button 
function incInput() {
    var number = document.getElementById('scrollingNumber');
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number!=0) {
        number++;
        document.getElementById('scrollingNumber').value = number;
    }
}

function decInput() {
    var number = document.getElementById('scrollingNumber');
    number = parseInt(number.value, 10);
    number = isNaN(number) ? 0 : number;
    if(number > 1) {
        number--;
        document.getElementById('scrollingNumber').value = number;
    }
    
}