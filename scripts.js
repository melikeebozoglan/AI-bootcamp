// Menü öğelerini seçme
const menuItems = document.querySelectorAll('.menu article');

// Menü öğelerine tıklama olayı ekleme
for (const menuItem of menuItems) {
  menuItem.addEventListener('click', function() {
    // Seçilen öğenin arka plan rengini değiştirme
    this.classList.toggle('active');
  });
}
