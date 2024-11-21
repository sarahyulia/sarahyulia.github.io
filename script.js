// JavaScript untuk menambahkan interaktivitas
document.querySelectorAll('table tr').forEach(row => {
  row.addEventListener('click', function() {
    const itemName = this.cells[0]?.textContent || ''; // Ambil nama makanan/minuman
    if (itemName) {
      alert(`Anda memilih ${itemName}`);
    }
  });
});
