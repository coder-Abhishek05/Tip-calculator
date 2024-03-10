window.onload = () => {
    document.querySelector('#cal').onclick = calculateTip; // Updated to use the correct button ID
}

function calculateTip() {
    let amt = document.querySelector("#bill_Amount").value;
    let ser = document.querySelector('#services').value;
    let person = document.querySelector('#persons').value;

    if (amt === '' || ser === 'Select' || person <= 0 || isNaN(amt) || isNaN(person) || person < 1) {
        alert("Please enter valid values for all fields and ensure number of people is greater than 0.");
        return;
    }

    let total = (amt * ser) / person;
    total = total.toFixed(2);

    if (person === '1' || person === 1) { // Considering the case of 1 person as a special case
        document.getElementById("Tip_Amount").innerHTML = `The tip amount:<br>${total}`;
    } else {
        document.getElementById("Tip_Amount").innerHTML = `The tip amount (per person):<br>${total}`;
    }
}

