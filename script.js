let swiperInstance; // Переменная для хранения экземпляра Swiper

function manageSwiper() {
  const screenWidth = window.innerWidth; // Получаем ширину экрана

  if (screenWidth <= 767) { // Условие для активации свайпера (меньше или равно 768px)
    if (!swiperInstance) { // Если Swiper ещё не инициализирован
      swiperInstance = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        loop:true,
      });
    }
  } else {
    // Удаляем Swiper, если он существует, на больших экранах
    if (swiperInstance) {
      swiperInstance.destroy(true, true); // Полностью уничтожаем Swiper
      swiperInstance = null; // Очищаем переменную
    }
  }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
manageSwiper();
window.addEventListener('resize', manageSwiper);

manageSwiper();
window.addEventListener('resize', manageSwiper);

function readMore() {
    let toggleButton = document.getElementById("toggleButton");
    let acer = document.getElementById("acer");
    let sony = document.getElementById("sony");

    if (acer.style.display === "none") {
      acer.style.display = "grid";
      toggleButton.innerHTML = "Скрыть";
    } else {
      acer.style.display = "none";
      toggleButton.innerHTML = "Показать все";
    }

    if (sony.style.display === "none") {
      sony.style.display = "grid";
      toggleButton.innerHTML = "Скрыть";
    } else {
      sony.style.display = "none";
      toggleButton.innerHTML = "Показать все";
    }
}