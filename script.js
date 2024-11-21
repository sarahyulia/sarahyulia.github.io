// JavaScript bisa ditambahkan untuk interaksi lebih lanjut, misalnya, jika Anda ingin
// menambahkan fungsi seperti "add to cart" atau menampilkan alert saat pengguna memilih menu.

// Contoh: Alert ketika klik pada item menu
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    const itemName = this.querySelector('h3').innerText;
    alert(`Anda memilih ${itemName}`);
  });
});
