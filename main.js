
let amount = 7653480000000;
let quantity;

function buy(inputId, price) {
    let quantity = document.getElementById(inputId).value;
    let amount = parseFloat(document.getElementById("H2").textContent.replace("NET WORTH : ₹", ""));
    quantity = Number(quantity);
    amount -= quantity * price;
    document.getElementById("H2").textContent = `NET WORTH : ₹${amount}`;
}

function sell(inputId, price){
    let quantity = document.getElementById(inputId).value;
    let amount = parseFloat(document.getElementById("H2").textContent.replace("NET WORTH : ₹", ""));
    quantity = Number(quantity);
    amount += quantity * price;
    document.getElementById("H2").textContent = `NET WORTH : ₹${amount}`;
}


