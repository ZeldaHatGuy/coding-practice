'use strict'
/*
*Small Demo of tip calculator with vanilla javascript.
*This was just for vanilla JS practice.

*/



const submit = document.querySelector(".submit")
const goBack = document.querySelector(".goback")
const tipForm = document.querySelector(".tipForm")
const results = document.querySelector(".results")
const resultContainer = document.querySelector(".results-container")
const thanks = document.querySelector(".thanks")
const cheap = document.querySelector(".cheapskate")
const body = document.querySelector("body")
const resultHead = document.querySelector('.result-head')
    
//*Set default percentages
let percentages = [15, 20, 25]


//* function that calculates the tip value
const calculateTip = (bill, percentage) => {
    const tipDecimal = percentage / 100
    const tip =  tipDecimal * bill 
    return tip.toFixed(2)
}
//* Just returns your bill total
const totalBill = (bill, tip) => {
    const total =  bill + tip
    return total.toFixed(2)
}




//* build HTML table elements dynamically using an array of objects that will have calculations.
//* This way we only have to write out the table headers in HTML and we can add as many tables as we want.
const buildTable = (data) => {
    let table = document.getElementById("table");
    const arr = data
    for( let obj of arr) {
        let row = document.createElement('tr');
        row.setAttribute('class', 'temp')
        for(let val of Object.values(obj)) {
            let col = document.createElement('td')
            row.setAttribute('class', 'temp')
            col.textContent = val
            row.appendChild(col)
        }   table.appendChild(row)
        }
}

//* Submit button event listener
submit.addEventListener('click', () =>{
    /*
    * Have to define these 2 variables inside this event listener.
    * This is because if we define them up top they will get set when the page loads.
    * This will not work because the input boxes are empty on load, thus always making them null.
    */
    const custom = document.querySelector(".custom").value
    let bill = Number(document.getElementById("bill").value)
    if(!bill|| isNaN(bill) ){
            alert("You must enter a valid bill") 
            return
    }  //* if we have a custom value, push that into the percentages array to iterate over later.
    if(custom) {
        percentages.push(custom)
        /*
        *Here we handle the cheapskate or thanks by applying css classes dynamically based on the number
        */
        if (custom  < 15 ) {
            body.classList.add('cheap')
            // cheap.classList.remove('hide')
            resultHead.textContent = "Wow what a cheapskate!"
            
        }else if (custom > 30) {
            body.classList.add('thankyou')
            // thanks.classList.remove('hide')
            resultHead.textContent = "Thank you for your generous tip!"
        

        }
    }  

    let data = []
    //* For each percentage run the numbers and push them to an array that will be passed to the buildTable function
    for ( const item  of percentages) {
        let tip = calculateTip(bill, item)
        data.push({TipPercentage: item + '%', bill: '$' + bill, tip: '$' + tip, TotalBill: '$' + totalBill(Number(bill), Number(tip))})
        }
    buildTable(data)
    tipForm.classList.add("hide")
    resultContainer.classList.remove("hide")


})
    
    
    
//* Just being lazy and basically refreshing the page when we click the "Enter New Tip" button
goBack.addEventListener('click', () => {
    window.parent.location = window.parent.location.href
})
