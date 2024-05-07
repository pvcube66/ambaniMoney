let totalMoneyElement = document.getElementById('totalmoney').innerText;
// console.log(totalMoneyElement)

let totalmoney=parseInt(totalMoneyElement.slice(13,totalMoneyElement.length))

let bigmac=parseInt(document.getElementById('bigmac').innerText.split('\n')[1]);
let flipflops=parseInt(document.getElementById('flipflops').innerText.split('\n')[1]);
let cococola=parseInt(document.getElementById('cococola').innerText.split('\n')[1]);
let movieticket=parseInt(document.getElementById('movieticket').innerText.split('\n')[1]);
let book=parseInt(document.getElementById('book').innerText.split('\n')[1]);
let pandya=parseInt(document.getElementById('pandya').innerText.split('\n')[1]);
let amazon=parseInt(document.getElementById('amazon').innerText.split('\n')[1]);

let netflix=parseInt(document.getElementById('netflix').innerText.split('\n')[1]);
let jordan=parseInt(document.getElementById('jordan').innerText.split('\n')[1]);
let airpods=parseInt(document.getElementById('airpods').innerText.split('\n')[1]); 
let gaming=parseInt(document.getElementById('gaming').innerText.split('\n')[1]);
let drone=parseInt(document.getElementById('drone').innerText.split('\n')[1]);
let phone=parseInt(document.getElementById('phone').innerText.split('\n')[1]);
let cycle=parseInt(document.getElementById('cycle').innerText.split('\n')[1]);

let cat=parseInt(document.getElementById('cat').innerText.split('\n')[1]);
let dog=parseInt(document.getElementById('dog').innerText.split('\n')[1]);
let autos =parseInt(document.getElementById('autos').innerText.split('\n')[1]);
let horse=parseInt(document.getElementById('horse').innerText.split('\n')[1]);
let land=parseInt(document.getElementById('land').innerText.split('\n')[1]);
let truck=parseInt(document.getElementById('truck').innerText.split('\n')[1]);
let ferrari=parseInt(document.getElementById('ferrari').innerText.split('\n')[1]);
let yatch=parseInt(document.getElementById('yatch').innerText.split('\n')[1]);

let rcb=parseInt(document.getElementById('rcb').innerText.split('\n')[1]);
let umpire=parseInt(document.getElementById('umpires').innerText.split('\n')[1]);




let boughtItems = {
    bigmac: 0,
    flipflops: 0,
    cococola: 0,
    movieticket: 0,
    book: 0,
    pandya: 0,
    amazon: 0,
    netflix: 0,
    jordan: 0,
    airpods: 0,
    gaming: 0,
    drone: 0,
    phone: 0,
    cycle: 0,
    cat: 0,
    dog: 0,
    autos: 0,
    horse: 0,
    land: 0,
    truck: 0,
    ferrari: 0,
    yatch: 0,
    rcb: 0,
    umpire: 0
};

// Function to buy an item
function buy(item, price) {
    let totalMoneyElement = document.getElementById('totalmoney');
    let totalMoneyText = totalMoneyElement.innerText;
    let startIndex = totalMoneyText.search(/\d/);
    let currentTotal = parseFloat(totalMoneyText.slice(startIndex));

    console.log(currentTotal)
    if (currentTotal >= price) {
        let newTotal = currentTotal - price;
        totalMoneyElement.innerText = newTotal;
       
        boughtItems[item]++;
        console.log(item + " bought. Quantity: " + boughtItems[item]);
    } else {
        alert("Insufficient amount");
    }
}





// function buy(item, defaultQuantity = 1) {
//     // Get the input element for the respective item
//     var input = document.getElementById('quantity-' + item);
//     // Get the quantity entered by the user
//     var quantity = input.value ? parseInt(input.value) : defaultQuantity;
    
//     // Check if the quantity is a valid number
//     if (isNaN(quantity) || quantity <= 0) {
//         alert("Please enter a valid quantity.");
//         return;
//     }

//     // Get the price of the item
//     var price = parseInt(document.getElementById(item).getElementsByTagName('h4')[0].textContent);

//     // Calculate the total cost
//     var totalCost = quantity * price;

//     // Get the total money
//     var totalMoneyElement = document.getElementById('totalmoney');
//     var totalMoney = parseInt(totalMoneyElement.getElementsByTagName('h2')[0].textContent.replace(/[^0-9]/g, ''));

//     // Check if the user has enough money
//     if (totalMoney >= totalCost) {
//         // Update the total money after buying the item
//         totalMoney -= totalCost;
//         totalMoneyElement.getElementsByTagName('h2')[0].textContent = "NET WORTH : ₹" + totalMoney;

//         // Update the quantity of the item
//         var currentQuantity = parseInt(document.getElementById(item).getElementsByTagName('h3')[0].textContent);
//         currentQuantity += quantity;
//         document.getElementById(item).getElementsByTagName('h3')[0].textContent = currentQuantity;
//     } else {
//         alert("You don't have enough money to buy this.");
//     }

//     // Reset the input value
//     input.value = "";
// }


// Function to sell an item
function sell(item, price) {
    let totalMoneyElement = document.getElementById('totalmoney');
    let totalMoneyText = totalMoneyElement.innerText;
    let currentTotal = parseFloat(totalMoneyText);
    
    // Check if there are items to sell
    if (boughtItems[item] > 0) {
        let newTotal = currentTotal + price;
        totalMoneyElement.innerText = newTotal;
        boughtItems[item]--;
        console.log(item + " sold. Quantity left: " + boughtItems[item]);
    } else {
        alert("No more " + item + " to sell");
    }
}

let amount = 7653480000000;
let quantity;

function buy(inputId, price) {
    let quantity = document.getElementById(inputId).value;
    let amount = parseFloat(document.getElementById("H2").textContent.replace("NET WORTH : ₹", ""));
    quantity = Number(quantity);
    amount -= quantity * price;
    document.getElementById("H2").textContent = `NET WORTH : ₹${amount}`;
}



