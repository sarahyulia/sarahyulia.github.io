const qtyInputs = document.querySelectorAll('.qty');
const totalBayarEl = document.getElementById('total-bayar');

qtyInputs.forEach(input => {
  input.addEventListener('input', updateTotal);
});

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.qty').forEach(input => {
    const price = input.getAttribute('data-price');
    const quantity = input.value;
    const subTotal = price * quantity;
    input.closest('tr').querySelector('.sub-total').textContent = subTotal;
    total += parseInt(subTotal);
  });
  totalBayarEl.textContent = total;
}

document.getElementById('bayar-button').addEventListener('click', (e) => {
  e.preventDefault();
  alert(`Total yang harus dibayar: Rp ${totalBayarEl.textContent}`);
});
