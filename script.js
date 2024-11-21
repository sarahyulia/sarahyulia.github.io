// script.js
let totalAmount = 0;

function addItem() {
    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (item && !isNaN(price) && !isNaN(quantity)) {
        const total = price * quantity;

        const cartTableBody = document.querySelector('#cart tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${item}</td>
            <td>Rp ${price.toFixed(2)}</td>
            <td>${quantity}</td>
            <td>Rp ${total.toFixed(2)}</td>
        `;

        cartTableBody.appendChild(newRow);

        totalAmount += total;
        document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);

        // Clear input fields
        document.getElementById('item').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    } else {
        alert("Silakan masukkan data yang valid!");
    }
}
